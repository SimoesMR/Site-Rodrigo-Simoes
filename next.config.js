/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export", // Habilita a exportação estática
  basePath: process.env.NEXT_PUBLIC_PDF_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_PDF_PATH,
  env: {
    NEXT_PUBLIC_PDF_PATH: process.env.NEXT_PUBLIC_PDF_PATH,
  },
};

module.exports = nextConfig;
