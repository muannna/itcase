import { createSlice } from '@reduxjs/toolkit'
import { loadCart } from './cartStorage'
import { PROMO_CODES } from '../../../shared/config/promoCodes'
import {
  createCartItemIdHelper,
  findItemHelper,
  removeItemHelper,
  increaseQuantityHelper,
  decreaseQuantityHelper,
} from './cartHelpers'

const initialState = {
  items: loadCart(),
  promo: {
    code: null,
    discount: 0,
    error: null,
  },
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

      if (item) decreaseQuantityHelper(item)
    },

    removeItem: (state, action) => {
      const id = action.payload
      removeItemHelper(state, id)
    },

    clearCart: (state) => {
      state.items = []
    },

    applyPromo: (state, action) => {
      const code = action.payload
      const validPromo = PROMO_CODES[code]
      if (!validPromo) {
        state.promo = {
          code: null,
          discount: 0,
          error: 'Invalid promo code',
        }
        return
      }

      state.promo = {
        code,
        discount: validPromo.value,
        minTotal: validPromo.minTotal,
        error: null,
      }
    },
  },
})

export const {
  addItem,
  incrementItemQuantity,
  decrementItemQuantity,
  removeItem,
  clearCart,
  applyPromo,
} = cartSlice.actions
export default cartSlice.reducer
