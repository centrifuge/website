import proxy from "http-proxy-middleware";

export default {
  siteMetadata: {
    title: `Centrifuge - The Operating System For Global Commerce`,
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
