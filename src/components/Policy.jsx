import { Button, Container, Stack,Grid,Typography,Box,Divider } from '@mui/material'
import React from 'react'
import PolicyIcon from '@mui/icons-material/Policy';
import { Link } from 'react-router-dom';
import TablePolicy from './TablePolicy';
const Policy = () => {
  return (
    <Container>
        <Grid container >
            <Grid item xs={12} md={12} width={'100px'}>
                <Box >
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant="h6" m={1} fontFamily={'Lato'} fontWeight={'700'}>Policy(5)</Typography>
                        <Button variant="contained" component={Link} to="/policy/addpolicy" size="small" startIcon={<PolicyIcon />} sx={{height:'40px', marginTop:'5px'}} >Add Policy</Button>
                    </Stack>
                    <Divider sx={{marginTop:'10px'}}/>
                </Box>
            </Grid>
            <Grid item xs={12} md={12}>
                <TablePolicy/>
            </Grid>    
        </Grid>
    </Container>
  )
}

export default Policy
