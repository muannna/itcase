import { isProductInStock } from '../isProductInStock'

export const selectFilteredProducts = (products, filters) => {
  return products
    .filter((p) => !filters.inStock || isProductInStock(p))
    .filter((p) => !filters.search || p.name.toLowerCase().includes(filters.search.toLowerCase()))
}
