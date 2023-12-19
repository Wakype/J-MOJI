/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { esmExternals: true },
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jkt48.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
