import { Button, Container, Stack,Grid,Typography,Box,Divider } from '@mui/material'
import React,{useEffect, useState} from 'react'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Link } from 'react-router-dom';
import TableFamilySpace from './TableFamilySpace';
import AddMember from './AddMember';
import { useSelector } from 'react-redux';
const FamilySpace = () => {
    const [open, setopen] = useState(false);
    const handleOpen = () => setopen(false);
    const addMemberClick = () => setopen(true);

  return (
    <Container>
        <Grid container >
            <Grid item xs={12} md={12} width={'100px'}>
                <Box >
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant="h6" m={1} fontFamily={'Lato'} fontWeight={'700'}>Family Space</Typography>
                        <Button variant="contained" size="small" startIcon={<GroupAddIcon/>} onClick={addMemberClick} sx={{height:'35px'}} >Add Member</Button>
                    </Stack>
                    <Divider sx={{marginTop:'5px'}}/>
                </Box>
            </Grid>
            <Grid item xs={12} md={12}>
                <TableFamilySpace/>
            </Grid>    
        </Grid>
        <AddMember  open={open} handleClose={handleOpen}/>
    </Container>
  )
}

export default FamilySpace
