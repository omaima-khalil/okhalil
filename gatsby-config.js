module.exports = {
  siteMetadata: {
    title: `My blog`,
    author: {
      name: `Omaima`,
      summary: `Opinions are mine`,
    },
    description: `All about new technologies and efficient project management methodologies.`,
    siteUrl: `http://localhost:8000/`,
    social: {
      twitter: `@BadQuinn3`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `blog`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
  ],
};
