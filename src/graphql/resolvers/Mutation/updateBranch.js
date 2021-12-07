import {
  decodeShopOpaqueId
} from "../../../xforms/id.js";

/**
 * @name Mutation/updateBranch
 * @method
 * @memberof Branch/GraphQL
 * @summary resolver for the updateBranch GraphQL mutation
 * @param {Object} _ - unused
 * @param {Object} args.input - an object of all mutation arguments that were sent by the client
 * @param {Object} context - an object containing the per-request state
 * @returns {Promise<Object>} UpdateShopPayload
 */
export default async function updateBranch(_, { input }, context) {
  const {
    clientMutationId = null,
    shopId: opaqueShopId,
    ...passThroughInput
  } = input;
  const shopId = decodeShopOpaqueId(opaqueShopId);

  const updatedBranch = await context.mutations.updateBranch(context, {
    ...passThroughInput,
    shopId
  });

  return {
    branch: updatedBranch,
    clientMutationId
  };
}
