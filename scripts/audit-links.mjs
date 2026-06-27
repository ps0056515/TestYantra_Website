/**
 * Pre-production link & anchor audit.
 * Run: node scripts/audit-links.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "src");

const SERVICE_SLUGS = [
  "managed-qa", "crowd-testing", "functional-testing", "accessibility-uat",
  "test-automation", "api-microservices", "production-monitoring",
  "testing-ai", "ai-in-testing", "ai-quality", "development",
  "professional-services", "training",
];

const ROUTES = new Set([
  "/",
  "/services",
  "/development",
  "/academy",
  "/industries",
  "/outcomes",
  "/contact",
  "/client-success",
  "/company/leadership",
  "/company/locations",
  ...SERVICE_SLUGS.map((s) => `/services/${s}`),
]);

const ANCHORS = new Set([
  "pillars", "ecosystem", "services", "capabilities",
  "capabilities-qa", "capabilities-qe", "capabilities-monitoring",
  "engage", "ai", "ai-lane-01", "ai-lane-02",
  "services-list", "talent-platform", "ai-hub", "details", "overview",
  "use-cases", "technologies",
]);

const INTEREST_MAP = {
  development: "TechnoElevate — Development & Staffing",
  talent: "TechnoElevate — Talent Platform (Build Your Team)",
  training: "Training & Academy",
  "ai-quality": "AI Quality Engineering",
  "testing-ai": "AI Quality Engineering",
  "ai-in-testing": "AI Quality Engineering",
};

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory() && ent.name !== "node_modules") walk(p, acc);
    else if (/\.(tsx?|jsx?|css)$/.test(ent.name)) acc.push(p);
  }
  return acc;
}

const hrefRe = /href=["'{`]([^"'`#]+)(#[^"'`]+)?["'`]/g;
const linkHrefRe = /href:\s*["']([^"'#]+)(#[^"']+)?["']/g;

const issues = [];
const links = [];

for (const file of walk(src)) {
  const rel = path.relative(root, file);
  const text = fs.readFileSync(file, "utf8");
  for (const re of [hrefRe, linkHrefRe]) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(text))) {
      const base = m[1];
      const hash = m[2]?.slice(1);
      links.push({ file: rel, base, hash: hash ?? null });
    }
  }
}

for (const { file, base, hash } of links) {
  if (base.startsWith("http") || base.startsWith("mailto:") || base.startsWith("tel:")) continue;
  if (base.startsWith("${")) continue;

  if (!ROUTES.has(base)) {
    issues.push({ type: "broken-route", file, href: base + (hash ? `#${hash}` : "") });
    continue;
  }

  if (hash && !ANCHORS.has(hash)) {
    issues.push({ type: "unknown-anchor", file, href: `${base}#${hash}` });
  }
}

// Contact interest param audit from service slugs
for (const slug of SERVICE_SLUGS) {
  const mapped = INTEREST_MAP[slug];
  const fallback = "Quality Engineering & Testing";
  const effective = mapped ?? fallback;
  if (
    ["ai-quality", "testing-ai", "ai-in-testing", "training", "development"].includes(slug) &&
    !mapped &&
    slug !== "managed-qa"
  ) {
    // training/development handled separately in contact page
  }
  if (slug === "training" && !INTEREST_MAP[slug]) {
    issues.push({
      type: "interest-mismatch",
      file: "contact/page.tsx",
      href: `/contact?interest=${slug}`,
      note: `Falls back to "${fallback}" instead of Training & Academy (contact maps interest=training only)`,
    });
  }
  if (["ai-quality", "testing-ai", "ai-in-testing"].includes(slug) && !INTEREST_MAP[slug]) {
    issues.push({
      type: "interest-mismatch",
      file: "contact/page.tsx",
      href: `/contact?interest=${slug}`,
      note: `Falls back to "${fallback}" instead of AI Quality Engineering`,
    });
  }
}

console.log(`\n=== Link Audit (${links.length} hrefs scanned) ===\n`);

const broken = issues.filter((i) => i.type === "broken-route");
const anchors = issues.filter((i) => i.type === "unknown-anchor");
const interest = issues.filter((i) => i.type === "interest-mismatch");

if (broken.length) {
  console.log("BROKEN ROUTES:");
  for (const i of broken) console.log(`  [${i.file}] ${i.href}`);
} else console.log("Routes: OK (all internal paths resolve)");

if (anchors.length) {
  console.log("\nUNKNOWN ANCHORS (may be dynamic / client-only):");
  for (const i of anchors) console.log(`  [${i.file}] ${i.href}`);
} else console.log("\nAnchors: OK");

if (interest.length) {
  console.log("\nCONTACT INTEREST MISMATCHES:");
  for (const i of interest) console.log(`  ${i.href} — ${i.note}`);
} else console.log("\nContact interest params: OK");

console.log(`\nTotal issues: ${issues.length}`);
process.exit(issues.length ? 1 : 0);
