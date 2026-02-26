/** @type {import('next').NextConfig} */
const repoName = "portfolio"; // GitHub repo name

const nextConfig = {
  output: "export",

  // Required for GitHub Pages project sites: https://username.github.io/repoName/
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  // Avoid next/image optimization (not available on static export hosting by default)
  images: { unoptimized: true },

  // Keep your existing ESLint setting
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;