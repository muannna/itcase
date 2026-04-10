export function ProductMedia({ selectedColor, product }) {
  return (
    <div>
      <img src={selectedColor.images[0]} alt={product.name} width={200} height={250} />
    </div>
  )
}
