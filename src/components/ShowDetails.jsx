import React,{useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

import { Grid,IconButton} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

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

const ShowDetails = (props) => {
  const [policyData,setpolicyData] =useState({
    companyName:'HDFC',
    policyNumber:'234567',
    amount:'3456789',
    startDate:'10/06/2024',
    renewalDate:'10/12/2024',
    agentName:'Sagar',
})

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
                {props.name}
            </Typography>
            <IconButton onClick={props.handleClick} sx={{alignSelf:'centre'}}>
                <CloseIcon style={{ color: 'white' }}/>
            </IconButton>
            </Box>
            <Grid  container spacing={2} p={4} >
                <Grid item xs={12} md={4} >
                    <TextField
                    id="standard-read-only-input"
                    variant="standard"
                    label="Name Of Company"
                    defaultValue={policyData.companyName}
                    InputProps={{
                        readOnly: true,
                    }}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        id="standard-read-only-input"
                        variant="standard"
                        label="Premium Amount"
                        defaultValue={policyData.amount}
                        InputProps={{
                            readOnly: true,
                        }}
                        />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        id="standard-read-only-input"
                        variant="standard"
                        label="Policy Number"
                        defaultValue={policyData.policyNumber}
                        InputProps={{
                            readOnly: true,
                        }}
                        />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        id="standard-read-only-input"
                        variant="standard"
                        label="Start Date"
                        defaultValue={policyData.startDate}
                        InputProps={{
                            readOnly: true,
                        }}
                        />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        id="standard-read-only-input"
                        variant="standard"
                        label="Renewal Date"
                        defaultValue={policyData.renewalDate}
                        InputProps={{
                            readOnly: true,
                        }}
                        />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        id="standard-read-only-input"
                        variant="standard"
                        label="Agent"
                        defaultValue={policyData.agentName}
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
export default ShowDetails