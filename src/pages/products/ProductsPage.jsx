import { useProducts } from '../../queries/products/useProducts'
import { ProductCard } from './components/ProductCard'

export function ProductsPage() {
  const { data: products, isLoading, error } = useProducts()

  if (isLoading) {
    return <p>Loading products...</p>
  }

  if (error) {
    return <p>Error loading products: {error.message}</p>
  }

  if (!products || !products.length) {
    return (
      <div>
        <h1>Products</h1>
        <p>No products available.</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
