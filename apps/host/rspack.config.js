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
    plugins: [
      new ModuleFederationPlugin({
        name: 'host',
        remotes: {
          remote1: 'remote1@http://localhost:3001/mf-manifest.json',
        },
        shared: ['react', 'react-dom'],
      }),
    ],
  };
});
