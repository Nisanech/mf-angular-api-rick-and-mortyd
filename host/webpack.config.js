const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  remotes: {
    mfe1: "mfe1@http://localhost:4201/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
      eager: false,
    }),
    "lib-event-bus-rm": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "0.0.1", // Asegúrate de que esta versión coincida con la instalada
      eager: false,
    },
  },
});
