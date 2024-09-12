import { Button, Container, Stack,Grid,Typography,Box,Divider } from '@mui/material'
import React,{useState} from 'react'
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import TableAppointment from './TableAppointment';
import BookAppointment from './BookAppointment';
import { Link } from 'react-router-dom';

const Appointment = () => {
    const [open, setopen] = useState(false);
    const handleOpen = () => setopen(false);
    const addMemberClick = () => setopen(true);

  return (
    <Container>
        <Grid container >
            <Grid item xs={12} md={12} width={'100px'}>
                <Box >
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant="h6" m={1} fontFamily={'Lato'} fontWeight={'700'}>Appointment</Typography>
                        <Button variant="contained" size="small" component={Link} to={"/appointment/bookAppointment"}  startIcon={<EventAvailableIcon/>}  sx={{height:'35px'}} >Book an Appointment</Button>
                    </Stack>
                    <Divider sx={{marginTop:'5px'}}/>
                </Box>
            </Grid>
            <Grid item xs={12} md={12}>
                <TableAppointment/>
            </Grid>    
        </Grid>
        <BookAppointment  open={open} handleClose={handleOpen}/>
    </Container>
  )
}

export default Appointment
