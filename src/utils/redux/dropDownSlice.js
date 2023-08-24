import { createSlice } from "@reduxjs/toolkit";

let dropDownSlice=createSlice({
    name:"dropDown",
    initialState:{
        text:""
    },
    reducers:{
        dropDownText:(state,action)=>{
            state.text=action.payload
        }
    }
})

export const{dropDownText}=dropDownSlice.actions
export default dropDownSlice.reducer