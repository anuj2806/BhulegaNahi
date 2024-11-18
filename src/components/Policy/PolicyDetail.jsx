import { Button, Container, Stack,Grid,Typography,Box,Divider, IconButton } from '@mui/material'
import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import AddPolicyForm from './AddPolicyForm';
const PolicyDetail = () => {
  const navigate = useNavigate();
  const backtoPolicy = () => (navigate('/policy')); 
  return (
    <Container>
        <Grid container >
            <Grid item xs={12} md={12} width={'100px'}>
                <Box >
                    <Stack direction={'row'} alignItems={'center'}>
                        <IconButton onClick={backtoPolicy}><ArrowBackIosIcon /></IconButton>
                        <Typography variant="h6" m={1} fontFamily={'Lato'} fontWeight={'700'} > Add Policy</Typography>
                    </Stack>
                    <Divider sx={{marginTop:'10px'}}/>
                </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <AddPolicyForm/>
            </Grid>    
        </Grid>
    </Container>
  )
}

export default PolicyDetail
