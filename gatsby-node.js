const path = require('path');

exports.onCreateWebpackConfig = ({ loaders, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: path.resolve(
            __dirname,
            'node_modules',
            '@polkadot/extension-dapp',
          ),
          use: loaders.null(),
        },
      ],
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        images: path.resolve(__dirname, 'src/images'),
      },
    },
  });
};
