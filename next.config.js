/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: {
      displayName: false,
    },
  },
}

module.exports = nextConfig
