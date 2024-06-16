import React,{useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import PolicyOptionButton from './PolicyOptionButton';
import ShowDetails from './ShowDetails';


const rows = [
  { id: 1, typeOfPolicy: 'Mediclaim Policy', nameOfCompany: 'HDFC', amountOfPremium: 7893.00,dateOfRenewal:'23/05/2024' },
  { id: 2, typeOfPolicy: 'Term Life Insurance', nameOfCompany: 'ICICI', amountOfPremium: 7893.00,dateOfRenewal:'23/05/2024' },
  { id: 3, typeOfPolicy: 'Whole Life Insurance', nameOfCompany: 'LIC', amountOfPremium: 7893.00,dateOfRenewal:'23/05/2024' },
  { id: 4, typeOfPolicy: 'Unit-Linked Insurance Plans', nameOfCompany: 'ACKO', amountOfPremium: 7893.00,dateOfRenewal:'23/05/2024' },
  { id: 5, typeOfPolicy: 'Child Plans', nameOfCompany: 'PNB', amountOfPremium: 7893.00,dateOfRenewal:'23/05/2024' },
];

export default function TablePolicy() {
  const [open,setOpen]=useState(false);
    const handleIsClose = ()=> (setOpen(false));
    const [policyData,setpolicyData] =useState({
        policyType:'',
        companyName:'',
        policyNumber:'',
        amount:'',
        startDate:'',
        renewalDate:'',
        agentName:'',
    });
    const handleRowClick = (params) => {
        setpolicyData({
            policyType:params.row.typeOfPolicy,
            companyName:params.row.nameOfCompany,
            policyNumber:'HDFC72398',
            amount:params.row.amountOfPremium,
            startDate:'12/05/2024',
            renewalDate:params.row.dateOfRenewal,
            agentName:'Sagar',
        })
    };
    const columns = [

      { field: 'typeOfPolicy',
        headerName: 'Type Of Policy',
        width: 240,
        headerClassName:"tableheader",
        // renderCell: (params) => (console.log(params))
        renderCell: (value) => {
              return <Link onClick={()=>setOpen(true)} style={{textDecoration:'none'}}>{value.formattedValue}</Link>;
        }
    },
      { field: 'nameOfCompany', headerName: 'Name Of Company', width: 240 },
      {
        field: 'amountOfPremium',
        headerName: 'Amount Of Premium',
        width: 240,
        renderCell: (value) => {
          return 'Rs. '+ value.formattedValue;
    }
      },
      {
        field: 'dateOfRenewal',
        headerName: 'Date Of Renewal',
        width: 240,
        
      },
      {
        sortable: false,
        width: 5,
        renderCell: (params) => {
            return  <PolicyOptionButton />;
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
        onRowClick={handleRowClick}
        disableRowSelectionOnClick
      />
      <ShowDetails open={open} handleClick={handleIsClose} data={policyData}/>
    </div>
  );
}
