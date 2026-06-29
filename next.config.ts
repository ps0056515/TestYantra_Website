import type { NextConfig } from "next";

const SHOW_DEV_INDICATOR = false; // Set to true to display the Next.js compilation/ISR float indicator

const nextConfig: NextConfig = {
  allowedDevOrigins: ["103.182.211.219"],
  devIndicators: SHOW_DEV_INDICATOR ? undefined : false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "unavatar.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.logo.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "t2.gstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
