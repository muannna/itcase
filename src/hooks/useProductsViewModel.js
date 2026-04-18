import { useMemo } from 'react'
import { useProducts } from '../queries/products/useProducts'
import { useFilters } from './useFilters'
import { getCheapestData } from '../utils/getCheapestData'
import { isProductInStock } from '../utils/isProductInStock'
import { selectVisibleProducts } from '../utils/products/selectVisibleProducts'

export function useProductsViewModel() {
  const { data: products = [], isLoading, error } = useProducts()
  const { filters, updateFilter } = useFilters()

  const productsExt = useMemo(() => {
    const result = []
    for (const product of products) {
      const { cheapestPrice, cheapestColor } = getCheapestData(product.colors)
      if (!cheapestColor) continue
      result.push({
        ...product,
        cheapestPrice,
        cheapestColor,
        inStock: isProductInStock(product),
      })
    }
    return result
  }, [products])

  const sortedProducts = useMemo(() => {
    return selectVisibleProducts(productsExt, filters)
  }, [productsExt, filters])

  const canShowFilters = !error

  return {
    isLoading,
    error,
    canShowFilters,
    products,
    sortedProducts,
    filters,
    updateFilter,
  }
}
