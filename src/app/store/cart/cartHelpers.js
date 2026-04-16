export const createCartItemIdHelper = ({ productId, colorId, sizeId }) =>
  [productId, colorId, sizeId].join('-')

export const findItemHelper = (state, id) => state.items.find((el) => el.id === id)

export const removeItemHelper = (state, id) => {
  const index = state.items.findIndex((el) => el.id === id)
  if (index !== -1) state.items.splice(index, 1)
}

export const increaseQuantityHelper = (item) => {
  item.quantity += 1
}

export const decreaseQuantityHelper = (item) => {
  if (item.quantity <= 1) return
  item.quantity -= 1
}

export const findItemInCartHelper = (cart, { productId, colorId, sizeId }) =>
  cart.find((i) => i.productId === productId && i.colorId === colorId && i.sizeId === sizeId)
