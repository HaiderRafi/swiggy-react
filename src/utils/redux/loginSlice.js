import { createSlice } from "@reduxjs/toolkit";

let loginSlice=createSlice({
    name:"login",
    initialState:{
        islogin:{}
    },
    reducers:{
        sendToLogin:(state,action)=>{
            state.islogin=action.payload

        },
        logOut:(state)=>{
            state.islogin={}
        }
    }

})

export const{sendToLogin,logOut}=loginSlice.actions
export default loginSlice.reducer