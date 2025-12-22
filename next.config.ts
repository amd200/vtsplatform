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
        hostname: "eslam-yahia-physics.com",
        pathname: "/**",
      },
      // {
      //   protocol: "https",
      //   hostname: process.env.NEXT_PUBLIC_BASE_URL!.replace(/^https?:\/\//, ""),
      //   pathname: "/**",
      // },
      {
        protocol: "https",
        hostname: "localhost",
        port: "44314",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mrahmedmostafa.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.alpha-dz.com",
        pathname: "/**",
      },
    ],
  },

  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path((?!auth).*)", // ✅ استثناء مسار /api/auth
  //       destination: "https://faroukplatform.com/api/:path*",
  //     },
  //   ];
  // },
};

export default withNextVideo(nextConfig);
