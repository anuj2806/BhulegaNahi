import React,{useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import UploadClaimAssistance from './UploadClaimAssistance';
import { Link } from 'react-router-dom';



const rows = [
  { id: 1, document: 'Document1', date: '12/09/2024'}
];
const columns = [

    { field: 'document',
      headerName: 'Document Name',
      width: 250,  
  },
    { field: 'date',
      headerName: 'Date',
      width: 100 
  },
  ];
export default function ClaimDocumentTable() {
    
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
        //pageSizeOptions={[5, 10]}
        sx={{border:0, "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus,&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                          outline: "none !important"},
            }}
        disableRowSelectionOnClick
      />
    </div>
  );
}
