import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import FamilyOptionButton from './FamilyOptionButton';
import toast from 'react-hot-toast';
import { useDeleteFamilyMemberMutation, useGetAllFamilyMembersQuery } from '../../redux/api/userAPI';
import { useSelector } from 'react-redux';


export default function TableFamilySpace({setTotalMembers}) {
  const {user} = useSelector((state) => state.userReducer);
  const [userMemberData,setUserMemberData] = useState({
      "userId":null,
      "memeberId":null
  });
  const handleRowClick = (params) =>{
    setUserMemberData({
      "userId":user._id,
      "memeberId":params.row._id
    })
  }
  const columns = [

    { field: 'name',
      headerName: 'Name',
      width: 350,
      headerClassName:"tableheader",
      renderCell: (params) => {
            return <Link to={`/familySpace/${params.row._id}/${params.formattedValue}`} style={{textDecoration:'none'}}>{params.formattedValue}</Link>;
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
          return (<FamilyOptionButton data={userMemberData}/>);
          
        }
    },
  ];
  const {data,error,isError} = useGetAllFamilyMembersQuery(user._id);
  
  const {familyMembers} = data || [];
  if (isError) {
        const err = error;
        toast.error(err.data.message);
  }
  React.useEffect(()=>{
    setTotalMembers(data?.familyMembers.length);
  },[familyMembers])
  return (
    <div style={{ height: 480, width: '100%'}}>
      {data && 
      <DataGrid
        rows={familyMembers}
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
        onRowClick={handleRowClick}
        getRowId={(row) => row._id}
      />}
    </div>
  );
}
