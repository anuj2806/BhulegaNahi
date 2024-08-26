import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user:null,
    loading:true
}
export const userReducer = createSlice({
    name:"userReducer",
    initialState,
    reducers:{
         // Action to handle when a user exists
        userExist:(state,action)=>{
            state.loading = false;
            state.user = action.payload;
        },
         // Action to handle when a user doesn't exists
        userNotExist:(state,action)=>{
            state.loading = false;
            state.user = action.payload;
        }
    }

})
export const {userExist,userNotExist} = userReducer.actions
