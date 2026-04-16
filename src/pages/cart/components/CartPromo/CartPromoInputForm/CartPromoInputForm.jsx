import { useDispatch, useSelector } from 'react-redux'
import { applyPromo, setPromoDraft } from '../../../../../app/store/cart/cartSlice'
import { selectCartPromo } from '../../../../../app/store/cart/selectors'
import { Input } from '../../../../../shared/ui/input/Input'
import { Button } from '../../../../../shared/ui/button/Button'

import styles from './CartPromoInputForm.module.css'

export function CartPromoInputForm() {
  const dispatch = useDispatch()
  const promo = useSelector(selectCartPromo)

  const handleApply = () => {
    const normalized = promo.draft.trim().toUpperCase()
    if (!normalized) return
    dispatch(applyPromo(normalized))
  }

  return (
    <form
      className={styles.controls}
      onSubmit={(e) => {
        e.preventDefault()
        handleApply()
      }}
    >
      <Input
        id="promo"
        name="promo"
        placeholder="Enter promo code"
        value={promo.draft ?? ''}
        onChange={(value) => dispatch(setPromoDraft(value))}
      />
      <Button type="submit" isCart>
        Apply
      </Button>
    </form>
  )
}
