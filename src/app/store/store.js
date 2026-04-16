import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart/cartSlice'
import { cartPersistMiddleware } from './cart/cartPersistMiddleware'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartPersistMiddleware),
})
