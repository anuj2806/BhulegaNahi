import React,{useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useParams } from 'react-router-dom';
import ShowDetails from '../Policy/ShowDetails';
import { useSelector } from 'react-redux';
import { usePolicyOfUserAgentQuery } from '../../redux/api/agentAPI';
import PolicyView from '../Policy/PolicyView';
import dayjs from 'dayjs';
import toast from 'react-hot-toast';


  

export default function TableAgentPolicy() {
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
    }
  ];
    const {user} = useSelector((state) => state.userReducer);
    const {agentId} = useParams();
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
      agentName:null,
  });
  const handleRowClick = (params) => {
      setpolicyData({
          id:params.row.id,
          policyType:params.row.policyName,
          companyName:params.row.companyName,
          policyNumber:params.row.policyNumber,
          amount:params.row.premiumAmount,
          startDate:dayjs(params.row.startDate, "YYYY-MM-DD+h:mm").format('MM/DD/YYYY'),
          endDate:dayjs(params.row.endDate, "YYYY-MM-DD+h:mm").format('MM/DD/YYYY'),
          natureOfFrequency:params.row.natureOfFrequency,
          agentName:null,
      })
  };
    
    const {data,error,isError} = usePolicyOfUserAgentQuery({
      userId:user[0].id,
      agentId
    });
    if (isError) {
      const err = error;
      toast.error(err.data.message);
    }
    const {agentPolicies} = data || [];
  return (
    <div style={{ height: 480, width: '100%' }}>
      {data && <DataGrid
        rows={agentPolicies}
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
        onRowClick={handleRowClick}
        disableRowSelectionOnClick
        getRowId={(row) => row.id}
      />}
      <ShowDetails open={open} handleClick={handleIsClose} data={policyData}/>
    </div>
  );
}


