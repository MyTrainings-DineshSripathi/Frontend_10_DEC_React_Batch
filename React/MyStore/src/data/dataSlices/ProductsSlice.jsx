import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./ProductsAsyncThunk";

/* 
    let state = {
        product : 'tony stark',
    }

    let action = {
        payload : "update with this value"
    }

    setProducts(updatedValue)
*/

const productsSlice = createSlice({
    name : "productsSlice",
    initialState : {
        products : [],
        isLoading : false,
        isError : false,
        errorMessage : '',
    },
    reducers : {
        // action -- used to update the values inside initialState
        // actionName : (state, action) => state.initialStateName = action.payload
        setProducts : (state, action) => {
            state.products = action.payload
        }
    },
    extraReducers : (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true
            state.isError = false
            state.errorMessage = ""
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            console.log(action)
            state.isLoading = false
            state.products = action.payload
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.errorMessage = "Not able to fetch products"
        })
    }
})

export const {setProducts} = productsSlice.actions

// this one will be placed inside the redux store.
export default productsSlice.reducer