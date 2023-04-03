const path = require("path")

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
   siteMetadata: {
      title: `gouden kwast`,
      siteUrl: `https://www.yourdomain.tld`,
   },
   plugins: [
      {
         resolve: "gatsby-source-wordpress",
         options: {
            url: "https://goudenkwast.laupwing.site/graphql",
         },
      },
      "gatsby-plugin-postcss",
      "gatsby-plugin-image",
      "gatsby-plugin-sass",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      {
         resolve: "gatsby-source-filesystem",
         options: {
            name: "images",
            path: "./src/images/",
         },
         __key: "images",
      },
      {
         resolve: "gatsby-plugin-root-import",
         options: {
            "~": path.join(__dirname, "src")
         }
      }
   ],
}
