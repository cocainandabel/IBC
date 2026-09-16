import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

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
          padding: "56px",
          background: "#070B14",
          color: "#E6EAF2",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: "0.24em",
            color: "#D4A64A",
            textTransform: "uppercase",
          }}
        >
          American Fortress
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 72, fontWeight: 700, maxWidth: 880 }}>Korea and China, in 90 days</div>
          <div style={{ fontSize: 30, color: "#8A94A8", maxWidth: 980 }}>
            Asia market strategy by IBC for $AF listing readiness.
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#D4A64A" }}>americanfortress.io</div>
      </div>
    ),
    size,
  );
}
