import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
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
  async redirects() {
    return [
      {
        source: "/",
        destination: "/helium-solar.html",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
