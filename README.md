# website

[![Netlify Status](https://api.netlify.com/api/v1/badges/2a6f2fd1-0d97-413a-9e1a-3468f1467542/deploy-status)](https://app.netlify.com/sites/staging-centrifuge-website/deploys) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

This repo builds the centrifuge.io website with Gatsby and Netlify.

## Contribution

**NOTE**: Please only branch off of, and merge into `develop`. `master` is reserved for production.

### Getting Started

```sh
# install dependencies
npm install

# starts lambda and gatsby servers
npm run start
```

## MDX Pages
To see what layout elements are available on MDX pages, launch the site in dev mode and go to `/mdxguide/`

## Gotchas

When adding a new lambda function to work on a feature, the lambda must be merged into `develop` and then to `master` before any usage of of the lambda function is implemented. This is due to during the `gatsby build` step the lambda functions are called to pull in data, since the function is not callable the build completes and passes, its not avaiable during the build step.

Once your lambda function has been merged into `develop` and `master` then its okay to use the function during the build step.
