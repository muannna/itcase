import { useCartViewModel } from '../../hooks/cart/useCartViewModel'
import { Loader } from '../../shared/ui/loader/Loader'
import { Error } from '../../shared/ui/error/Error'
import { EmptyState } from '../../shared/ui/emptyState/EmptyState'
import { Cart } from './components/Cart/Cart'

import styles from './CartPage.module.css'

export function CartPage() {
  const { status, cart, totals, actions } = useCartViewModel()

  let content = null

  if (status.isLoading) {
    content = <Loader text="Loading cart..." />
  } else if (status.error) {
    content = <Error error={status.error} message="Error loading products" />
  } else if (status.isEmpty) {
    content = <EmptyState text="Your shopping cart is currently empty." />
  } else {
    content = <Cart cart={cart} totals={totals} actions={actions} />
  }

  return <div className={styles.page}>{content}</div>
}
