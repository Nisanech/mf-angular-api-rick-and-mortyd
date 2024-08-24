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
    "CharacterPaginationEvent": "./src/app/infraestructure/services/events/event-bus.service.ts"
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
