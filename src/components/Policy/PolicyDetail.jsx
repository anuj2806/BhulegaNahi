import { Button, Container, Stack,Grid,Typography,Box,Divider } from '@mui/material'
import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PolicyTab from './PolicyTab';
const PolicyDetail = () => {
  return (
    <Container>
        <Grid container >
            <Grid item xs={12} md={12} width={'100px'}>
                <Box >
                    <Stack direction={'row'} alignItems={'center'}>
                    <ArrowBackIosIcon /><Typography variant="h6" m={1} fontFamily={'Lato'} fontWeight={'700'} > Add Policy</Typography>
                    </Stack>
                    <Divider sx={{marginTop:'10px'}}/>
                </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <PolicyTab/>
            </Grid>    
        </Grid>
    </Container>
  )
}

export default PolicyDetail
