import { useSelector, useDispatch } from 'react-redux'
import { selectCartPromo, selectCartPromoError } from '../../../../app/store/cart/selectors'
import { clearPromo } from '../../../../app/store/cart/cartSlice'
import { CartPromoInputForm } from './CartPromoInputForm/CartPromoInputForm'
import { Button } from '../../../../shared/ui/button/Button'
import { formatPrice } from '../../../../utils/formatPrice'

import styles from './CartPromo.module.css'

export function CartPromo({ promoEligible }) {
  const dispatch = useDispatch()
  const error = useSelector(selectCartPromoError)
  const promo = useSelector(selectCartPromo)
  const hasPromo = Boolean(promo.code)

  if (!hasPromo) {
    return (
      <div className={styles.container}>
        <CartPromoInputForm />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    )
  }

  if (!promoEligible) {
    return (
      <div className={styles.container}>
        <div className={styles.active}>
          <p>Promo code: {promo.code}</p>
          <p className={styles.warning}>Add items worth {formatPrice(promo.minTotal)}</p>
        </div>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.active}>
        <p>Promo applied: {promo.code}</p>
        <Button onClick={() => dispatch(clearPromo())}>Remove</Button>
      </div>
    </div>
  )
}
