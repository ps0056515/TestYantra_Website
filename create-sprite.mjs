/**
 * Creates a CSS sprite sheet from individual logo images.
 * All logos are normalized to the SAME HEIGHT for visual consistency,
 * then centered in uniform cells.
 */
import sharp from "sharp";
import { readdir } from "node:fs/promises";
import { join, resolve } from "node:path";

const CELL_WIDTH = 200;
const CELL_HEIGHT = 80;
const LOGO_HEIGHT = 40; // All logos are scaled to exactly this height

const LOGO_DIR = resolve(
  "C:/Users/QSP/.gemini/antigravity/brain/f6d99341-3999-48e3-9340-eecde4842866"
);

const GRID_IMG = resolve(LOGO_DIR, "brand_sprite_grid_1780998240585.png");

const LOGO_FILES = [
  { prefix: "logo_kotak", gridPos: null },
  { prefix: "logo_cars24", gridPos: null },
  { prefix: "logo_legaldst", gridPos: null },
  { prefix: "logo_capgemini", gridPos: null },
  { prefix: "logo_google_v2", gridPos: null },
  { prefix: "logo_kukufm", gridPos: null },
  { prefix: "logo_motilal_oswal", gridPos: null },
  { prefix: "logo_ncdex", gridPos: null },
  { prefix: "logo_nergy", gridPos: null },
  { prefix: "logo_nimbbl", gridPos: null },
  { prefix: "logo_paymentz", gridPos: null },
  { prefix: null, gridPos: { row: 3, col: 1 } }, // QSS Technosoft
  { prefix: null, gridPos: { row: 3, col: 2 } }, // Quilo
  { prefix: null, gridPos: { row: 3, col: 3 } }, // Securden
];

async function findLogoFile(prefix) {
  const files = await readdir(LOGO_DIR);
  const match = files.find(
    (f) =>
      f.startsWith(prefix + "_") &&
      (f.endsWith(".png") || f.endsWith(".jpg") || f.endsWith(".jpeg"))
  );
  return match ? join(LOGO_DIR, match) : null;
}

async function getLogoBuffer(entry) {
  if (entry.prefix) {
    const filePath = await findLogoFile(entry.prefix);
    if (!filePath) return null;
    return sharp(filePath).png().toBuffer();
  }
  const gridMeta = await sharp(GRID_IMG).metadata();
  const cellW = Math.floor(gridMeta.width / 4);
  const cellH = Math.floor(gridMeta.height / 4);
  const inset = 12; // Crop 12px from each edge to discard grid lines
  const x = entry.gridPos.col * cellW + inset;
  const y = entry.gridPos.row * cellH + inset;
  const w = cellW - 2 * inset;
  const h = cellH - 2 * inset;
  return sharp(GRID_IMG)
    .extract({ left: x, top: y, width: w, height: h })
    .png()
    .toBuffer();
}

async function makeWhiteTransparent(buffer) {
  const { data, info } = await sharp(buffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = info;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    // If the pixel is very close to white, make it fully transparent
    if (r > 245 && g > 245 && b > 245) {
      data[i + 3] = 0;
    }
  }

  return sharp(data, { raw: { width, height, channels: 4 } })
    .png()
    .toBuffer();
}

async function createSprite() {
  const COLS = LOGO_FILES.length;
  const totalWidth = CELL_WIDTH * COLS;
  const totalHeight = CELL_HEIGHT;

  const canvas = sharp({
    create: {
      width: totalWidth,
      height: totalHeight,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    },
  });

  const composites = [];

  for (let i = 0; i < LOGO_FILES.length; i++) {
    const buf = await getLogoBuffer(LOGO_FILES[i]);
    if (!buf) {
      console.log(`⚠ Skipping index ${i}`);
      continue;
    }

    // 1. Flatten to white background
    const flattened = await sharp(buf)
      .flatten({ background: { r: 255, g: 255, b: 255 } })
      .png()
      .toBuffer();

    // 2. Trim whitespace
    const trimmed = await sharp(flattened)
      .trim({ threshold: 20 })
      .png()
      .toBuffer();

    // Convert white background to transparency
    const transparent = await makeWhiteTransparent(trimmed);

    // 3. Normalize size based on visual area (equal visual weight)
    const TARGET_AREA = 5400; // Target area in sq px to balance visual weight
    const MAX_CELL_WIDTH = 180; // Safety horizontal margin (200px cell)
    const MAX_CELL_HEIGHT = 60; // Safety vertical margin (80px cell)

    const rawMeta = await sharp(transparent).metadata();
    const ar = rawMeta.width / rawMeta.height;

    // Calculate height based on area: H = sqrt(Area / AspectRatio)
    let targetH = Math.round(Math.sqrt(TARGET_AREA / ar));
    let targetW = Math.round(targetH * ar);

    // Apply bounds constraints
    if (targetW > MAX_CELL_WIDTH) {
      targetW = MAX_CELL_WIDTH;
      targetH = Math.round(targetW / ar);
    }
    if (targetH > MAX_CELL_HEIGHT) {
      targetH = MAX_CELL_HEIGHT;
      targetW = Math.round(targetH * ar);
    }

    const resized = await sharp(transparent)
      .resize({
        width: targetW,
        height: targetH,
        fit: "fill",
        withoutEnlargement: false,
      })
      .png()
      .toBuffer();

    const meta = await sharp(resized).metadata();
    const offsetX = i * CELL_WIDTH + Math.floor((CELL_WIDTH - meta.width) / 2);
    const offsetY = Math.floor((CELL_HEIGHT - meta.height) / 2);

    composites.push({
      input: resized,
      left: offsetX,
      top: offsetY,
    });

    console.log(
      `✓ [${i}] ${LOGO_FILES[i].prefix || "grid"} (ar: ${ar.toFixed(2)}) → ${meta.width}×${meta.height} at (${offsetX}, ${offsetY})`
    );
  }

  const outputPath = resolve("public/images/brand_logos_sprite.png");
  await canvas.composite(composites).png().toFile(outputPath);
  console.log(`\n✅ Sprite saved: ${outputPath}`);
  console.log(`   Total: ${totalWidth}×${totalHeight} | Cells: ${COLS} @ ${CELL_WIDTH}×${CELL_HEIGHT}`);
  console.log(`   All logos normalized to TARGET_AREA`);
}

createSprite().catch(console.error);
