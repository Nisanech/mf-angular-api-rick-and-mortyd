const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe1",
  filename: "remoteEntry.js",
  exposes: {
    "./routes": "./src/app/presentation/mfe1.routes.ts",
    "./CharacterCardComponent":
      "./src/app/presentation/shared/components/character-card/character-card.component.ts",
    "./CharacterTableComponent":
      "./src/app/presentation/shared/components/character-table/character-table.component.ts",
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
