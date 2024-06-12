import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
const columns = [

  { field: 'name',
    headerName: 'Name',
    width: 350,
    headerClassName:"tableheader",
    renderCell: (value) => {
          return <Link to={`/familySpace/${value.formattedValue}`} style={{textDecoration:'none'}}>{value.formattedValue}</Link>;
    }
},
  { field: 'email', headerName: 'Email', width: 350 },
  {
    field: 'permissions',
    headerName: 'Permissions',
    width: 300,
  },
  {
    sortable: false,
    width: 5,
    renderCell: (params) => {
        return (<IconButton>
            <MoreVertIcon />
          </IconButton>);
      }
  },
];

const rows = [
  { id: 1, name: 'Rudhir Bhalla', email: 'rudhir@gmail.com', permissions: 'Owner'},
  { id: 2, name: 'Chand Kumar', email: 'chand16@gmail.com', permissions: 'View'},
  { id: 3, name: 'Shubhra Tomar', email: 'shubhra12@gmail.com', permissions: 'Edit'},
  { id: 4, name: 'Abhishek Maheshwari', email: 'abhi007@gmail.com', permissions: 'View'},
  { id: 5, name: 'Sagar', email: 'sagar0016@gmail.com', permissions: 'Edit'},
];

export default function TableFamilySpace() {
    
  return (
    <div style={{ height: 400, width: '100%'}}>
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
