/**
 * @name orders
 * @method
 * @memberof Branch/NoMeteorQueries
 * @summary Query the Orders collection for orders and (optionally) shopIds
 * @param {Object} context - an object containing the per-request state
 * @param {Object} params - request parameters
 * @param {String} params.accountId - Account ID to search orders for
 * @param {Object}  params.filters - Filters to apply to a list of orders
 * @param {Array.<String>} params.shopIds - Shop IDs for the shops that owns the orders
 * @returns {Promise<Object>|undefined} - An Array of Order documents, if found
 */
export default async function branchWithoutPagination(
  context,
  { shopId } = {}
) {
  const { collections } = context;

  const query = { shopId };
  let demo = await collections.Branches.find({});
  console.log(demo);
  let data = await demo.exec();
  console.log(data);
  return collections.Branches.find({});
}
