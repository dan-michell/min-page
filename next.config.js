const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["drive.google.com"],
    formats: ["image/avif"],
  },
};

module.exports = withContentlayer(nextConfig);
