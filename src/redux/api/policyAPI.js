import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const policyAPI = createApi({
    reducerPath:"policyApi",
    tagTypes: ["product"],
    baseQuery:fetchBaseQuery({baseUrl:`${process.env.REACT_APP_SERVER}/api/v1/policy`}),
    endpoints:(builder)=>({
        //to get all policies
        allPolicies:builder.query({
            query:()=>"allPolicies",
            providesTags:["product"]
        }),
        //create new policy
        newPolicy:builder.mutation({
            query:(formData)=>({
                url:"new",
                method:"POST",
                body:formData
            }),
            invalidatesTags:["product","user"]
        }),
        //update policy
        updatePolicy:builder.mutation({
            query:({id,formData})=>({
                url:id,
                method:'PUT',
                body:formData
            }),
            invalidatesTags:["product"]
        }),
        //delete policy
        deletePolicy:builder.mutation({
            query:(id)=>({
                url:id,
                method:"DELETE"
            }),
            invalidatesTags:["product","user"]
        }),

    })
})
export const {useNewPolicyMutation,useAllPoliciesQuery,useDeletePolicyMutation,useUpdatePolicyMutation} = policyAPI