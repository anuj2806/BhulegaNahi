import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAllPoliciesQuery } from '../../redux/api/policyAPI';
import dayjs from 'dayjs';
import { Typography } from '@mui/material';
const columns = [
  { field: 'policyName',
    headerName: 'Type Of Policy',
    width: 240,
    headerClassName:"tableheader",
},
  { field: 'companyName', headerName: 'Name Of Company', width: 240 },
  {
    field: 'premiumAmount',
    headerName: 'Amount Of Premium',
    width: 200,
    renderCell: (value) => {
      return 'Rs. '+ value.formattedValue;
}
  },
  {
    field: 'endDate',
    headerName: 'Date Of Expiry',
    width: 200,
    renderCell: (value) => {
      return dayjs(value.formattedValue, "YYYY-MM-DD+h:mm").format('DD/MM/YYYY') ;
    }
  },
  
];



export default function TableDashboard() {
  const {data,error,isError} = useAllPoliciesQuery();
    const {policies} = data || [];
    if (isError) {
          const err = error;
          toast.error(err.data.message);
    }
    React.useEffect(()=>{

    },[policies])
  return (
    <div style={{ height: 400, width: '100%' }}>
      {data ? (<DataGrid
        rows={policies}
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
      />):<Typography variant="subtitle" color={'white'} fontFamily={'Lato'} fontWeight={'semibold'} fontSize={16} alignSelf={'center'} >
                No Policy Found
            </Typography>}
      
    </div>
  );
}
// const DataGridTitle=()=> {
//     return(
//         <Box style={{width: "100%", display: "flex", alignItems: "center"}}>
//             <Typography variant="subtitle" ml={2} >Recent Policy</Typography>
//         </Box>
//     )
// }