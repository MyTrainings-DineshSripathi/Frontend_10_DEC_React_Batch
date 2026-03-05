import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './dataSlices/ProductsSlice'

const reduxStore = configureStore({
    reducer : {
        // here we combine the developers slices reducers
        // sliceName : reducerName
        products : productsReducer //we will have state of productsSlice inside it.
    }
})

export default reduxStore