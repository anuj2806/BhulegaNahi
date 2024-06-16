import { Button, Container, Stack,Grid,Typography,Box,Divider } from '@mui/material'
import React,{useState} from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import AddAgent from './AddAgent';
import TableAgents from './TableAgents';
const Agents = () => {
    const [open, setopen] = useState(false);
    const handleOpen = () => setopen(false);
    const addAgentClick = () => setopen(true);

  return (
    <Container>
        <Grid container >
            <Grid item xs={12} md={12} width={'100px'}>
                <Box >
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant="h6" m={1} fontFamily={'Lato'} fontWeight={'700'}>Agents(5)</Typography>
                        <Button variant="contained" size="small"  startIcon={<GroupsIcon/>} onClick={addAgentClick} sx={{height:'35px'}} >Add Agent</Button>
                    </Stack>
                    <Divider sx={{marginTop:'5px'}}/>
                </Box>
            </Grid>
            <Grid item xs={12} md={12}>
                <TableAgents/>
            </Grid>    
        </Grid>
        <AddAgent  open={open} handleClose={handleOpen}/>
    </Container>
  )
}

export default Agents
