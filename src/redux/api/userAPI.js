import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import axios from "axios"
export const userAPI = createApi({
    reducerPath:"userApi",
    tagTypes: ["user"],
    baseQuery:fetchBaseQuery({baseUrl:`${process.env.REACT_APP_SERVER}/api/v1/user`}),
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(user)=>({
                url:"new",
                method:"POST",
                body:user
            }),
        }),
        userDetail:builder.query({
            query:(id)=>`${id}`,
            providesTags:["user"]
        }),

        //for family -----------------------
        //FormData is only work when handle with file
        createFamilyMember:builder.mutation({
            query:(data)=>({
                url:"newFamilyMember",
                method:"POST",
                body:data
            }),
            invalidatesTags:["user"]
        })
    })
});

export const getUser = async (id) =>{
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_SERVER}/api/v1/user/${id}`);
        return data
    } catch (error) {
        throw(error)
    }
}
export const { useLoginMutation,useUserDetailQuery,useCreateFamilyMemberMutation } = userAPI;