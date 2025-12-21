import { withNextVideo } from "next-video/process";
const CopyPlugin = require("copy-webpack-plugin");
const path = require("node:path");
import type { NextConfig } from "next";
const withLess = require("next-with-less");

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        "@nutrient-sdk/viewer": "@nutrient-sdk/viewer",
      });
    }

    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "node_modules/@nutrient-sdk/viewer/dist"),
            to: path.resolve(__dirname, "public"),
            info: () => ({ minimized: true }),
            force: true,
          },
        ],
      })
    );

    return config;
  },
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

export default withLess(withNextVideo(nextConfig));
