import { ImageResponse } from "next/og";

import { siteConfig } from "@/constants/site";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#171717",
          color: "#fafafa",
          fontSize: 14,
          fontWeight: 700,
        }}
      >
        {siteConfig.name
          .split(" ")
          .map((part) => part[0])
          .join("")}
      </div>
    ),
    { ...size },
  );
}
