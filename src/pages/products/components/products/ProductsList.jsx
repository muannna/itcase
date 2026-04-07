import { ProductCard } from './ProductCard'

export function ProductsList({ products }) {
  return (
    <div>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
