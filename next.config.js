/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config.js");

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "v1.tailwindcss.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
