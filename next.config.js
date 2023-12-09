/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    experimental: {
      serverActions: {
        bodySizeLimit: '2mb',
      },
    },
  }

module.exports = nextConfig
