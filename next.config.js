/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export", // Habilita a exportação estática
  basePath: "/",
  assetPrefix: "/",
};

module.exports = nextConfig;
