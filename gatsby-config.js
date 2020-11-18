module.exports = {
  pathPrefix: "/temp-website",
  siteMetadata: {
    title: `Jasmeet Oberai`,
    description: `Jasmeet Oberais personal website`,
    author: `@JasmeetOberai`,
    email: "me@jasmeetoberai.com",
    github: "jasmeeto",
    linkedin: "jasoberai",
    facebook: "jas.oberai",
    twitter: "JasmeetOberai",
    website: "www.jasmeetoberai.com"
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: '_posts',
        path: `${__dirname}/src/blog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jasmeetoberai-website`,
        short_name: `jasweb`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
