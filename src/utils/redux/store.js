import { configureStore } from "@reduxjs/toolkit";
import dropDownSlice from "./dropDownSlice";
import cartSlice from "./cartSlice";

let store=configureStore({
    reducer:{
        dropDown:dropDownSlice,
        cart:cartSlice

    }
});

export default store;