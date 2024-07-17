import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/Products/productSlice'

export default configureStore({
  reducer: {
    productsR: productReducer,
  }
})