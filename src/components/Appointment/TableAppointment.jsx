import React,{useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';



const rows = [
  { id: 1, appointment: 'Appointment-1', dateandtime: '06/07/2024 at 07:00 PM ', purpose: 'Buying Health Insurance'}
];
const columns = [

    { field: 'appointment',
      headerName: '',
      width: 300,
      sortable: false,
      disableColumnMenu:true
  },
    { field: 'dateandtime',
      headerName: 'Scheduled Date & Time',
      width: 300 
  },
    {
      field: 'purpose',
      headerName: 'Purpose of Appointment',
      width: 300
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 300
},
  ];
export default function TableAppointment() {
    
  return (
    <div style={{ height: 480, width: '100%'}}>
      <DataGrid
        rows={rows}
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
      />
    </div>
  );
}
