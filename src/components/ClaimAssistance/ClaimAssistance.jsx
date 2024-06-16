import { Button, Container, Stack,Grid,Typography,Box,Divider } from '@mui/material'
import React,{useState} from 'react'
import UploadClaimAssistance from './UploadClaimAssistance';
import DescriptionIcon from '@mui/icons-material/Description';
import TableClaimAssistance from './TableClaimAssistance';
const ClaimAssistance = () => {
    const [open, setopen] = useState(false);
    const handleOpen = () => setopen(false);
    const addMemberClick = () => setopen(true);

  return (
    <Container>
        <Grid container >
            <Grid item xs={12} md={12} width={'100px'}>
                <Box >
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant="h6" m={1} fontFamily={'Lato'} fontWeight={'700'}>Claim Assistance(1)</Typography>
                        <Button variant="contained" size="small" startIcon={<DescriptionIcon/>} onClick={addMemberClick} sx={{height:'35px'}} >Upload Claim Assistance</Button>
                    </Stack>
                    <Divider sx={{marginTop:'5px'}}/>
                </Box>
            </Grid>
            <Grid item xs={12} md={12}>
                <TableClaimAssistance/>
            </Grid>    
        </Grid>
        <UploadClaimAssistance  open={open} handleClose={handleOpen}/>
    </Container>
  )
}

export default ClaimAssistance
