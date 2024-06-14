import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const other = {
  autoHeight: true,
  showCellVerticalBorder: true,
  showColumnVerticalBorder: true,
  disableRowSelectionOnClick:true,
  
};

const rows = [
  { id: 1, year: '2023', name: 'Sagar',policyNo:'1231243',premium:876 },
  { id: 2, year: '2022', name: 'Atul',policyNo:'1231243',premium:876 },
  { id: 2, year: '2021', name: 'Atul',policyNo:'1231243',premium:876 },
  { id: 2, year: '2020', name: 'Atul',policyNo:'1231243',premium:876 },
  { id: 2, year: '2019', name: 'Atul',policyNo:'1231243',premium:876 },
  { id: 2, year: '2018', name: 'Atul',policyNo:'1231243',premium:876 },
];
const columns=[
    { field: 'year',headerName: 'Year', hideable: false,width: 307, },
    { field: 'name',headerName: 'Name', hideable: false,width: 240, },
    { field: 'policyNo',headerName: 'Policy Name', hideable: false,width: 240, },
    { field: 'premium',headerName: 'Premium (Rs.)', hideable: false,width: 240,
        valueGetter: (value, row) => {
            return row.premium.toFixed(2);
        } 
    },
  ]
  
const TotalYearlyPremium = ()=> {
  return (
    <div style={{ width: '100%' }}>
      <DataGrid
        columns={columns}
        rows={rows}
        {...other}
        sx={{"&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
            outline: "none !important"},
}}
        initialState={{
            pagination: {
            paginationModel: { page: 0, pageSize: 6 },
            },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
export default TotalYearlyPremium 