export const QUERY_KEYS = {
  PRODUCTS: ['products'],
  PRODUCT: (id) => ['product', id],
  CATEGORIES: ['categories'],
  CATEGORY: (id) => ['category', id],
  SIZES: ['sizes'],
  SIZE: (id) => ['size', id],
  COLOR: (productID, colorID) => ['color', productID, colorID],
}
