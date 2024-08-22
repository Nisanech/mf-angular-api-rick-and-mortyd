const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe1',
  filename: 'remoteEntry.js',
  exposes: {
    "./routes": "./src/app/mfe1.routes.ts",
    './Component': './src/app/character-card/character-card.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
