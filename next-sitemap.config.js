/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://www.gironajs.com',
  generateRobotsTxt: true,
  sitemapSize: 10000,
};

module.exports = config;
