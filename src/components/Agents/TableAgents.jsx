import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import AgentOptionButton from './AgentOptionButton';
import { useSelector } from 'react-redux';
import { useUserAgentQuery } from '../../redux/api/agentAPI';
import toast from 'react-hot-toast';

export default function TableAgents() {
  const {user} = useSelector((state) => state.userReducer);
  const [isopen, setIsOpen] = React.useState(false);
  const handleOpenAlert=()=>setIsOpen(true);

  const {data,error,isError} = useUserAgentQuery(user._id);

  const {agents} = data || [];

  if (isError) {
          const err = error;
          toast.error(err.data.message);
  }
  const columns = [

    { field: 'name',
      headerName: 'Agent Name',
      width: 350,
      headerClassName:"tableheader",
      renderCell: (value) => {
            return <Link to={`/agents/${value.row._id}/${value.row.name}`} style={{textDecoration:'none'}}>{value.formattedValue}</Link>;
      }
  },
    { field: 'email', headerName: 'Email', width: 350 },
    {
      field: 'phone',
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
      {data && <DataGrid
        rows={agents}
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
        getRowId={(row) => row._id}
      />}
    </div>
  );
}
