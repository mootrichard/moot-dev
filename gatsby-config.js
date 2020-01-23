module.exports = {
  siteMetadata: {
    title: 'Gatsby + Node.js (TypeScript) API'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby + Node.js (TypeScript) API',
        short_name: 'Gatbsy + Node.js (TypeScript)',
        start_url: '/',
        icon: 'src/images/icon-48x48.png'
      }
    }
  ],
  pathPrefix: "/moot-dev",
};
