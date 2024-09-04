import { Button, Container, Stack,Grid,Typography,Box,Divider } from '@mui/material'
import React,{useEffect, useState} from 'react'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Link } from 'react-router-dom';
import TableFamilySpace from './TableFamilySpace';
import AddMember from './AddMember';
const FamilySpace = () => {
    const [open, setopen] = useState(false);
    const [totalMembers, setTotalMembers] = useState(0);
    const handleOpen = () => setopen(false);
    const addMemberClick = () => setopen(true);
    useEffect(()=>{

    },[totalMembers])
  return (
    <Container>
        <Grid container >
            <Grid item xs={12} md={12} width={'100px'}>
                <Box >
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant="h6" m={1} fontFamily={'Lato'} fontWeight={'700'}>Family Space({totalMembers})</Typography>
                        <Button variant="contained" size="small" startIcon={<GroupAddIcon/>} onClick={addMemberClick} sx={{height:'35px'}} >Add Member</Button>
                    </Stack>
                    <Divider sx={{marginTop:'5px'}}/>
                </Box>
            </Grid>
            <Grid item xs={12} md={12}>
                <TableFamilySpace setTotalMembers={setTotalMembers}/>
            </Grid>    
        </Grid>
        <AddMember  open={open} handleClose={handleOpen}/>
    </Container>
  )
}

export default FamilySpace
