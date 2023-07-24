// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    enableUndici: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
  env: {
    COMMENTS_REPO: 'gironajs/gironajs.com',
    COMMENTS_REPO_ID: 'R_kgDOJGXldQ',
    COMMENTS_CATEGORY: 'Announcements',
    COMMENTS_CATEGORY_ID: 'DIC_kwDOJlwoBM4CWpCu',
  },
};

module.exports = nextConfig;
