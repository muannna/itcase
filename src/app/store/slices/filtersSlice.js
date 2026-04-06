import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    search: '',
    sort: 'default',
    inStock: false,
  },
  reducers: {
    setSearch(state, action) {
      state.search = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setInStock(state, action) {
      state.inStock = action.payload
    },
  },
})

export const { setSearch, setSort, setInStock } = filtersSlice.actions

export default filtersSlice.reducer
