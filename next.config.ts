import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["103.182.211.219"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
