/** @type {import('next').NextConfig} */

const repoName = "portfolio";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",

  basePath: isProd ? `/${repoName}` : '',

  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;