import { formatPrice } from '../../../../../utils/formatPrice'
import { Button } from '../../../../../shared/ui/button/Button'

import styles from './PriceBlock.module.css'

export function PriceBlock({ selectedColor }) {
  return (
    <div className={styles.priceBlock}>
      <p className={styles.price}>{formatPrice(selectedColor.price)}</p>
      <Button isCart={true}>Add to cart</Button>
    </div>
  )
}
