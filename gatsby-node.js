const path = require("path");

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: path.resolve(
              __dirname,
              "node_modules/@polkadot/extension-dapp"
            ),
            use: loaders.null(),
          },
        ],
      },
    });
  }
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: {
        components: path.resolve(__dirname, "src/components"),
        images: path.resolve(__dirname, "src/images"),
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
      },
    },
  });
};
