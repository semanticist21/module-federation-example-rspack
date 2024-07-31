const { composePlugins, withNx, withReact } = require('@nx/rspack');
const {
  ModuleFederationPlugin,
} = require('@module-federation/enhanced/rspack');

module.exports = composePlugins(withNx(), withReact(), (config) => {
  return {
    ...config,
    devServer: {
      historyApiFallback: true,
    },
    output: {
      uniqueName: 'remote1',
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'remote1',
        exposes: {
          './store-page': './apps/remote1/src/app/pages/store-page.tsx',
        },
        shared: ['react', 'react-dom'],
      }),
    ],
    module: {
      rules: [
        ...config.module.rules,
        {
          test: /\.css$/,
          use: ['postcss-loader'],
          type: 'css',
        },
      ],
    },
  };
});
