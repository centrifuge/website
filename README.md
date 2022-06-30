# website

[![Netlify Status](https://api.netlify.com/api/v1/badges/2a6f2fd1-0d97-413a-9e1a-3468f1467542/deploy-status)](https://app.netlify.com/sites/staging-centrifuge-website/deploys) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

This repo builds the centrifuge.io website with Gatsby and Netlify.

## Contribution

**NOTE**: Please only branch off of, and merge into `develop`. `master` is reserved for production.

### Getting Started

> NodeJS v16+ and Yarn are required to run this project.

```sh
# install dependencies
yarn

# starts lambda and gatsby servers
yarn start
```

## MDX Pages

To see what layout elements are available on MDX pages, launch the site in dev mode and go to `/mdxguide/`

## Gotchas

When adding a new lambda function to work on a feature, the lambda must be merged into `develop` and then to `master` before any usage of of the lambda function is implemented. This is due to during the `gatsby build` step the lambda functions are called to pull in data, since the function is not callable the build completes and passes, its not avaiable during the build step.

Once your lambda function has been merged into `develop` and `master` then its okay to use the function during the build step.

Building the website requires setting the environment variable `URL` to the production URL of the website.

```sh
URL=https://centrifuge.io yarn build
```

### Managing pictures

When adding or changing pictures (such as the team pictures), make sure to follow the :

1. Crop the photo to only contain the canvas that is displayed on screen. That will avoid that parts of the picture that will never show on screen still get downloaded and add dead weight. For team pictures, we make crop square.

2. Resize the picture to the smallest size that preserves enough resolution and quality for the way it is displayed on the website.
   For team pictures, we keep them at 300x300px.

3. Run the picture through [tinypng](https://tinypng.com/) to compress it down.
