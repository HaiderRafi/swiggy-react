import { configureStore } from "@reduxjs/toolkit";
import dropDownSlice from "./dropDownSlice";

let store=configureStore({
    reducer:{
        dropDown:dropDownSlice

    }
});

export default store;