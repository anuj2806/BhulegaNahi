import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const sharedPolicyAPI = createApi({
    reducerPath:"sharedPolicyApi",
    baseQuery:fetchBaseQuery({baseUrl:`${process.env.REACT_APP_SERVER}/api/v1/sharedPolicy`}),
    endpoints:(builder)=>({
        
        
        sharePolicy:builder.mutation({
            query:(data)=>({
                url:"share",
                method:"POST",
                body:data
            }),
            invalidatesTags:["user"]
        }),
    })
})
export const {useSharePolicyMutation} = sharedPolicyAPI