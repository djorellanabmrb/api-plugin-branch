import decodeOpaqueIdForNamespace from "@reactioncommerce/api-utils/decodeOpaqueIdForNamespace.js";
import encodeOpaqueId from "@reactioncommerce/api-utils/encodeOpaqueId.js";

const namespaces = {
  Branch: "reaction/branch",
  Shop: "reaction/shop",
  Account: "reaction/account",
  Product: "reaction/product"
};

export const encodeProductOpaqueId = encodeOpaqueId(namespaces.Product);
export const decodeProductOpaqueId = decodeOpaqueIdForNamespace(namespaces.Product);

export const encodeAccountOpaqueId = encodeOpaqueId(namespaces.Account);
export const decodeAccountOpaqueId = decodeOpaqueIdForNamespace(namespaces.Account);

export const encodeBranchOpaqueId = encodeOpaqueId(namespaces.Branch);
export const decodeBranchOpaqueId = decodeOpaqueIdForNamespace(namespaces.Branch);

export const encodeShopOpaqueId = encodeOpaqueId(namespaces.Shop);
export const decodeShopOpaqueId = decodeOpaqueIdForNamespace(namespaces.Shop);
