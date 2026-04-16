import { createSlice } from '@reduxjs/toolkit'
import { loadCart, loadPromo, clearPromoStorage } from './cartStorage'
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
  promo: loadPromo() || {
    draft: '',
    code: null,
    discount: 0,
    minTotal: 0,
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
        state.promo.error = 'Invalid promo code'
        clearPromoStorage()
        return
      }

      state.promo.code = code
      state.promo.discount = validPromo.value
      state.promo.minTotal = validPromo.minTotal
      state.promo.error = null
    },

    setPromoDraft: (state, action) => {
      state.promo.draft = action.payload
      state.promo.error = null
      state.promo.code = null
      state.promo.discount = 0
      state.promo.minTotal = 0
    },

    clearPromo: (state) => {
      state.promo = {
        draft: '',
        code: null,
        discount: 0,
        minTotal: 0,
        error: null,
      }
      clearPromoStorage()
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
  setPromoDraft,
  clearPromo,
} = cartSlice.actions
export default cartSlice.reducer
