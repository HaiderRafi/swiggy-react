import { createSlice } from "@reduxjs/toolkit";

let cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
            localStorage.setItem("cartItems", JSON.stringify(state.items));   //for local storage
        },
        removeItem:(state,action)=>{
            state.items.pop();
            localStorage.setItem("cartItems", JSON.stringify(state.items));   //for local storage
        },
        clearCart:(state)=>{
            state.items=[]
            localStorage.removeItem("cartItems");                              //for local storage
        }
    }
})

export const {addItem, removeItem,clearCart}= cartSlice.actions;
export default cartSlice.reducer;