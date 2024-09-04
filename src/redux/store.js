import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from './reducer/userReducer';
import { userAPI } from "./api/userAPI";
import { policyAPI } from "./api/policyAPI";
import { sharedPolicyAPI } from "./api/sharedPolicyAPI";
const store = configureStore({
    reducer:({
        [userReducer.name]:userReducer.reducer,
        [userAPI.reducerPath]:userAPI.reducer,
        [policyAPI.reducerPath]:policyAPI.reducer,
        [sharedPolicyAPI.reducerPath]:sharedPolicyAPI.reducer,
    }),
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(userAPI.middleware).concat(policyAPI.middleware).concat(sharedPolicyAPI.middleware)
})

export default store