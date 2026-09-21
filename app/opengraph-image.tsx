import { ImageResponse } from "next/og";

export const alt = "Phanira — Ideas into existence.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: "#071019", color: "white", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px", width: "100%", height: "100%", fontFamily: "Arial" }}>
      <div style={{ fontSize: 34, letterSpacing: 8 }}>PHANIRΛ</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ fontSize: 76, lineHeight: 1.05 }}>Ideas into existence.</div>
        <div style={{ fontSize: 28, color: "#c6cbd2" }}>Intelligent products for a more useful tomorrow.</div>
      </div>
      <div style={{ fontSize: 22, color: "#a98aff", letterSpacing: 4 }}>PHANIRA.COM</div>
    </div>,
    { ...size },
  );
}
