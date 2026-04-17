import { useMemo } from 'react'
import { useProductParams } from '../../../../hooks/useProductParams'
import { ProductMedia } from '../ProductMedia/ProductMedia'
import { CardTitle } from '../CardTitle/CardTitle'
import { ColorSelector } from '../ColorSelector/ColorSelector'
import { SizeSelector } from '../SizeSelector/SizeSelector'
import { ProductInfo } from '../ProductInfo/ProductInfo'
import { PriceBlock } from '../PriceBlock/PriceBlock'

import styles from './ProductCard.module.css'

export function ProductCard({ product, category, sizes }) {
  const { selectedColor, selectedSize, setColor, setSize } = useProductParams(product)
  const availableSizes = useMemo(() => new Set(selectedColor.sizes), [selectedColor])

  return (
    <div className={styles.productCard}>
      <ProductMedia images={selectedColor.images} name={product.name} />
      <div className={styles.card}>
        <div className={styles.cardMain}>
          <CardTitle product={product} />
          <ColorSelector product={product} setColor={setColor} selectedColor={selectedColor} />
          <SizeSelector
            sizes={sizes}
            availableSizes={availableSizes}
            setSize={setSize}
            selectedSize={selectedSize}
          />
          <ProductInfo category={category} selectedColor={selectedColor} />
        </div>
        <PriceBlock
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          availableSizes={availableSizes}
          product={product}
          sizes={sizes}
        />
      </div>
    </div>
  )
}
