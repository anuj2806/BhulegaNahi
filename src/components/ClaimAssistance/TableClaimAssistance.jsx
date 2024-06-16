import React,{useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';



const rows = [
  { id: 1, fullName: 'Rahul Kumar', emailId: 'rahul@gmail.com ', gender: 'Male',contactNumber:9176986578,dateOfBirth:'23/05/1995',files:'12' }
];
const columns = [

    { field: 'fullName',
      headerName: 'Full Name',
      width: 200,
  },
    { field: 'emailId',
      headerName: 'Email Id',
      width: 200 
  },
    {
      field: 'gender',
      headerName: 'Gender',
      width: 150
  },
    {
      field: 'contactNumber',
      headerName: 'Contact Number',
      width: 200,
      
  },
    {
      field: 'dateOfBirth',
      headerName: 'Date Of Birth',
      width: 180,
      
  },
    {
      field: 'files',
      headerName: 'Files',
      width: 140,
      
  },
    
  ];
export default function TableClaimAssistance() {
    
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
        sx={{border:0, "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                          outline: "none !important"},
            }}
        disableRowSelectionOnClick
      />
    </div>
  );
}
