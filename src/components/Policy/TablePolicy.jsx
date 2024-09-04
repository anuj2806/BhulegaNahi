import React,{useEffect, useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import PolicyOptionButton from './PolicyOptionButton';
import ShowDetails from './ShowDetails';
import PolicyView from './PolicyView';
import { useAllPoliciesQuery } from '../../redux/api/policyAPI';
import toast from 'react-hot-toast';
import { Typography } from '@mui/material';
import { transformData } from '../../utils/features';
import dayjs from 'dayjs';

export default function TablePolicy({totalPolicies}) {
  const [open,setOpen]=useState(false);
    const handleIsClose = ()=> (setOpen(false));
    const [policyData,setpolicyData] =useState({
        id:'',
        policyType:'',
        companyName:'',
        policyNumber:'',
        amount:'',
        startDate:'',
        endDate:'',
        natureOfFrequency:'',
        agentName:'',
    });
    const handleRowClick = (params) => {
        setpolicyData({
            id:params.row._id,
            policyType:params.row.policyName,
            companyName:params.row.companyName,
            policyNumber:params.row.policyNumber,
            amount:params.row.premiumAmount,
            startDate:dayjs(params.row.startDate, "YYYY-MM-DD+h:mm").format('MM/DD/YYYY'),
            endDate:dayjs(params.row.endDate, "YYYY-MM-DD+h:mm").format('MM/DD/YYYY'),
            natureOfFrequency:params.row.natureOfFrequency,
            agentName:params.row.agent,
        })
    };
    const {data,error,isError} = useAllPoliciesQuery();
    const {policies} = data || [];
    if (isError) {
          const err = error;
          toast.error(err.data.message);
    }
    useEffect(()=>{
      totalPolicies(data?.policies.length);
    },[policies])
    
    const columns = [
      { field: 'policyName',
        headerName: 'Type Of Policy',
        width: 240,
        headerClassName:"tableheader",
        // renderCell: (params) => (console.log(params))
        renderCell: (value) => {
              return <Link onClick={()=>setOpen(true)} style={{textDecoration:'none'}}>{value.formattedValue}</Link>;
        }
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
      { 
        field: 'photo',
        sortable: false,
        disableColumnMenu:true,
        headerName:'View',
        width: 130,
        renderCell: (value) => {
          return <PolicyView filepath={value.row.photo}/>;
        }
      },
      {
        sortable: false,
        width: 5,
        renderCell: (params) => {
            return  <PolicyOptionButton policyData={policyData}/>;
          }
      },
    ];
  return (
    <div style={{ height: 480, width: '100%'}}>
      {data ? (<DataGrid
        rows={policies}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[8, 10]}
        sx={{border:0, "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus,&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                          outline: "none !important"},
            }}
        onRowClick={handleRowClick}
        disableRowSelectionOnClick
        getRowId={(row) => row._id}
      />):<Typography variant="subtitle" color={'white'} fontFamily={'Lato'} fontWeight={'semibold'} fontSize={16} alignSelf={'center'} >
                No Policy Found
            </Typography>}
      <ShowDetails open={open} handleClick={handleIsClose} data={policyData}/>
    </div>
  );
}
