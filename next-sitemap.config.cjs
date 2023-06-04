/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ybram.xyz',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  additionalPaths: async () => {
    const result = [{ loc: '/author' }, { loc: '/about' }, { loc: '/contact' }];
    return result;
  }
};
