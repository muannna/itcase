export function ProductCard({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.brand}</p>
      <h3>Цвета:</h3>
      <ul>
        {product.colors.map((color) => (
          <li key={color.id}>
            {color.name} — {color.price}
          </li>
        ))}
      </ul>
    </div>
  )
}
