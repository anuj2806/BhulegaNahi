import { Button, Container, Stack,Grid,Typography,Box,Divider } from '@mui/material'
import React, { useState } from 'react'
import PolicyIcon from '@mui/icons-material/Policy';
import { Link } from 'react-router-dom';
import TablePolicy from './TablePolicy';
const Policy = () => {
    const [totalPolicies,setTotalPolicies] = useState()
  return (
    <Container>
        <Grid container >
            <Grid item xs={12} md={12} width={'100px'}>
                <Box >
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant="h6" m={1} fontFamily={'Lato'} fontWeight={'700'}>Policy({totalPolicies})</Typography>
                        <Button variant="contained" component={Link} to="/policy/addpolicy" size="small" startIcon={<PolicyIcon />} sx={{height:'35px'}} >Add Policy</Button>
                    </Stack>
                    <Divider sx={{marginTop:'5px'}}/>
                </Box>
            </Grid>
            <Grid item xs={12} md={12}>
                <TablePolicy totalPolicies={setTotalPolicies}/>
            </Grid>    
        </Grid>
    </Container>
  )
}

export default Policy
