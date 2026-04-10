import { useProductParams } from '../../../../hooks/useProductParams'
import { ProductMedia } from './ProductMedia/ProductMedia'
import { ColorSelector } from './ColorSelector/ColorSelector'
import { SizeSelector } from './SizeSelector/SizeSelector'
import { ProductInfo } from './ProductInfo/ProductInfo'
import { PriceBlock } from './PriceBlock/PriceBlock'

export function ProductCard({ product, category, sizes }) {
  const { selectedColor, selectedSize, setColor, setSize } = useProductParams(product)
  const availableSizes = new Set(selectedColor.sizes)

  return (
    <div>
      <ProductMedia selectedColor={selectedColor} product={product} />
      <div>
        <div>
          <h1>
            {product.name} {product.brand}
          </h1>
          <ColorSelector product={product} setColor={setColor} selectedColor={selectedColor} />
          <SizeSelector
            sizes={sizes}
            availableSizes={availableSizes}
            setSize={setSize}
            selectedSize={selectedSize}
          />
          <ProductInfo category={category} selectedColor={selectedColor} />
        </div>
        <PriceBlock selectedColor={selectedColor} />
      </div>
    </div>
  )
}
