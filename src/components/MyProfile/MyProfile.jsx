import React,{useState} from 'react';
import Typography from '@mui/material/Typography';
import { Button, Grid,Stack,Divider,Box,Container,TextField,IconButton } from '@mui/material';
import { RiPencilFill } from "react-icons/ri";
import UpdateProfile from './UpdateProfile';
const MyProfile =() =>{
    const [data,setData]=useState({
        'name':'Chand Kumar',
        'email':'chand@gmail.com',
        'gender':'Male',
        'dob':'16/06/2001',
        'contactNo':'6674654554'
    })
    const [open,setOpen]=useState(false);
    const handleClose =()=>setOpen(false);
  return (
    <Container>
        <Grid container>
            <Grid item xs={12} md={12} width={'100px'}>
                <Box >
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant="h6" m={1} fontFamily={'Lato'} fontWeight={'700'}>Profile</Typography>
                        <IconButton onClick={()=>setOpen(true)}>
                            <RiPencilFill />
                        </IconButton>
                    </Stack>
                    <Divider />
                </Box>
            </Grid>
            <Grid item xs={12} p={4} >
            <Grid  container spacing={2} p={2} border={'1px solid #e0e0e0'} borderRadius={1}>
                <Grid item xs={4} md={3} >
                    <TextField
                    id="standard-read-only-input"
                    variant="standard"
                    label="Name"
                    defaultValue={data.name}
                    InputProps={{
                        readOnly: true,
                    }}
                    />
                </Grid>
                <Grid item xs={4} md={3}>
                    <TextField
                        id="standard-read-only-input"
                        variant="standard"
                        label="Email"
                        defaultValue={data.email}
                        InputProps={{
                            readOnly: true,
                        }}
                        />
                </Grid>
                <Grid item xs={4} md={3}>
                    <TextField
                        id="standard-read-only-input"
                        variant="standard"
                        label="Gender"
                        defaultValue={data.gender}
                        InputProps={{
                            readOnly: true,
                        }}
                        />
                </Grid>
                <Grid item xs={4} md={3}>
                    <TextField
                        id="standard-read-only-input"
                        variant="standard"
                        label="Date of Birth"
                        defaultValue={data.dob}
                        InputProps={{
                            readOnly: true,
                        }}
                        />
                </Grid>
                <Grid item xs={4} md={3}>
                    <TextField
                        id="standard-read-only-input"
                        variant="standard"
                        label="Contact Number"
                        defaultValue={data.contactNo}
                        InputProps={{
                            readOnly: true,
                        }}
                        />
                </Grid>
            </Grid>
            </Grid>    
        </Grid>
        <UpdateProfile  open={open} handleClose={handleClose} />
    </Container>
  );
}
export default MyProfile