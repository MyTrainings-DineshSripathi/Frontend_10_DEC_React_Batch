import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk('fetchProducts', async() => {
    const response = await axios.get('https://fakestoreapi.com/products')
    console.log(response)
    return response.data
})