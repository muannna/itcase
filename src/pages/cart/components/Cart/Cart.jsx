import { CartList } from '../CartList/CartList'
import { CartSummary } from '../CartSummary/CartSummary'
import { CartActions } from '../CartActions/CartActions'

export function Cart({
  availableItems,
  availableTitle,
  unavailableItems,
  unavailableTitle,
  total,
  totalQuantity,
  validTotalQuantity,
  removeAllFromCart,
}) {
  return (
    <div>
      <h1>Cart</h1>
      <CartList items={availableItems} title={availableTitle} />
      {unavailableItems.length > 0 && (
        <CartList items={unavailableItems} title={unavailableTitle} />
      )}
      <CartSummary
        total={total}
        totalQuantity={totalQuantity}
        validTotalQuantity={validTotalQuantity}
      />
      <CartActions removeAllFromCart={removeAllFromCart} />
    </div>
  )
}
