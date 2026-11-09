import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0f1419 0%, #1a2332 45%, #0f1419 100%)",
          padding: "64px 72px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "#f97316",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 22,
              fontWeight: 800,
            }}
          >
            TY
          </div>
          <span style={{ color: "#94a3b8", fontSize: 22, fontWeight: 600, letterSpacing: 2 }}>
            TESTYANTRA
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 900 }}>
          <div
            style={{
              color: "#f97316",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            End-to-End Engineering
          </div>
          <div
            style={{
              color: "#f8fafc",
              fontSize: 56,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: -1,
            }}
          >
            Software Testing & Quality Engineering
          </div>
          <div style={{ color: "#cbd5e1", fontSize: 26, lineHeight: 1.4, maxWidth: 820 }}>
            Managed QA · Test Automation · AI Quality · Product Engineering — 217+ global clients
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "#64748b", fontSize: 20 }}>{siteConfig.url.replace("https://", "")}</span>
          <div
            style={{
              background: "#f97316",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: 12,
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            Request a Consultation →
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
