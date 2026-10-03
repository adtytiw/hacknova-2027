import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.mitbtcexpo.org",
        pathname: "/assets/img/team/**",
      },
      {
        protocol: "https",
        hostname: "www.mitbtcexpo.org",
        pathname: "/assets/img/speakers/**",
      },
    ],
  },
};

export default nextConfig;
