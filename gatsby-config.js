module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
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
  ],
};
