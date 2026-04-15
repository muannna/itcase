export const selectCartItems = (state) => state.cart.items

export const selectCartCount = (state) => state.cart.items.reduce((sum, i) => sum + i.quantity, 0)

export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, i) => sum + i.priceAtAdd * i.quantity, 0)
