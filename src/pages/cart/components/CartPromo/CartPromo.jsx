import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { applyPromo } from '../../../../app/store/cart/cartSlice'
import { selectCartPromo, selectCartPromoError } from '../../../../app/store/cart/selectors'

import styles from './CartPromo.module.css'

export function CartPromo({ promoEligible }) {
  const dispatch = useDispatch()
  const [code, setCode] = useState('')
  const error = useSelector(selectCartPromoError)
  const promo = useSelector(selectCartPromo)

  const handleApply = () => {
    dispatch(applyPromo(code.trim()))
  }

  return (
    <div>
      <input
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter promo code"
      />
      <button onClick={handleApply}>Apply</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>
        {promo.code && !promoEligible && (
          <span className={styles.warning}>Add items worth 1000₽ to apply promo</span>
        )}
      </p>
    </div>
  )
}
