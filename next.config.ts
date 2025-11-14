import { withNextVideo } from "next-video/process";
const CopyPlugin = require("copy-webpack-plugin");
const path = require("node:path");
import type { NextConfig } from "next";

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
        hostname: "faroukplatform.com",
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
        destination: "https://faroukplatform.com/api/:path*",
      },
    ];
  },
};

export default withNextVideo(nextConfig);
