import { createSlice } from '@reduxjs/toolkit'
import { loadCart } from './cartStorage'
import {
  createCartItemIdHelper,
  findItemHelper,
  removeItemHelper,
  increaseQuantityHelper,
  decreaseQuantityHelper,
} from './cartHelpers'

const initialState = {
  items: loadCart(),
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const payload = action.payload
      const id = createCartItemIdHelper(payload)
      const existing = findItemHelper(state, id)

      if (existing) {
        increaseQuantityHelper(existing)
        return
      }

      state.items.push({
        id,
        ...payload,
        quantity: 1,
      })
    },

    incrementItemQuantity: (state, action) => {
      const id = action.payload
      const item = findItemHelper(state, id)

      if (item) increaseQuantityHelper(item)
    },

    decrementItemQuantity: (state, action) => {
      const id = action.payload
      const item = findItemHelper(state, id)

      if (item) decreaseQuantityHelper(state, item)
    },

    removeItem: (state, action) => {
      const id = action.payload
      removeItemHelper(state, id)
    },

    clearCart: (state) => {
      state.items = []
    },
  },
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
