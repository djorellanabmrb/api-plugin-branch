import {
  decodeShopOpaqueId,
  decodeAccountOpaqueId
} from "../../../xforms/id.js";

/**
 * @name Mutation/addBranchToAccount
 * @method
 * @memberof Shop/GraphQL
 * @summary resolver for the createBranch GraphQL mutation
 * @param {Object} _ - unused
 * @param {Object} args.input - an object of all mutation arguments that were sent by the client
 * @param {Object} context - an object containing the per-request state
 * @returns {Promise<Object>} CreateBranchPayload
 */
export default async function addBranchToAccount(_, args, context) {
  const { accountId: opaqueAccountId, shopId: opaqueShopId, branches } = args;
  const accountId = decodeAccountOpaqueId(opaqueAccountId);
  const shopId = decodeShopOpaqueId(opaqueShopId);
  const branch = await context.mutations.createBranch(context, {
    accountId,
    shopId,
    branches
  });

  return branch;
}
