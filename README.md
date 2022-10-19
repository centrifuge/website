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

- slug: same as file name in pages folder (eg: `pages/about-us.tsx` -> `"slug": "/about-us"`)
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
