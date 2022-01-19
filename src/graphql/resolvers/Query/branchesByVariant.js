import {
  decodeProductOpaqueId,
  decodeShopOpaqueId,
  decodeBranchOpaqueId
} from "../../../xforms/id.js";

/**
 * @name Query.brancchById
 * @method
 * @memberof Branch/GraphQL
 * @summary Get an order by ID.
 * @param {Object} parentResult - unused
 * @param {ConnectionArgs} args - An object of all arguments that were sent by the client
 * @param {String} args.id - ID of the branch
 * @param {Object} context - An object containing the per-request state
 * @returns {Promise<Object>|undefined} An Branch object
 */
export default async function branchesByVariant(parentResult, args, context) {
  const {
    shopId: opaqueShopId,
    productId: opaqueProductId,
    branches: opaqueBranches
  } = args;

  const productId = decodeProductOpaqueId(opaqueProductId);
  const shopId = decodeShopOpaqueId(opaqueShopId);
  const branches = opaqueBranches.map((opaqueBranch) =>
    decodeBranchOpaqueId(opaqueBranch));

  const _branches = await context.queries.branchesByVariant(context, {
    productId,
    shopId,
    branches
  });

  return _branches;
}
