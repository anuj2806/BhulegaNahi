import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { userAPI } from './userAPI';
export const agentAPI = createApi({
    reducerPath:"agentApi",
    tagTypes: ["agent"],
    baseQuery:fetchBaseQuery({baseUrl:`${process.env.REACT_APP_SERVER}/api/v1/agent`}),
    endpoints:(builder)=>({
        
        //create new policy
        newAgent:builder.mutation({
            query:(data)=>({
                url:"new",
                method:"POST",
                body:data
            }),
            invalidatesTags:["agent","user"]
        }),
        // agents of user
        userAgent:builder.query({
            query:(id)=>(`userAgents?userId=${id}`),
            providesTags:["agent"]
        }),
        //policy of user agent
        policyOfUserAgent:builder.query({
            query:({userId,agentId})=>(`agentUserPolicies?userId=${userId}&agentId=${agentId}`),
            providesTags:["agent"]
        }),
        //get agent detail
        agentDetail:builder.query({
            query:(id)=>(id),
            invalidatesTags:["agent"]
        }),
        //delete user agent 
        deleteAgent:builder.mutation({
            query:({agentId,userId})=>({
                url:`deleteAgent?userId=${userId}&agentId=${agentId}`,
                method:"DELETE"
            }),
            invalidatesTags:["agent","policy"],
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                   await queryFulfilled;
                   dispatch(userAPI.util.invalidateTags(["user"]));
                } catch (error) {
                   console.error('Failed to delete agent:', error);
                }
             }
        }),
        //update agent
        updateAgent:builder.mutation({
            query:(data)=>({
                url:"updateAgent",
                method:"PUT",
                body:data
            })
        })
    })
})
export const {useNewAgentMutation,useUserAgentQuery,usePolicyOfUserAgentQuery,useDeleteAgentMutation,useAgentDetailQuery} = agentAPI;