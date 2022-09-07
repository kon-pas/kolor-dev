/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/gradient/colors',
  //       destination: '/gradient/generate/colors',
  //       permanent: true,
  //     },
  //     {
  //       source: '/g',
  //       destination: '/gradient/generate/colors',
  //       permanent: true,
  //     }
  //   ]
  // }
}

module.exports = nextConfig
