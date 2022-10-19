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

## Pages and data

Each page gets its data from a json file in `/data/<page-name>.json`. Data is available in page component using a graphql query filtered by <page-slug>

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

Official docs on how to use [GraphQL Fragments](https://www.gatsbyjs.com/docs/reference/graphql-data-layer/using-graphql-fragments/)
