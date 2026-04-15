import { useCartViewModel } from '../../hooks/cart/useCartViewModel'
import { Loader } from '../../shared/ui/loader/Loader'
import { Error } from '../../shared/ui/error/Error'
import { EmptyState } from '../../shared/ui/emptyState/EmptyState'
import { Cart } from './components/Cart/Cart'

import styles from './CartPage.module.css'

export function CartPage() {
  const {
    isLoading,
    error,
    availableItems,
    availableTitle,
    unavailableItems,
    unavailableTitle,
    total,
    totalQuantity,
    validTotalQuantity,
    removeAllFromCart,
    isEmpty,
  } = useCartViewModel()

  let content = null

  if (isLoading) {
    content = <Loader text="Loading cart..." />
  } else if (error) {
    content = <Error error={error} message="Error loading products" />
  } else if (isEmpty) {
    content = <EmptyState text="Your shopping cart is currently empty." />
  } else {
    content = (
      <Cart
        availableItems={availableItems}
        availableTitle={availableTitle}
        unavailableItems={unavailableItems}
        unavailableTitle={unavailableTitle}
        total={total}
        totalQuantity={totalQuantity}
        validTotalQuantity={validTotalQuantity}
        removeAllFromCart={removeAllFromCart}
      />
    )
  }

  return <div className={styles.page}>{content}</div>
}
