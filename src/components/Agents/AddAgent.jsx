import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { FaSquarePlus } from "react-icons/fa6";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Form } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius:'5px',
};

const AddAgent = (props) => {

    const addAgentt = () => {
        // add member logic
        props.handleClose();
    }

    const [policyData,setpolicyData] =useState({
        agentName:'',
        emailid:'',
        contactNumber:'',
    })
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setpolicyData((prevData) => {
        const newData = { ...prevData, [name]: value };
        console.log(newData)
        return newData;
        });
    };
  return (
    <div>
      <Modal open={props.open}>
        <Box sx={style}>
                <Box position="static" sx={{width:'100%',height:'50px',backgroundColor:'#3361E1',display:'flex',justifyContent:'center'}}>
                <Typography variant="subtitle" color={'white'} fontFamily={'Lato'} fontWeight={'semibold'} fontSize={16} alignSelf={'center'} >
                    Add Agent
                </Typography>
                </Box>
            <Box >
                
               <Grid container spacing={2} p={4} >
                    <Grid item xs={12} md={6}>
                        <FormControl variant="standard" fullWidth required>
                        <InputLabel shrink htmlFor="agentName">
                           Agent Name
                        </InputLabel>
                        <TextField
                            sx={{ paddingTop: '20px' }}
                            size="small"
                            id="agentName"
                            name="agentName"
                            placeholder="Enter Agent Name"
                            value={policyData.agentName}
                            onChange={handleInputChange}
                            
                        />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl variant="standard" fullWidth required>
                        <InputLabel shrink htmlFor="emailid">
                           Email Id
                        </InputLabel>
                        <TextField
                            sx={{ paddingTop: '20px' }}
                            size="small"
                            id="emailid"
                            name="emailid"
                            placeholder="Enter Email Id"
                            value={policyData.emailid}
                            onChange={handleInputChange}
                            
                        />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl variant="standard" fullWidth required>
                        <InputLabel shrink htmlFor="contactNumber">
                            Contact Number
                        </InputLabel>
                        <TextField
                            sx={{ paddingTop: '20px' }}
                            size="small"
                            id="contactNumber"
                            name="contactNumber"
                            placeholder="Enter Contact Number"
                            value={policyData.contactNumber}
                            onChange={handleInputChange}
                            
                        />
                        </FormControl>
                    </Grid>
                </Grid>

            </Box>
                <Grid container spacing={2} p={4} >
                        <Grid item xs={1} md={2} />
                        <Grid item xs={5} md={4}>
                            <Button variant="outlined" fullWidth onClick={props.handleClose}>Cancel</Button>
                        </Grid>
                        <Grid item xs={5} md={4}>
                            <Button variant="contained" fullWidth onClick={addAgentt} type='submit'>Add</Button>
                        </Grid>
                        <Grid item xs={1} md={2} />
                </Grid>      
        </Box>
      </Modal>
    </div>
  );
}
export default AddAgent