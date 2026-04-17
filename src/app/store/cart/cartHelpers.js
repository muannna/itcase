export const createCartItemIdHelper = ({ productId, colorId, sizeId }) =>
  [productId, colorId, sizeId].join('-')

export const findItemHelper = (state, id) => state.items.find((el) => el.id === id)

export const removeItemHelper = (state, id) => {
  const index = state.items.findIndex((el) => el.id === id)
  if (index !== -1) state.items.splice(index, 1)
}
