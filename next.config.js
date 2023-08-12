/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.ibb.co'], // Add the domain(s) where your images are hosted
  },
}

module.exports = nextConfig
