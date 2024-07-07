import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
const columns = [

  { field: 'policyName',
    headerName: 'Policy Name',
    width: 350,
    headerClassName:"tableheader",
    renderCell: (value) => {
          return <Link to={`/downloadSOP/${value.formattedValue}`} style={{textDecoration:'none'}}>{value.formattedValue}</Link>;
    }
},
];

const rows = [
  { id: 1, policyName: 'Mediclaim Policy'},
  { id: 2, policyName: 'Term Life Insurance'},
  { id: 3, policyName: 'Whole Life Insurance'},
  { id: 4, policyName: 'Unit-Linked Insurance Plans'},
  { id: 5, policyName: 'Child Plans'},
];

export default function TableDownloadSOP() {
    
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
