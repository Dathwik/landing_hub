import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#08000f",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "monospace",
          fontSize: 13,
          fontWeight: 700,
          color: "#ff2d78",
          letterSpacing: "-0.5px",
        }}
      >
        DK
      </div>
    ),
    { ...size }
  );
}
