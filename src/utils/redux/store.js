import { configureStore } from "@reduxjs/toolkit";
import dropDownSlice from "./dropDownSlice";
import cartSlice from "./cartSlice";
import loginSlice from "./loginSlice";

let store=configureStore({
    reducer:{
        dropDown:dropDownSlice,
        cart:cartSlice,
        login:loginSlice

    }
});

export default store;