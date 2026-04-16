import { useProducts } from '../../queries/products/useProducts'
import { useSizes } from '../../queries/sizes/useSizes'

export function useCartPageData() {
  const { data: products = [], isLoading: isProductsLoading, error: productsError } = useProducts()
  const { data: sizes = [], isLoading: isSizesLoading, error: sizesError } = useSizes()
  const isLoading = isProductsLoading || isSizesLoading
  const error = productsError || sizesError

  return {
    products,
    sizes,
    isLoading,
    error,
  }
}
