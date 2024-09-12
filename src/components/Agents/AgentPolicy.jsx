import { Button, Container, Stack,Grid,Typography,Box,Divider,IconButton } from '@mui/material'
import React,{} from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useParams,useNavigate} from 'react-router-dom'
import TableAgentPolicy from './TableAgentPolicy';
const AgentPolicy = () => {
    const navigate = useNavigate();
    const {agentName} = useParams();
    const backtoAgents = () => (navigate('/agents')); 
  return (
    <Container>
        <Grid container >
            <Grid item xs={12} md={12} width={'100px'}>
                <Box >
                    <Stack direction={'row'} alignItems={'center'}>
                        <IconButton onClick={backtoAgents}>
                            <ArrowBackIosIcon />
                        </IconButton>
                        <Typography variant="h6" m={1} fontFamily={'Lato'} fontWeight={'700'} >{agentName}</Typography>
                    </Stack>
                    <Divider sx={{marginTop:'10px'}}/>
                </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <TableAgentPolicy/>
            </Grid>    
        </Grid>
    </Container>
  )
}

export default AgentPolicy
