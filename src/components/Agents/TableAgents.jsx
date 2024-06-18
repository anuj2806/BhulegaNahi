import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import AgentOptionButton from './AgentOptionButton';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const rows = [
  { id: 1, name: 'Rudhir Bhalla', email: 'rudhir@gmail.com', contactNumber: '9678213924'},
  { id: 2, name: 'Chand Kumar', email: 'chand16@gmail.com', contactNumber: '9678213924'},
  { id: 3, name: 'Shubhra Tomar', email: 'shubhra12@gmail.com', contactNumber: '9678213924'},
  { id: 4, name: 'Abhishek Maheshwari', email: 'abhi007@gmail.com', contactNumber: '9678213924'},
  { id: 5, name: 'Sagar', email: 'sagar0016@gmail.com', contactNumber: '9678213924'},
];

export default function TableAgents() {
  const [isopen, setIsOpen] = React.useState(false);
  const handleOpenAlert=()=>setIsOpen(true);
  const handleClosealert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsOpen(false);
  };
  const columns = [

    { field: 'name',
      headerName: 'Agent Name',
      width: 350,
      headerClassName:"tableheader",
      renderCell: (value) => {
            return <Link to={`/agents/${value.formattedValue}`} style={{textDecoration:'none'}}>{value.formattedValue}</Link>;
      }
  },
    { field: 'email', headerName: 'Email', width: 350 },
    {
      field: 'contactNumber',
      headerName: 'Contact Number',
      width: 300,
    },
    {
      sortable: false,
      width: 5,
      renderCell: (params) => {
          return (<AgentOptionButton data={params.row} handleOpenAlert={handleOpenAlert}/>);
        }
    },
  ];
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
      <Snackbar open={isopen} autoHideDuration={2000}  onClose={handleClosealert}  anchorOrigin={{ vertical:'top', horizontal:'center' }}>
        <Alert
            onClose={handleClosealert}
            severity="success"
            variant="filled"
            sx={{ width: '100%'}}
        >
            Record Deleted Successfully.
        </Alert>
        </Snackbar>
    </div>
  );
}
