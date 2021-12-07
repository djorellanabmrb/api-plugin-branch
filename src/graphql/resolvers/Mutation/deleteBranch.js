import { decodeShopOpaqueId } from "../../../xforms/id.js";

/**
 * @name Mutation/updateBranch
 * @method
 * @memberof Branch/GraphQL
 * @summary resolver for the deleteBranch GraphQL mutation
 * @param {Object} _ - unused
 * @param {Object} args.input - an object of all mutation arguments that were sent by the client
 * @param {Object} context - an object containing the per-request state
 * @returns {Promise<Object>} DeleteBranchPayload
 */
export default async function deleteBranch(_, { input }, context) {
  const { clientMutationId = null, branchId: opaqueBranchId } = input;
  const branchId = decodeShopOpaqueId(opaqueBranchId);

  const deletedBranch = await context.mutations.updateBranch(context, {
    branchId
  });

  return {
    branch: deletedBranch,
    clientMutationId
  };
}
