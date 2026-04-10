import { useCategory } from '../../../../queries/categories/useCategory'
import { useSizes } from '../../../../queries/sizes/useSizes'
import { useProductParams } from '../../../../hooks/useProductParams'
import { formatPrice } from '../../../../utils/formatPrice'
import { Button } from '../../../../shared/ui/button/Button'

export function ProductCard({ product }) {
  const { data: category } = useCategory(product.categoryId)
  const { data: sizes = [] } = useSizes()
  const { selectedColor, selectedSize, setColor, setSize } = useProductParams(product)

  const availableSizes = new Set(selectedColor.sizes)

  return (
    <div>
      <div>
        <img src={selectedColor.images[0]} alt={product.name} width={200} height={250} />
      </div>
      <div>
        <div>
          <h1>
            {product.name} {product.brand}
          </h1>
          <ul>
            {product.colors.map((color) => (
              <Button
                key={color.id}
                onClick={() => setColor(color.id)}
                style={{
                  fontWeight: color.id === selectedColor.id ? 'bold' : 'normal',
                }}
              >
                {color.name}
              </Button>
            ))}
          </ul>
          <ul>
            {sizes.map((size) => {
              const isAvailable = availableSizes.has(size.id)
              return (
                <li
                  key={size.id}
                  onClick={() => {
                    if (!isAvailable) return
                    setSize(size.id)
                  }}
                  style={{
                    opacity: isAvailable ? 1 : 0.3,
                    fontweight: selectedSize === size.id ? 'bold' : 'normal',
                  }}
                >
                  {size.name} ({size.number})
                </li>
              )
            })}
          </ul>
          <div>
            <h3>Description</h3>
            <p>Category: {category?.name}</p>
            <p>About product: {selectedColor.description}</p>
            <p>Color: {selectedColor.name}</p>
          </div>
        </div>
        <div>
          <p>{formatPrice(selectedColor.price)}</p>
          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  )
}
