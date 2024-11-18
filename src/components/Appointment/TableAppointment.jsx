import React,{useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { useAllUserAppointmentQuery } from '../../redux/api/appointment';
import toast from 'react-hot-toast';
import dayjs from 'dayjs';

const columns = [

    { field:'Sr_No',
      headerName: 'Appointment',
      width: 230,
      sortable: false,
      disableColumnMenu:true,
      renderCell: (value) => {
        return `Appointment - ${value.formattedValue}`
      } 
  },
    { field: 'appointment_date',
      headerName: 'Scheduled Date & Time',
      width: 230,
      renderCell: (value) => {
        return `${dayjs(value.formattedValue, "YYYY-MM-DD+h:mm").format('DD/MM/YYYY')} at ${value.row.appointment_time}`
      } 
  },
    {
      field: 'purpose',
      headerName: 'Purpose of Appointment',
      width: 400
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 100
},
  ];
export default function TableAppointment() {
  const {user} = useSelector((state) => state.userReducer );
  const {data,error,isError} = useAllUserAppointmentQuery(user[0].phone);
  if(error) toast.error(error); 
  const {appointments} = data || [];
  return (
    <div style={{ height: 480, width: '100%'}}>
      {data && (<DataGrid
        rows={appointments}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        sx={{border:0, "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus,&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                          outline: "none !important"},
            }}
        disableRowSelectionOnClick
        getRowId={(row) => row.id}
      />)}
    </div>
  );
}
