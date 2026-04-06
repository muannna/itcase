import { useProducts } from '../../queries/products/useProducts'
import { isProductInStock } from '../../utils/isProductInStock'
import { ProductCard } from './components/ProductCard'
import { useSearchParams } from 'react-router-dom'

export function ProductsPage() {
  const { data: products, isLoading, error } = useProducts()
  const [searchParams, setSearchParams] = useSearchParams()

  const inStock = searchParams.get('inStock')

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

  const filteredProductes = products.filter((product) => {
    if (!inStock) return true

    return isProductInStock(product)
  })

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={inStock === 'true'}
          onChange={(e) => {
            const params = new URLSearchParams(searchParams)
            if (e.target.checked) {
              params.set('inStock', 'true')
            } else {
              params.delete('inStock')
            }
            setSearchParams(params)
          }}
        />
        In Stock Only
      </label>
      <div>
        <h1>Products</h1>
        <div>
          {filteredProductes.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  )
}
