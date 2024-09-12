import { Button, Container, Stack,Grid,Typography,Box,Divider,IconButton } from '@mui/material'
import React,{} from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useParams,useNavigate} from 'react-router-dom'
import ActivityLogs from './ActivityLogs';
import ClaimDocumentTable from './ClaimDocumentTable';
const ClaimDetail = () => {
    const navigate = useNavigate();
    const {claimerName} = useParams();
    const backtoClaimAssistance = () => (navigate('/claimAssistance')); 
  return (
    <Container>
        <Grid container >
            <Grid item xs={12} md={12} width={'100px'}>
                <Box >
                    <Stack direction={'row'} alignItems={'center'}>
                        <IconButton onClick={backtoClaimAssistance}>
                            <ArrowBackIosIcon />
                        </IconButton>
                        <Typography variant="h6" m={1} fontFamily={'Lato'} fontWeight={'700'} >{claimerName}</Typography>
                    </Stack>
                    <Divider sx={{marginTop:'10px'}}/>
                </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <ClaimDocumentTable/>
            </Grid>    
            <Grid item xs={12} md={8}>
              <ActivityLogs/>
            </Grid>    
        </Grid>
    </Container>
  )
}

export default ClaimDetail
