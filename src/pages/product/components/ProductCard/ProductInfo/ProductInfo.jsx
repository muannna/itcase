export function ProductInfo({ category, selectedColor }) {
  return (
    <div>
      <h3>Description</h3>
      <p>Category: {category?.name}</p>
      <p>About product: {selectedColor.description}</p>
      <p>Color: {selectedColor.name}</p>
    </div>
  )
}
