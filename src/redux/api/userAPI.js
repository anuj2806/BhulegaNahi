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
        }),
        getAllFamilyMembers:builder.query({
            query:(id)=>`userFamilyMember?id=${id}`,
            providesTags:["user"]
        }),
        deleteFamilyMember:builder.mutation({
            query:(data)=>({
                url:"removeFamilyMember",
                method:"DELETE",
                body:data
            }),
            invalidatesTags:["user"]
        }),
        familyMemberPolicies:builder.query({
            query:(data)=>{
                const queryString = new URLSearchParams(data).toString();
                return {
                    url:`familyMemberPolicy?${queryString}`
                }
            },
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
export const checkMobileNumber = async (number) =>{
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_SERVER}/api/v1/user/mobileCheck/${number}`);
        return data
    } catch (error) {
        throw(error)
    }
}
export const sendOTPText = async (mobileNumber,otpValue) => {
    try {
      const urlEncodedData = new URLSearchParams({
        "module":"TRANS_SMS",
        "apikey":`${process.env.REACT_APP_API_KEY}`,
        "to":`91${mobileNumber}`,
        "from":"ADWITT",
        "msg":`Your One-Time Password (OTP) for login / Verification at Claims Mitra is ${otpValue}. Please do not share this OTP with anyone.`
    
    }).toString();
      const response = await axios.post("https://2factor.in/API/R1/", urlEncodedData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      return response.data;
    } catch (error) {
      throw error; // Rethrow to handle it later
    }
  };

export const { useLoginMutation,useUserDetailQuery,useCreateFamilyMemberMutation,useGetAllFamilyMembersQuery,useDeleteFamilyMemberMutation,useFamilyMemberPoliciesQuery } = userAPI;