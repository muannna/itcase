import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getCheapestColor } from '../../../../utils/getSortedAvailableColors'
import { useCategory } from '../../../../queries/categories/useCategory'
import { useSizes } from '../../../../queries/sizes/useSizes'
import { formatPrice } from '../../../../utils/formatPrice'
import { Button } from '../../../../shared/ui/button/Button'

export function ProductCard({ product }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const { data: category } = useCategory(product.categoryId)
  const { data: sizes = [] } = useSizes()
  const colorId = Number(searchParams.get('color'))
  const sizeId = Number(searchParams.get('size'))
  const cheapestColor = getCheapestColor(product.colors)

  const selectedColor = product.colors.find((color) => color.id === colorId) ?? cheapestColor
  const selectedSize = sizeId
  const availableSizes = new Set(selectedColor.sizes)

  useEffect(() => {
    const colorFromUrl = searchParams.get('color')
    const isValidColor = product.colors.some((color) => color.id === Number(colorFromUrl))

    if (!colorFromUrl || !isValidColor) {
      const newParams = new URLSearchParams(searchParams)
      newParams.set('color', cheapestColor.id)
      setSearchParams(newParams, { replace: true })
    }
  }, [product.colors, cheapestColor.id, searchParams, setSearchParams])

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
                onClick={() => {
                  const newParams = new URLSearchParams(searchParams)
                  newParams.set('color', color.id)
                  newParams.delete('size')
                  setSearchParams(newParams)
                }}
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
                    const newParams = new URLSearchParams(searchParams)
                    newParams.set('size', size.id)
                    setSearchParams(newParams)
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
