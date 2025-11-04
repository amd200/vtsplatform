import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vedu-demo.vtsitco.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mrahmedmostafa.com",
        pathname: "/**",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/api/:path((?!auth).*)", // ✅ استثناء مسار /api/auth
        destination: "https://vedu-demo.vtsitco.com/api/:path*",
      },
    ];
  },
};

export default withNextVideo(nextConfig);
