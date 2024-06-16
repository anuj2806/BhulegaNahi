import { Container, Stack,Grid,Typography,Box,Divider } from '@mui/material'
import React from 'react'
import TableDownloadSOP from './TableDownloadSOP';
const DownloadSOP = () => {

  return (
    <Container>
        <Grid container >
            <Grid item xs={12} md={12} width={'100px'}>
                <Box >
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant="h6" m={1} fontFamily={'Lato'} fontWeight={'700'}>Download SOPs(5)</Typography>
                    </Stack>
                    <Divider sx={{marginTop:'10px'}}/>
                </Box>
            </Grid>
            <Grid item xs={12} md={12}>
                <TableDownloadSOP/>
            </Grid>    
        </Grid>
    </Container>
  )
}

export default DownloadSOP
