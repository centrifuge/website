const proxy = require("http-proxy-middleware");

const lambdaServerDefaults = filename => ({
  typePrefix: "lambda__",
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  },
  url:
    process.env.NODE_ENV == "production"
      ? `${process.env.URL}/.netlify/functions/${filename}`
      : `http://localhost:9000/${filename}`
});

const breezyServerOptions = {
  name: `breezy`,
  ...lambdaServerDefaults("getBreezyJobListings"),
  schemaType: {
    id: 1,
    position: "String",
    link: "String",
    location: "String",
    offering: "String"
  },
  verboseOutput: true
};

const gitcoinServerOptions = {
  name: `gitcoin`,
  ...lambdaServerDefaults("getGitcoinBounties"),
  verboseOutput: true
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
        background_color: `#fff`,
        theme_color: `#2762ff`,
        display: `minimal-ui`,
        icon: `src/images/centrifuge-logo.png` // This path is relative to the root of the site.
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
