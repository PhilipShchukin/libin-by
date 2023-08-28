import { configureStore } from '@reduxjs/toolkit'

import product from './slices/productSlice'
import search from './slices/searchSlice'
import users from './slices/usersSlice'

const store = configureStore({
  reducer: {
    product,
    search,
    users,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store 