module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    siteUrl: `http://headmade.pro`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: '25441691',
        webvisor: true,
        trackHash: true
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/projects`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    `gatsby-transformer-remark`
  ],
};
