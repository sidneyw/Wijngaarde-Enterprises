module.exports = {
  siteMetadata: {
    title: `Wijngaarde Enterprises`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: { fonts: [`Bitter`, `Open Sans`] }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify`
  ],
}
