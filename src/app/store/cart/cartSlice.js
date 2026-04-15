import { createSlice } from '@reduxjs/toolkit'
import { loadCart } from './cartStorage'

const initialState = {
  items: loadCart(),
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const {
        productId,
        colorId,
        sizeId,
        priceAtAdd,
        image,
        productNameAtAdd,
        productBrandAtAdd,
        colorNameAtAdd,
        sizeNameAtAdd,
      } = action.payload
      const id = `${productId}-${colorId}-${sizeId}`
      const existing = state.items.find((el) => el.id === id)

      if (existing) existing.quantity += 1
      else {
        state.items.push({
          id,
          productId,
          colorId,
          sizeId,
          priceAtAdd,
          image,
          productNameAtAdd,
          productBrandAtAdd,
          colorNameAtAdd,
          sizeNameAtAdd,
          quantity: 1,
        })
      }
    },

    removeItem: (state, action) => {
      state.items.filter((el) => el.id !== action.payload)
    },

    clearCart: (state) => {
      state.items = []
    },
  },
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
