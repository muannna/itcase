import { saveCart, savePromo } from './cartStorage'

export const cartPersistMiddleware = (store) => (next) => (action) => {
  const result = next(action)
  const state = store.getState()
  if (action.type.startsWith('cart/')) {
    saveCart(state.cart.items)
    savePromo(state.cart.promo)
  }

  return result
}
