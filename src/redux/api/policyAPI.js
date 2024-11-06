import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { agentAPI } from './agentAPI';
export const policyAPI = createApi({
    reducerPath:"policyApi",
    tagTypes: ["policy","user","agent"],
    baseQuery:fetchBaseQuery({baseUrl:`${process.env.REACT_APP_SERVER}/api/v1/policy`}),
    endpoints:(builder)=>({
        //to get all policies
        allPolicies:builder.query({
            query:(id)=>`allPolicies/${id}`,
            providesTags:["policy"]
        }),
        //to policies by days
        policiesByRange:builder.query({
            query:({id,range})=>`policyRange?id=${id}&range=${range}`,
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
            invalidatesTags:["policy","user"],
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                   await queryFulfilled;
                   dispatch(agentAPI.util.invalidateTags(["agent"]));
                } catch (error) {
                   console.error('Failed to delete agent:', error);
                }
             }
             
        }),
        //add agent to policy
        addAgent:builder.mutation({
            query:(data)=>({
                url:"addAgent",
                method:"PUT",
                body:data
            }),
            invalidatesTags:["policy"],
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                   await queryFulfilled;
                   dispatch(agentAPI.util.invalidateTags(["agent"]));
                } catch (error) {
                   console.error('Failed to delete agent:', error);
                }
             }
        }),
    })
})
export const {useNewPolicyMutation,useAllPoliciesQuery,useDeletePolicyMutation,useUpdatePolicyMutation,useAddAgentMutation,usePoliciesByRangeQuery} = policyAPI