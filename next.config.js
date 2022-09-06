/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/gradient',
        destination: '/gradients',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
