import { createSlice } from '@reduxjs/toolkit'

const loadCart = () => {
  try {
    return JSON.parse(localStorage.getItem('cart')) || []
  } catch (error) {
    return []
  }
}

const saveCart = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart))
}

const initialState = {
  items: loadCart(),
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { productId, colorId, sizeId } = action.payload
      const id = `${productId}=${colorId}-${sizeId}`
      const existing = state.items.find((el) => el.id === id)

      if (existing) existing.quantity += 1
      else {
        state.items.push({
          id,
          productId,
          colorId,
          sizeId,
          quantity: 1,
        })
      }
      saveCart(state.items)
    },

    removeItem: (state, action) => {
      state.items.filter((el) => el.id !== action.payload)
      saveCart(state.items)
    },

    clearCart: (state) => {
      state.items = []
      saveCart([])
    },
  },
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
