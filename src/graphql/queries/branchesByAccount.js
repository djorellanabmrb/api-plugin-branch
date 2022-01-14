import ReactionError from "@reactioncommerce/reaction-error";

/**
 * @name orderById
 * @method
 * @memberof Order/NoMeteorQueries
 * @summary Query the Orders collection for an order with the provided orderId
 * @param {Object} context - an object containing the per-request state
 * @param {Object} params - request parameters
 * @param {String} params.orderId - Order ID
 * @param {String} params.shopId - Shop ID for the shop that owns the order
 * @param {String} [params.token] - Anonymous order token
 * @returns {Promise<Object>|undefined} - An Order document, if one is found
 */
export default async function branchesByAccount(
  context,
  { accountId, shopId }
) {
  const { collections } = context;
  const { Branches, Accounts } = collections;
  const account = await Accounts.findOne({ _id: accountId });
  if (!account) {
    throw new ReactionError("invalid-account", "The account must be exist");
  }
  let branches = await Branches.find({
    shopId,
    active: true
  });
  branches = await branches.toArray();
  if (!Array.isArray(account.branches)) {
    return { accountBranches: [], complement: branches };
  }
  const result = { accountBranches: [], complement: [] };
  branches.forEach((_branch) => {
    if (account.branches.includes(_branch._id)) {
      result.accountBranches.push(_branch);
    } else {
      result.complement.push(_branch);
    }
  });
  return result;
}
