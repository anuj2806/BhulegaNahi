import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const policyAPI = createApi({
    reducerPath:"policyApi",
    tagTypes: ["policy"],
    baseQuery:fetchBaseQuery({baseUrl:`${process.env.REACT_APP_SERVER}/api/v1/policy`}),
    endpoints:(builder)=>({
        //to get all policies
        allPolicies:builder.query({
            query:(id)=>`allPolicies/${id}`,
            providesTags:["policy"]
        }),
        //create new policy
        newPolicy:builder.mutation({
            query:(formData)=>({
                url:"new",
                method:"POST",
                body:formData
            }),
            invalidatesTags:["policy","user"]
        }),
        //update policy
        updatePolicy:builder.mutation({
            query:({id,formData})=>({
                url:id,
                method:'PUT',
                body:formData
            }),
            invalidatesTags:["policy"]
        }),
        //delete policy
        deletePolicy:builder.mutation({
            query:(id)=>({
                url:id,
                method:"DELETE"
            }),
            invalidatesTags:["policy","user"]
        }),
        //add agent to policy
        addAgent:builder.mutation({
            query:(data)=>({
                url:"addAgent",
                method:"PUT",
                body:data
            }),
            invalidatesTags:["policy","agent"]
        }),
    })
})
export const {useNewPolicyMutation,useAllPoliciesQuery,useDeletePolicyMutation,useUpdatePolicyMutation,useAddAgentMutation} = policyAPI