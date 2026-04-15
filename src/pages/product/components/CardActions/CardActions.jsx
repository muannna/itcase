import { AddToCart } from './AddToCart'
import { AddFakeProducts } from './AddFakeProducts'

import styles from './CardActions.module.css'

export function CardActions({ onAdd, onAddFake, disabled }) {
  return (
    <div className={styles.buttonsContainer}>
      <AddToCart disabled={disabled} onAdd={onAdd} />
      <AddFakeProducts onAddFake={onAddFake} />
    </div>
  )
}
