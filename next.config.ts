import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Some source PNGs fail the default optimizer; serve originals from heliumsolar.in
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.storebox.ai",
      },
      {
        protocol: "https",
        hostname: "admin.storebox.ai",
      },
      {
        protocol: "https",
        hostname: "www.heliumsolar.in",
      },
      {
        protocol: "https",
        hostname: "heliumsolar.in",
      },
    ],
  },
};

export default nextConfig;
