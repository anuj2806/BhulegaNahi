import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const appointmentAPI = createApi({
    reducerPath:"appointmentAPI",
    baseQuery:fetchBaseQuery({baseUrl:`${process.env.REACT_APP_SERVER}/api/v1/appointment`}),
    endpoints:(builder)=>({
        bookAppointment:builder.mutation({
            query:(data)=>({
                url:"bookAppointment",
                method:"POST",
                body:data
            }),
            invalidatesTags:["appointment"]
        }),
    })
})
export const {useBookAppointmentMutation} = appointmentAPI