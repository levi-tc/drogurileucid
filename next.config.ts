import type { NextConfig } from "next";

// Determine basePath for GitHub Pages project sites. Priority:
// 1) NEXT_PUBLIC_BASE_PATH if provided
// 2) If running in GitHub Actions, default to "/<repo>"
// 3) Otherwise, empty in local/dev
const repoFromGithub = process.env.GITHUB_REPOSITORY?.split("/")[1];
const computedDefault = repoFromGithub ? `/${repoFromGithub}` : "";
const basePathEnv = process.env.NEXT_PUBLIC_BASE_PATH ?? computedDefault;
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
