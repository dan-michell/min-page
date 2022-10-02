/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["drive.google.com"],
    formats: ["image/jpg"],
  },
};

module.exports = nextConfig;
