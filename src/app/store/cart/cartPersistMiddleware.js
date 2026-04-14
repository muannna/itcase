import { saveCart } from './cartStorage'

export const cartPersistMiddleware = (store) => (next) => (action) => {
  const result = next(action)
  const state = store.getState()
  if (action.type.startsWith('cart/')) {
    saveCart(state.cart.items)
  }

  return result
}
