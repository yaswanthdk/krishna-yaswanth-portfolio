import { ImageResponse } from "next/og";

import { siteConfig } from "@/constants/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#fafafa",
          color: "#171717",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            color: "#525252",
          }}
        >
          {siteConfig.jobTitle}
        </div>
        <div
          style={{
            marginTop: 32,
            maxWidth: 900,
            fontSize: 24,
            lineHeight: 1.5,
            color: "#737373",
          }}
        >
          {siteConfig.description}
        </div>
      </div>
    ),
    { ...size },
  );
}
