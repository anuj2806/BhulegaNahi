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

const AddAgent = (props) => {
    const [label,setLabel] =useState('Add Agent')
    const agentAdd = () => {
        // add agent logic
        props.handleClose();
    }

    const [policyData,setpolicyData] =useState({
        agent:'Select Agent',
        agentName:'',
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

    const newAgent =()=>{
        setLabel('Create New Agent');
        document.getElementById('addAgent1').style.display='none';
        document.getElementById('addAgent2').style.display='flex';

    }
    const agentName =['Sagar','Rohit','Prince','Sam'];
  return (
    <div>
      <Modal open={props.open}>
        <Box sx={style}>
                <Box position="static" sx={{width:'100%',height:'50px',backgroundColor:'#3361E1',display:'flex',justifyContent:'center'}}>
                <Typography variant="subtitle" color={'white'} fontFamily={'Lato'} fontWeight={'semibold'} fontSize={16} alignSelf={'center'} >
                    {label}
                </Typography>
                </Box>
            <Box>
                <Grid container spacing={2} p={4} id='addAgent1'>
                    <Grid item xs={12} md={8} >
                        <FormControl variant="standard" fullWidth>
                        <InputLabel shrink htmlFor="agent">
                            Agent
                        </InputLabel>
                        <Select
                            id = 'agent'
                            name='agent'
                            input={<OutlinedInput />}
                            value={policyData.agent}
                            label="Agent"
                            onChange={handleInputChange}
                            size="small"
                            sx={{ marginTop: '20px' }}
                        >
                            <MenuItem value="">
                            <em>Select Agent</em>
                            </MenuItem>
                            {
                                agentName.map((agent,index)=>(<MenuItem value={agent} key={index}>{agent}</MenuItem>))
                            }
                            
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <Button variant="outlined" onClick={newAgent} size="small" startIcon={<FaSquarePlus color='#3361E1' size={'30px'}/>} sx={{height:'40px', marginTop:'20px',width:'100%'}} >Add Policy</Button>
                    </Grid>
                </Grid>
                <Grid container spacing={2} p={4} id='addAgent2' display={'none'}>
                    <Grid item xs={12} md={6}>
                        <FormControl variant="standard" fullWidth>
                        <InputLabel shrink htmlFor="policy-Number">
                            Agent Name
                        </InputLabel>
                        <TextField
                            sx={{ paddingTop: '20px' }}
                            size="small"
                            id="policy-Number"
                            name="policyNumber"
                            placeholder="Enter your company"
                            value={policyData.agentName}
                            onChange={handleInputChange}
                        />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl variant="standard" fullWidth>
                        <InputLabel shrink htmlFor="premium-amount">
                            Agent Contact Number
                        </InputLabel>
                        <TextField
                            sx={{ paddingTop: '20px' }}
                            size="small"
                            id="premium-amount"
                            name="amount"
                            placeholder="Enter your amount"
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
                            <Button variant="contained" fullWidth onClick={agentAdd}>Add</Button>
                        </Grid>
                        <Grid item xs={1} md={2} />
                </Grid>        
        </Box>
      </Modal>
    </div>
  );
}
export default AddAgent