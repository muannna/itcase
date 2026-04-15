import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { formatPrice } from '../../../../utils/formatPrice'
import { Button } from '../../../../shared/ui/button/Button'
import { addItem } from '../../../../app/store/cart/cartSlice'

import styles from './PriceBlock.module.css'

export function PriceBlock({ selectedColor, selectedSize, availableSizes, product }) {
  const [touched, setTouched] = useState(false)
  const dispatch = useDispatch()
  const formatedPrice = formatPrice(selectedColor.price)

  useEffect(() => {
    setTouched(false)
  }, [selectedColor, selectedSize])

  const addToCart = () => {
    setTouched(true)
    if (!selectedSize) return

    dispatch(
      addItem({
        productId: product.id,
        colorId: selectedColor.id,
        sizeId: selectedSize,
        priceAtAdd: selectedColor.price,
        image: selectedColor.images[0],
        productNameAtAdd: product.name,
        productBrandAtAdd: product.brand,
        colorNameAtAdd: selectedColor.name,
        sizeNameAtAdd: `${selectedSize.name} (${selectedSize.number})`,
      }),
    )
  }
  const addFakeToCart = () => {
    dispatch(
      addItem({
        productId: 7,
        colorId: 1,
        sizeId: 1,
        priceAtAdd: '519.00',
        image: '/images/1/black_front.png',
        productNameAtAdd: 'Футболка',
        productBrandAtAdd: 'Lacoste',
        colorNameAtAdd: 'розовый',
        sizeNameAtAdd: 'XS (44)',
      }),
    )
    dispatch(
      addItem({
        productId: 1,
        colorId: 4,
        sizeId: 1,
        priceAtAdd: '519.00',
        image: '/images/1/gray_front.png',
        productNameAtAdd: 'Футболка',
        productBrandAtAdd: 'Basic Club',
        colorNameAtAdd: 'розовый',
        sizeNameAtAdd: 'XS (44)',
      }),
    )
    dispatch(
      addItem({
        productId: 1,
        colorId: 1,
        sizeId: 4,
        priceAtAdd: '123.00',
        image: '/images/1/black_front.png',
        productNameAtAdd: 'Футболка',
        productBrandAtAdd: 'Basic Club',
        colorNameAtAdd: 'черный',
        sizeNameAtAdd: 'L (50)',
      }),
    )
    dispatch(
      addItem({
        productId: 1,
        colorId: 1,
        sizeId: 1,
        priceAtAdd: '126.00',
        image: '/images/1/black_front.png',
        productNameAtAdd: 'Футболка',
        productBrandAtAdd: 'Basic Club',
        colorNameAtAdd: 'черный',
        sizeNameAtAdd: 'XS (44)',
      }),
    )
  }
  return (
    <div className={styles.priceBlock}>
      <p className={styles.price}>{formatedPrice}</p>
      <p className={`${styles.error} ${touched && !selectedSize ? styles.visible : ''}`}>
        Please select size
      </p>
      <Button isCart={true} disabled={!availableSizes.size} onClick={addToCart}>
        Add to cart
      </Button>
      <Button isCart={true} onClick={addFakeToCart}>
        Add fake products
      </Button>
    </div>
  )
}
