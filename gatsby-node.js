const { GraphQLJSON } = require("gatsby/graphql");

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name.match(/contentful.*RichTextNode/)) {
    return {
      contentAST: {
        type: GraphQLJSON,
        resolve: source => {
          // Can also use source.content here, not sure what is best practice vs. most performant
          // or if there are gotchas with one or the other
          return JSON.parse(source.internal.content);
        }
      }
    };
  }
  return {};
};
