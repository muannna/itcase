import { EmptyState } from '../../shared/ui/emptyState/EmptyState'
import { ProductsList } from './components/products/ProductsList/ProductsList'

export function ProductsPageContent({ products, sortedProducts }) {
  if (!products || !products.length) {
    return <EmptyState text="No products available." />
  }

  if (!sortedProducts || !sortedProducts.length) {
    return <EmptyState text="No products match the current filters." />
  }

  return <ProductsList products={sortedProducts} />
}
