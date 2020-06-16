module.exports = {
  siteMetadata: {
    title: `Miloah`,
    description: `Beauty salon`,
    author: `@Nickvr_`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Miloah`,
        short_name: `Miloah`,
        start_url: `/`,
        background_color: `#F2D7E0`,
        theme_color: `#F2D7E0`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
