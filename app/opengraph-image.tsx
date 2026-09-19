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
          background: "#0A0A0F",
          color: "#F2F2F5",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: "0.24em",
            color: "#C6FF3D",
            textTransform: "uppercase",
          }}
        >
          IBC x SAAR
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 72, fontWeight: 700, maxWidth: 920 }}>
            Attention first. Listings follow.
          </div>
          <div style={{ fontSize: 30, color: "#8B8B9E", maxWidth: 980 }}>
            $35K growth package proposal for SAAR.
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#FF3DA6" }}>Prepared by IBC, September 2026</div>
      </div>
    ),
    size,
  );
}
