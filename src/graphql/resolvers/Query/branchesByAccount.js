import {
  decodeAccountOpaqueId,
  decodeShopOpaqueId
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
export default async function branchesByAccount(parentResult, args, context) {
  const { accountId: opaqueAccountId, shopId: opaqueShopId } = args;

  const accountId = decodeAccountOpaqueId(opaqueAccountId);
  const shopId = decodeShopOpaqueId(opaqueShopId);

  const branches = await context.queries.branchesByAccount(context, {
    accountId,
    shopId
  });

  return branches;
}
