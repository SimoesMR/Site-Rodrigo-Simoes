/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export", // Habilita a exportação estática
  basePath: "/Site-Rodrigo-Simoes",
  assetPrefix: "/Site-Rodrigo-Simoes",
};

module.exports = nextConfig;
