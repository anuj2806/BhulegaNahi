import { Button, Container, Stack,Grid,Typography,Box,Divider,IconButton } from '@mui/material'
import React,{} from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TableMember from './TableMember';
import {useParams,useNavigate} from 'react-router-dom'
const MemberPolicy = () => {
    const navigate = useNavigate();
    const {memberid} = useParams();
    const backtoFamily = () => (navigate('/familySpace')); 
  return (
    <Container>
        <Grid container >
            <Grid item xs={12} md={12} width={'100px'}>
                <Box >
                    <Stack direction={'row'} alignItems={'center'}>
                        <IconButton onClick={backtoFamily}>
                            <ArrowBackIosIcon />
                        </IconButton>
                        <Typography variant="h6" m={1} fontFamily={'Lato'} fontWeight={'700'} >{memberid}</Typography>
                    </Stack>
                    <Divider sx={{marginTop:'10px'}}/>
                </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <TableMember/>
            </Grid>    
        </Grid>
    </Container>
  )
}

export default MemberPolicy
