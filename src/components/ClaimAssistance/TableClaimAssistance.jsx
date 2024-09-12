import React,{useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import UploadClaimAssistance from './UploadClaimAssistance';
import { Link } from 'react-router-dom';



const rows = [
  { id: 1, fullName: 'Rahul Kumar', typeOfPolicy: 'Mediclaim Policy', nameOfCompany: 'HDFC',files:'12' }
];
const columns = [

    { field: 'fullName',
      headerName: 'Full Name',
      width: 240,
      renderCell: (params) => {
        return <Link to={`/claimAssistance/${params.row.id}/${params.formattedValue}`} style={{textDecoration:'none'}}>{params.formattedValue}</Link>;
  }
      
  },
    { field: 'typeOfPolicy',
      headerName: 'Type Of Policy',
      width: 240 
  },
    {
      field: 'nameOfCompany',
      headerName: 'Name Of Company',
      width: 240
  },
    {
      field: 'files',
      headerName: 'Files',
      width: 200,
      
  },
  { 
    field: 'upload',
    sortable: false,
    disableColumnMenu:true,
    headerName:'',
    width: 130,
    renderCell: (value) => {
      return <UploadClaimAssistance id={value.row.id}/>;
    }
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
        sx={{border:0, "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus,&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                          outline: "none !important"},
            }}
        disableRowSelectionOnClick
      />
    </div>
  );
}
