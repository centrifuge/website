const proxy = require("http-proxy-middleware");

const netlifyLambdaEndpoint = `${process.env.URL}/.netlify/functions`;

const breezyServerOptions = {
  // Type prefix of entities from server
  typePrefix: "lambda__",

  // The url, this should be the endpoint you are attempting to pull data from
  url:
    process.env.NODE_ENV == "production"
      ? `${netlifyLambdaEndpoint}/getBreezyJobListings`
      : `http://localhost:9000/getBreezyJobListings`,

  method: "GET",

  headers: {
    "Content-Type": "application/json"
  },

  // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
  // using this name. i.e. posts.json
  name: `breezy`,

  // Define schemaType to normalize blank values
  schemaType: {
    id: 1,
    position: "String",
    link: "String",
    location: "String",
    offering: "String"
  },

  // Optionally include some output when building
  // Default is false
  verboseOutput: true // For debugging purposes
};

const gitcoinServerOptions = {
  // Type prefix of entities from server
  typePrefix: "lambda__",

  // The url, this should be the endpoint you are attempting to pull data from
  url:
    process.env.NODE_ENV == "production"
      ? `${netlifyLambdaEndpoint}/getGitcoinBounties`
      : `http://localhost:9000/getGitcoinBounties`,

  method: "GET",

  headers: {
    "Content-Type": "application/json"
  },

  // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
  // using this name. i.e. posts.json
  name: `gitcoin`,

  // Define schemaType to normalize blank values
  // schemaType: {
  //   id: 1,
  //   position: "String",
  //   link: "String",
  //   location: "String",
  //   offering: "String"
  // },

  // Optionally include some output when building
  // Default is false
  verboseOutput: true // For debugging purposes
};

module.exports = {
  siteMetadata: {
    title: `Centrifuge`,
    longTitle: `Centrifuge - The Operating System For Global Commerce`,
    description: `Centrifuge is an open, decentralized operating system to connect the global financial supply chain. It allows any business to transact on a global network while maintaining ownership of their data, including their validated company details, their reputation, business relationships, and subsequent transactions.`,
    author: `@centrifuge`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `centrifuge-website`,
        short_name: `centrifuge`,
        start_url: `/`,
        background_color: `#fcba59`,
        theme_color: `#fcba59`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-source-apiserver",
      options: breezyServerOptions
    },
    {
      resolve: "gatsby-source-apiserver",
      options: gitcoinServerOptions
    },
    `gatsby-plugin-netlify`
  ],
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": ""
        }
      })
    );
  }
};
