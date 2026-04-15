import { CartList } from '../CartList/CartList'
import { CartSummary } from '../CartSummary/CartSummary'
import { CartActions } from '../CartActions/CartActions'

export function Cart({
  enrichedCart,
  total,
  totalQuantity,
  validTotalQuantity,
  removeAllFromCart,
}) {
  return (
    <div>
      <h1>Cart</h1>
      <CartList items={enrichedCart} />
      <CartSummary
        total={total}
        totalQuantity={totalQuantity}
        validTotalQuantity={validTotalQuantity}
      />
      <CartActions removeAllFromCart={removeAllFromCart} />
    </div>
  )
}
