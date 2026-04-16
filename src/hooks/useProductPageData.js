import { useProduct } from '../queries/products/useProduct'
import { useCategory } from '../queries/categories/useCategory'
import { useSizes } from '../queries/sizes/useSizes'

export function useProductPageData(id) {
  const { data: product, isLoading: isProductLoading, error: productError } = useProduct(id)
  const {
    data: category,
    isLoading: isCategoryLoading,
    error: categoryError,
  } = useCategory(product?.categoryId)
  const { data: sizes = [], isLoading: isSizesLoading, error: sizesError } = useSizes()
  const isLoading = isProductLoading || isCategoryLoading || isSizesLoading
  const error = productError || categoryError || sizesError

  return {
    product,
    category,
    sizes,
    isLoading,
    error,
  }
}
