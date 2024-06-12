import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid,IconButton} from '@mui/material';
import TextField from '@mui/material/TextField';

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

const ShowDetails = (props) => {
    console.log(props.data);
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
                {props.data.policyType}
            </Typography>
            <IconButton onClick={props.handleClick} sx={{alignSelf:'centre'}}>
                <IoCloseCircle color='white'/>
            </IconButton>
            </Box>
            <Grid  container spacing={2} p={4} >
                <Grid item xs={12} md={4} >
                    <TextField
                    id="standard-read-only-input"
                    variant="standard"
                    label="Name Of Company"
                    defaultValue={props.data.companyName}
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
                        defaultValue={props.data.amount}
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
                        defaultValue={props.data.policyNumber}
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
                        defaultValue={props.data.startDate}
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
                        defaultValue={props.data.renewalDate}
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
                        defaultValue={props.data.agentName}
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