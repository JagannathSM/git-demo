import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "../Components/MainSlice"

export const store =  configureStore({
    reducer:{
        myCartData : DataReducer
    }
})