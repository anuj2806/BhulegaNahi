import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Divider, Typography } from '@mui/material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Link } from 'react-router-dom';
const columns = [

  { field: 'typeOfPolicy',
    headerName: 'Type Of Policy',
    width: 200,
    headerClassName:"tableheader",
    // renderCell: (params) => (console.log(params))
    renderCell: (value) => {
          return <Link to={'/policy'} style={{textDecoration:'none'}}>{value.formattedValue}</Link>;
    }
},
  { field: 'nameOfCompany', headerName: 'Name Of Company', width: 200 },
  {
    field: 'amountOfPremium',
    headerName: 'Amount Of Premium',
    width: 200,
  },
  {
    field: 'dateOfRenewal',
    headerName: 'Date Of Renewal',
    width: 200,
    
  },
  // {
  //   sortable: false,
  //   width: 5,
  //   renderCell: (params) => {
  //       return  <MoreVertOutlinedIcon style={{marginTop:'10px'}}/>;
  //     }
  // },
];

const rows = [
  { id: 1, typeOfPolicy: 'Snow', nameOfCompany: 'Jon', amountOfPremium: 35,dateOfRenewal:'23/05/2024' },
  { id: 2, typeOfPolicy: 'Lannister', nameOfCompany: 'Cersei', amountOfPremium: 42,dateOfRenewal:'23/05/2024' },
  { id: 3, typeOfPolicy: 'Lannister', nameOfCompany: 'Jaime', amountOfPremium: 45,dateOfRenewal:'23/05/2024' },
  { id: 4, typeOfPolicy: 'Stark', nameOfCompany: 'Arya', amountOfPremium: 16,dateOfRenewal:'23/05/2024' },
  { id: 5, typeOfPolicy: 'Targaryen', nameOfCompany: 'Daenerys', amountOfPremium: 345,dateOfRenewal:'23/05/2024' },
];

export default function TableDashboard() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        sx={{border:0}}
        disableRowSelectionOnClick
        // checkboxSelection
        // slots={{toolbar: DataGridTitle}}
      />
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