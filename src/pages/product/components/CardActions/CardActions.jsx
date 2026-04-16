import { AddToCart } from './AddToCart'
import { AddFakeProducts } from './AddFakeProducts'

import styles from './CardActions.module.css'

export function CardActions({ onAdd, onAddFake, disabled, isInCart, quantity }) {
  const isDev = process.env.NODE_ENV === 'development'
  return (
    <div className={styles.buttonsContainer}>
      <AddToCart disabled={disabled} onAdd={onAdd} isInCart={isInCart} quantity={quantity} />
      {isDev && <AddFakeProducts onAddFake={onAddFake} />}
    </div>
  )
}
