import { ImageResponse } from "next/og";

export const alt = "SM Tawfiq — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", background: "#0A0A0A", color: "#E5E7EB", padding: "80px", position: "relative", fontFamily: "Arial" }}>
        <div style={{ position: "absolute", top: 58, right: 72, color: "#A3E635", fontSize: 28, border: "1px solid #A3E635", borderRadius: 14, padding: "12px 18px" }}>ST.</div>
        <div style={{ color: "#A3E635", fontSize: 20, letterSpacing: 5, marginBottom: 28 }}>FULL-STACK DEVELOPER</div>
        <div style={{ fontSize: 78, fontWeight: 800, letterSpacing: -3, marginBottom: 20 }}>SM Tawfiq<span style={{ color: "#A3E635" }}>.</span></div>
        <div style={{ fontSize: 30, color: "#9CA3AF", marginBottom: 42 }}>Building modern web experiences.</div>
        <div style={{ display: "flex", gap: 14, fontSize: 19 }}>
          {["Next.js", "React", "Node.js", "MongoDB"].map((name) => <div key={name} style={{ border: "1px solid #303030", background: "#111111", borderRadius: 30, padding: "12px 18px" }}>{name}</div>)}
        </div>
        <div style={{ position: "absolute", right: 80, bottom: 50, width: 150, height: 150, border: "1px solid #A3E635", borderRadius: 100, opacity: 0.22 }} />
      </div>
    ),
    { ...size }
  );
}
