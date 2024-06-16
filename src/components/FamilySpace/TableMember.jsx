import React,{useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import ShowDetails from '../Policy/ShowDetails';

const columns = [

    { field: 'typeOfPolicy',
      headerName: 'Type Of Policy',
      width: 260,
      align:'center',
      headerAlign: 'center',
      headerClassName:"tableheader",
      // renderCell: (params) => (console.log(params))
      renderCell: (value) => {
            return <Link style={{textDecoration:'none'}}>{value.formattedValue}</Link>;
      }
  },
    { field: 'nameOfCompany',
      headerName: 'Name Of Company',
      width: 260, 
      align:'center',
      headerAlign: 'center',
  },
    {
      field: 'amountOfPremium',
      headerName: 'Amount Of Premium',
      width: 260,
      align:'center',
      headerAlign: 'center',
      renderCell: (value) => {
          return 'Rs. '+ value.formattedValue;
    }
    },
    {
      field: 'dateOfRenewal',
      headerName: 'Date Of Renewal',
      width: 260,
      align:'center',
      headerAlign: 'center',
    },
  ];
  
  const rows = [
    { id: 1, typeOfPolicy: 'Medical Policy', nameOfCompany: 'HDFC', amountOfPremium: 3500, dateOfRenewal:'23/05/2024' },
  ];
export default function TableMember() {
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
        setOpen(true);
    };
    
  return (
    <div style={{ height: 480, width: '100%' }}>
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
