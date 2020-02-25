const path = require('path')
const { GraphQLJSON } = require('gatsby/graphql')

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name.match(/contentful.*RichTextNode/)) {
    return {
      contentAST: {
        type: GraphQLJSON,
        resolve: source => {
          // Can also use source.content here, not sure what is best practice vs. most performant
          // or if there are gotchas with one or the other
          return JSON.parse(source.internal.content)
        }
      }
    }
  }
  return {}
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        images: path.resolve(__dirname, 'src/images')
      }
    }
  })
}
