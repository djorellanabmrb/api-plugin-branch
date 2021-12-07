import _ from "lodash";
import ReactionError from "@reactioncommerce/reaction-error";

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
export default async function branches(context, { filters, shopIds } = {}) {
  const { collections } = context;
  const { Branches } = collections;

  const query = {};

  let searchFieldFilter = {};

  // Validate user has permission to view orders for all shopIds
  if (!shopIds) {
    throw new ReactionError("invalid-param", "You must provide ShopId(s)");
  }
  for (const shopId of shopIds) {
    // eslint-disable-next-line no-await-in-loop
    await context.validatePermissions("reaction:legacy:orders", "read", {
      shopId
    });
  }

  query.shopId = { $in: shopIds };

  // Use `filters` to filters out results on the server
  if (filters && filters.searchField) {
    const { searchField } = filters;
    const regexMatch = { $regex: _.escapeRegExp(searchField), $options: "i" };
    searchFieldFilter = {
      $or: [
        // Regex match names as they include the whole name in one field
        { name: regexMatch },
        { address: regexMatch }
      ]
    };
  }

  // Build the final query
  query.$and = [
    {
      ...searchFieldFilter
    }
  ];

  return Branches.find(query);
}
