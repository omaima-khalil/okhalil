module.exports = {
  siteMetadata: {
    title: `Gatsby Crash Course`,
    author: {
      name: `James`,
      summary: `The Youtuber you are watching`,
    },
    description: `A simple Crash course .`,
    siteUrl: `http://localhost:8000/`,
    social: {
      twitter: `james_r_perkins`,
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
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
  ],
};
