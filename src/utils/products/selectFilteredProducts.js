import { isProductInStock } from '../isProductInStock'

export const selectFilteredProducts = (products, filters) => {
  return products
    .filter((product) => !filters.inStock || isProductInStock(product))
    .filter(
      (product) =>
        !filters.search || product.name.toLowerCase().includes(filters.search.toLowerCase()),
    )
}
