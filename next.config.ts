import type { NextConfig } from "next";

// Normalize base path from env; expected to be like "/drogurileucid" for GitHub Pages project sites
const basePathEnv = process.env.NEXT_PUBLIC_BASE_PATH;
const normalizedBasePath = basePathEnv
  ? basePathEnv.startsWith("/")
    ? basePathEnv
    : `/${basePathEnv}`
  : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(normalizedBasePath
    ? { basePath: normalizedBasePath, assetPrefix: normalizedBasePath }
    : {}),
};

export default nextConfig;
