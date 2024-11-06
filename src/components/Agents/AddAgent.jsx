import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, InputAdornment} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { useNewAgentMutation } from '../../redux/api/agentAPI';
import { ResponseToast } from '../../utils/features';
import { useSelector } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius:'5px',
};

const AddAgent = (props) => {
    const {user} = useSelector((state) => state.userReducer );
    const [newAgent] = useNewAgentMutation();
    const [agentData,setAgentData] =useState({

        name:null,
        email:null,
        phone:null,
        userId:user._id
    })
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAgentData((prevData) => {
        const newData = { ...prevData, [name]: value };
        console.log(newData)
        return newData;
        });
    };
    const submitHandler = async (e) => {
        e.preventDefault();
        if(agentData.name && agentData.email && agentData.phone && agentData.userId) {
            const res = await newAgent(agentData)
            ResponseToast(res,null,null);
            props.handleClose();
        }
        
    }
  return (
    <div>
      <Modal open={props.open}>
        <Box sx={style} width={[300,700]}>
                <Box position="static" sx={{width:'100%',height:'50px',backgroundColor:'#3361E1',display:'flex',justifyContent:'center'}}>
                <Typography variant="subtitle" color={'white'} fontFamily={'Lato'} fontWeight={'semibold'} fontSize={16} alignSelf={'center'} >
                    Add Agent
                </Typography>
                </Box>
            
                
               <Grid container spacing={2} p={4} component={'form'} onSubmit={submitHandler}>
                    <Grid item xs={12} md={6}>
                        <FormControl variant="standard" fullWidth required>
                        <InputLabel shrink htmlFor="agentName">
                           Agent Name
                        </InputLabel>
                        <TextField
                            sx={{ paddingTop: '20px' }}
                            size="small"
                            id="agentName"
                            name="name"
                            placeholder="Enter Agent Name"
                            value={agentData.name}
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
                            name="email"
                            placeholder="Enter Email Id"
                            value={agentData.email}
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
                            name="phone"
                            placeholder="Enter Contact Number"
                            value={agentData.phone}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                            }} 
                        />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} />
                    <Grid item xs={1} md={2} />
                    <Grid item xs={5} md={4}>
                        <Button variant="outlined" fullWidth onClick={props.handleClose}>Cancel</Button>
                    </Grid>
                    <Grid item xs={5} md={4}>
                        <Button variant="contained" fullWidth type='submit'>Add</Button>
                    </Grid>
                    <Grid item xs={1} md={2} />
                </Grid>      
        </Box>
      </Modal>
    </div>
  );
}
export default AddAgent