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
  console.log("query", query);
  const branches = await collections.Branches.find(query);
  const branches2 = await collections.Branches.find({
    shopId: "NaMwRWBJzjYkgANXb"
  });
  console.log("branches2", branches2);
  //console.log("branches", branches);
  return branches;
}
