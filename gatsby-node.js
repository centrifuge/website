exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /intersection-observer/,
            use: loaders.null()
          },
          {
            test: /react-intersection-observer/,
            use: loaders.null()
          }
        ]
      }
    });
  }
};
