require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

const proxy = require("http-proxy-middleware");

const lambdaServerDefaults = filename => ({
  typePrefix: "lambda__",
  data: {},
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  },
  url:
    process.env.NODE_ENV == "production"
      ? `${process.env.URL}/.netlify/functions/${filename}`
      : `http://localhost:9000/${filename}`
});

const mediumPostsServerOptions = {
  name: `mediumPosts`,
  ...lambdaServerDefaults("getMediumPosts"),
  verboseOutput: true
};

module.exports = {
  siteMetadata: {
    title: `Centrifuge: Real World DeFi`,
    siteUrl: process.env.URL || "http://localhost:8000",
    longTitle: `Centrifuge: Real World DeFi`,
    description: `Decentralized asset finance: asset Originators can access bankless liquidity, and investors can earn attractive yields from an open marketplace of asset pools.`,
    author: `@centrifuge`,
    lambdaUrl:
      process.env.NODE_ENV == "production"
        ? `${process.env.URL}/.netlify/functions/`
        : `http://localhost:9000/`
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
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: `https://centrifuge.us17.list-manage.com/subscribe/post?u=27084e1d9e6f92398b5c7ce91&amp;id=e00b1ece80`
      }
    },
    {
      resolve: "gatsby-source-apiserver",
      options: mediumPostsServerOptions
    },
    {
      resolve: `gatsby-transformer-yaml-plus`,
      options: {
        enableRemark: true,
        markdownPreface: "md//"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/images/`
      }
    },
    {
      resolve: `gatsby-source-lever`,
      options: {
        site: `centrifuge`,
        verboseOutput: false
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: []
            }
          }
        ],
        extensions: [`.md`],
        defaultLayouts: {
          default: require.resolve(`./src/components/MDXLayout/index.js`)
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId:
          process.env.URL === "https://centrifuge.io" ? `UA-100764518-2` : ``,
        head: false,
        anonymize: true,
        respectDNT: true,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "centrifuge.io"
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cache`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        allPageHeaders: [
          "Link: </fonts/721263/2cd55546-ec00-4af9-aeca-4a3cd186da53.woff2>; rel=preload; as=font; crossorigin=crossorigin; nopush",
          "Link: </fonts/721275/627fbb5a-3bae-4cd9-b617-2f923e29d55e.woff2>; rel=preload; as=font; crossorigin=crossorigin; nopush",
          "Link: </fonts/721269/aad99a1f-7917-4dd6-bbb5-b07cedbff64f.woff2>; rel=preload; as=font; crossorigin=crossorigin; nopush"
        ]
      }
    }
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
