import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid,IconButton,MenuItem,Select} from '@mui/material';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { IoCloseCircle } from "react-icons/io5";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius:'5px',
};

const CalendarShowDetail = (props) => {
    
  return (
    <div>
      <Modal
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Box position="static" sx={{width:'100%',height:'50px',backgroundColor:'#3361E1',display:'flex',justifyContent:'space-between'}}>
            <div></div>
            <Typography variant="subtitle" color={'white'} fontFamily={'Lato'} fontWeight={'semibold'} fontSize={16} alignSelf={'center'} >
                {props.event !=null? dayjs(props.event.date, "YYYY-MM-DD+h:mm").format('DD MMMM, YYYY'):''}
            </Typography>
            <IconButton onClick={props.handleClick} sx={{alignSelf:'centre'}}>
                <IoCloseCircle color='white'/>
            </IconButton>
            </Box>
            <Grid  container >
            <Grid item xs={0.3} md={0.2} bgcolor={props.event!=null?props.event.color:'white'} borderRadius={'0 0 0 5px'}></Grid>
            <Grid item xs={11} md={3.8} p={2}>
                    <TextField
                        id="standard-read-only-input"
                        variant="standard"
                        label="Name"
                        defaultValue={props.data.name}
                        InputProps={{
                            readOnly: true,
                        }}
                        />
                </Grid>   
                <Grid item xs={12} md={3.8} p={2}>
                    <TextField
                        id="standard-read-only-input"
                        variant="standard"
                        label="Policy Number"
                        defaultValue={props.data.policyNumber}
                        InputProps={{
                            readOnly: true,
                        }}
                        />
                </Grid>
                <Grid item xs={12} md={3.8} p={2}>
                    <TextField
                        id="standard-read-only-input"
                        variant="standard"
                        label="Premium Amount"
                        defaultValue={props.data.amount}
                        InputProps={{
                            readOnly: true,
                        }}
                        />
                </Grid>
            </Grid>
        </Box>
      </Modal>
    </div>
  );
}
export default CalendarShowDetail