module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://www.sharekard.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`Wines`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Cinzel`,
            variants: [`400`, `700`],
          },
          {
            family: `Montserrat`,
            variants: [`400`, `700`],
          },
          {
            family: `Roboto`,
          },
        ],
        display: "swap",
      },
    },
  ],
}
