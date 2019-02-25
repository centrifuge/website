require("dotenv").config();

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
  openBounties: {
    name: `gitcoinOpenBounties`,
    ...lambdaServerDefaults("getGitcoinOpenBounties"),
    verboseOutput: true,
    schemaType: {
      id: 1,
      status: "String",
      bounty_type: "String",
      title: "String",
      url: "String",
      value_in_usdt_now: "0.00",
      additional_funding_summary: {
        DAI: {
          amount: "0.00"
        }
      }
    }
  },
  hallOfFame: {
    name: `gitcoinHallOfFame`,
    ...lambdaServerDefaults("getGitcoinHallOfFame"),
    verboseOutput: true
  },
  completedBounties: {
    name: `gitcoinCompletedBounties`,
    ...lambdaServerDefaults("getGitcoinCompletedBounties"),
    verboseOutput: true
  }
};

module.exports = {
  siteMetadata: {
    title: `Centrifuge`,
    siteUrl: process.env.URL || "http://localhost:8000",
    longTitle: `Centrifuge - The Operating System for the Financial Supply Chain`,
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
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: `https://centrifuge.us17.list-manage.com/subscribe/post?u=27084e1d9e6f92398b5c7ce91&amp;id=e00b1ece80`
      }
    },
    {
      resolve: "gatsby-source-apiserver",
      options: breezyServerOptions
    },
    {
      resolve: "gatsby-source-apiserver",
      options: gitcoinServerOptions.openBounties
    },
    {
      resolve: "gatsby-source-apiserver",
      options: gitcoinServerOptions.hallOfFame
    },
    {
      resolve: "gatsby-source-apiserver",
      options: gitcoinServerOptions.completedBounties
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: `pvsr19vg7gf2`,
        accessToken:
          process.env.PRODUCTION === "true"
            ? `e3b22c70dea0a1a493bb6d9ad550b73d8ce287d6b47fd9a6d624a0229a92eb9b`
            : `ae1115a81ba7be43ad060bdc094f907aff4275e9776fc1d3de7e1cc963f73612`,
        host:
          process.env.PRODUCTION === "true"
            ? `cdn.contentful.com`
            : `preview.contentful.com`
      }
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `centrifuge`
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
