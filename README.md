<h1>
  <a href="https://centrifuge.io/" target="_blank" style="color: inherit">
    Centrifuge: Real World DeFi
  </a>
</h1>

Build upon [Gatsby minimal TypeScript starter](https://github.com/gatsbyjs/gatsby-starter-minimal-ts)

## Development

```shell
yarn install
yarn start
```

Site runs on http://localhost:8000

Graphql playground runs on http://localhost:8000/\_\_\_graphql

---

## Deployment

Create a build

```shell
yarn build
```

Test a build locally

```shell
yarn build
yarn serve
```

---

## JSON page data

To source data from json files, we use [gatsby-source-filesystem](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/). The configuration can be found in `gatsby-config.ts -> plugins`

Each page gets its data from a json file in `/data/<page-name>.json`. Data is available in page component using a graphql query filtered by `<page-slug>`.

Mandatory entries in each json file (except for `index.tsx`)

- slug: same as file name in pages folder (eg: `pages/about.tsx` -> `"slug": "/about"`)
- seo: `title` and `description` (if not set it falls back to `siteMetadata` in `gatsby-config.ts`)

```javascript
export const query = graphql`
  query {
    dataJson(slug: { eq: "/<page-slug>" }) {
      seo {
        ...SeoFragment
      }
    }
  }
`
```

---

## Legal Pages

Because of it's repetitive content, legal pages

- `/imprint`
- `/terms`
- `/security`
- `/data-privacy-policy`

are generated in `gatsby-node.ts`. The pages text content is stored in markdown files `/data/legal/<site-slug>.md`. Loaded markdown files are transfomed via `gatsby-transformer-remark`.

---

## Crowdloan Pages

Both crowdloan pages

- `/parachain/crowdloan`
- `/altair/crowdloan`

are generated in `gatsby-node.ts`. Most of their content is static because the auctions are closed already. The routes are taken over from the former site to keep urls alive.

---

## GraphQL Fragments

Queries of component data are defined inside the component file. To be able to spread them into the page query, they are exported as fragments.

Note: See how `DataJsonHero_main` is constructed from the folder name `/data`, the file format `.json` and the key `hero_main` of the entry.

Eg `/src/components/hero-main/index.tsx`:

```javascript
export const query = graphql`
  fragment HeroMainFragment on DataJsonHero_main {
    title
    ticker
    body
    partners {
      image {
        publicURL
        extension
      }
      alt
    }
  }
`
```

Spread this fragment inside any page query:

```javascript
export const query = graphql`
  query {
    dataJson(slug: { eq: "/" }) {
      hero_main {
        ...HeroMainFragment
      }
    }
  }
`
```

Explore and test on the graphql playground http://localhost:8000/\_\_\_graphql

Official docs on how to use [GraphQL Fragments](https://www.gatsbyjs.com/docs/reference/graphql-data-layer/using-graphql-fragments/)

---

## Images

Images in `/data/images/.png | .jpg` that are referenced from within a `/data/*.json` are transformed by `gatsby-transformer-sharp` & `gatsby-plugin-sharp` and can get used by `gatsby-plugin-image`.

If possible use the `<Image />` component: `/src/components/Image.tsx`.
SVG files are not transformed but also handled by the component.

A query for `.png | .jpg | .svg` looks like this

```
image {
  childImageSharp {
    gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
  }
  publicURL
  extension
}
```

If only `.svg` images are queried use.

```
image {
    publicURL
    extension
  }
```

---

## Formatting

Code should be automaically formatted by config set in `.prettierrc.js`. If working with VisualStudioCode, one can install and enable the plugin [prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Functions (gcloud)

### Development

Starting the gatsby dev server will also start a server on `http://localhost:8080` as the functions API endpoint.

To add a new endpoint create a typescript file in `functions/src/exampleEndpoint.ts`

Next add the new route in the `routes.json` file using the same `name` as the file. Here you can add additional rules per route if necessary.

```json
[
  {
    "name": "exampleEndpoint",
    "options": {}
  }
  // ...
]
```

### Deployment

1. Ask for the necessary "cloud functions deployment" permissions from devops
2. If `gcloud CLI` is not installed, please install it:

- [brew formula](https://formulae.brew.sh/cask/google-cloud-sdk)
- [gcloud docs](https://cloud.google.com/sdk/docs/install)

3. Authenicate with gcloud

```
  gcloud auth login
```

4. Build the application locally

```
  yarn build:functions
```

5. Finally, deploy the bundled application

```
  yarn deploy:functions
```
