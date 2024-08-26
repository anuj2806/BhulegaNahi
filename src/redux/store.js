import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from './reducer/userReducer';
import { userAPI } from "./api/userAPI";
import { policyAPI } from "./api/policyAPI";
const store = configureStore({
    reducer:({
        [userReducer.name]:userReducer.reducer,
        [userAPI.reducerPath]:userAPI.reducer,
        [policyAPI.reducerPath]:policyAPI.reducer,
    }),
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(userAPI.middleware).concat(policyAPI.middleware)
})

export default store