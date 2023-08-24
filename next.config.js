/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        tyledComponents: true,
    },
};

module.exports = nextConfig;