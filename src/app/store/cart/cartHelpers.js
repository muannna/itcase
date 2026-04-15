export const createCartItemIdHelper = ({ productId, colorId, sizeId }) =>
  [productId, colorId, sizeId].join('-')

export const findItemHelper = (state, id) => state.items.find((el) => el.id === id)

export const removeItemHelper = (state, id) => {
  state.items = state.items.filter((el) => el.id !== id)
}

export const increaseQuantityHelper = (item) => {
  item.quantity += 1
}

export const decreaseQuantityHelper = (state, item) => {
  if (item.quantity > 1) {
    item.quantity -= 1
  } else {
    removeItemHelper(state, item.id)
  }
}
