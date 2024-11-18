import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Card, CardContent, Typography, useMediaQuery, Grid,Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useAllPoliciesQuery } from '../../redux/api/policyAPI';
import toast from 'react-hot-toast';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';

const columns = [
  { field: 'policyName', headerName: 'Type Of Policy', width: 240, headerClassName:"tableheader" },
  { field: 'companyName', headerName: 'Name Of Company', width: 240 },
  {
    field: 'premiumAmount',
    headerName: 'Amount Of Premium',
    width: 180,
    renderCell: (value) => {
      return 'Rs. ' + value.formattedValue;
    }
  },
  {
    field: 'endDate',
    headerName: 'Date Of Expiry',
    width: 120,
  },
];

export default function TableDashboard() {
  const { user } = useSelector((state) => state.userReducer);
  const { data, error, isError } = useAllPoliciesQuery(user[0].id);
  const { policies } = data || [];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isError) {
    const err = error;
    toast.error(err.data.message);
  }

  return (
    <div style={{ height: 369, width: '100%' }}>
      {isMobile ? (
        <Grid item xs={12} md={12} sx={{maxHeight: "340px",overflow: "scroll",scrollbarWidth: "none"}}>
          {policies && policies.length > 0 ? (
            policies.map((policy,index) => (
              <Card variant="outlined" sx={{margin:'10px'}} key={index}>
              <CardContent className='datatiles'  style={{padding:0}}>
                  <Grid container >
                      <Grid item xs={0.3} md={0.3} sx={{backgroundColor:'#FF9900',display:'flex'}}></Grid>
                      <Grid item xs={11.7} md={11.7}>
                          <Stack direction={'column'}  p={2}>
                              <Typography variant="h6" component="h6" fontFamily={'Inter'} ><span><b>{policy.policyName}</b></span></Typography>
                              <Typography variant="subtitle2" component="subtitle1" fontFamily={'Inter'} ><span>Company :</span><span><b>{policy.companyName}</b></span></Typography>
                              <Typography variant="subtitle2" component="subtitle1" fontFamily={'Inter'} ><span>Premium Amount :</span><span><b>Rs. {policy.premiumAmount}</b></span></Typography>
                              <Typography variant="subtitle2" component="subtitle1" fontFamily={'Inter'} ><span>Expiry Date :</span><span><b>{dayjs(policy.endDate).format('DD/MM/YYYY')}</b></span></Typography>
                          </Stack> 
                      </Grid>    
                  </Grid>
              </CardContent>
              </Card>
            ))
          ) : (
            <Typography variant="subtitle1" color="textSecondary" align="center">
              No Policy Found
            </Typography>
          )}
        </Grid>
      ) : (
        <DataGrid
          rows={policies || []}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          sx={{
            border: 0,
            "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus,&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
              outline: "none !important"
            },
          }}
          disableRowSelectionOnClick
          getRowId={(row) => row.id}
        />
      )}
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