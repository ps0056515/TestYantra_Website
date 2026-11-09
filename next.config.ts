import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["103.182.211.219", "103.182.211.220", "localhost", "127.0.0.1"],
  async redirects() {
    return [
      { source: "/innovexce", destination: "/ai", permanent: true },
      { source: "/innovexce/:path*", destination: "/ai", permanent: true },
      // Two-section site: legacy single-site URLs map to the new sections.
      { source: "/development", destination: "/ai", permanent: true },
      { source: "/services/development", destination: "/ai/solutions", permanent: true },
      { source: "/services", destination: "/qe/solutions", permanent: true },
      { source: "/services/:slug", destination: "/qe/solutions/:slug", permanent: true },
      { source: "/client-success", destination: "/qe/case-studies", permanent: true },
      { source: "/blog", destination: "/insights", permanent: true },
      { source: "/blog/:path*", destination: "/insights", permanent: true },
    ];
  },
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
