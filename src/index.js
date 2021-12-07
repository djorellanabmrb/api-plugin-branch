import pkg from "../package.json";
import policies from "./policies.json";
import startup from "./startup.js";
import schemas from "./schemas/index.js";
import resolvers from "./graphql/resolvers";
import Branch from "./simpleSchemas.js";
import mutations from "./graphql/mutations/index.js";
import queries from "./graphql/queries/index.js";

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionAPI} app The ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(app) {
  await app.registerPlugin({
    label: "Branches",
    name: "branches",
    version: pkg.version,
    collections: {
      Branches: {
        name: "Branches"
      }
    },
    functionsByType: {
      startup: [startup]
    },
    policies,
    graphQL: {
      schemas,
      resolvers
    },
    mutations,
    queries,
    simpleSchemas: {
      Branch
    }
  });
}