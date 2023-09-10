import { configureStore } from '@reduxjs/toolkit'

import getUserData from '../utils/getUserData';
import saveUserData from '../utils/saveUserData';

import product from './slices/productSlice'
import search from './slices/searchSlice'
import user from './slices/usersSlice'
import favourites from './slices/favouritesSlice'
import historyReducer from './slices/historySlice'


const preloadedState: {} =
  getUserData();

const store = configureStore({
  reducer: {
    product,
    search,
    user,
    favourites,
    history:historyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveUserData),
  preloadedState: preloadedState,
  
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store 

