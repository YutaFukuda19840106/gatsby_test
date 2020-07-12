/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `ESSENTIALS`,
    description: `美味しい食材と食事を追求するサイト`,
    lang: `ja`,
    siteurl: `https://laughing-poitras-58d83b.netlify.app`,
    keywords: `ESSENTIALS`,
    locale: `ja_JP`,
    fbappid: `*****`,
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ESSENTIALS エッセンシャルズ`,
        short_name: `ESSENTIALS`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#477294`,
        display: `standalone`,
        icon: `src/images/icon.png`,



      },
    },
    `gatsby-plugin-offline`,
  ],
}
