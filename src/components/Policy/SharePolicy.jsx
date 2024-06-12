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

const SharePolicy = (props) => {
    const [label,setLabel] =useState('Add Agent');
    const [selectMember,setSelectMember]= useState(true);
    const [newMember,setNewMember]= useState(false);

    const addsharePolicy = () => {
        // add agent logic
        props.handleClose();
    }

    const [policyData,setpolicyData] =useState({
        member:'Select Member',
        memberName:'',
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

    const addNewMemeber =()=>{
        setLabel('Create New Agent');
        setSelectMember(false);
        setNewMember(true);

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
                {selectMember && (<Grid container spacing={2} p={4}>
                    <Grid item xs={12} md={8} >
                        <FormControl variant="standard" fullWidth>
                        <InputLabel shrink htmlFor="member">
                            Memeber Name
                        </InputLabel>
                        <Select
                            id = 'member'
                            name='member'
                            input={<OutlinedInput />}
                            value={policyData.member}
                            label="Member"
                            onChange={handleInputChange}
                            size="small"
                            sx={{ marginTop: '20px' }}
                        >
                            <MenuItem value="">
                            <em>Select Member</em>
                            </MenuItem>
                            {
                                agentName.map((agent,index)=>(<MenuItem value={agent} key={index}>{agent}</MenuItem>))
                            }
                            
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <Button variant="outlined" onClick={addNewMemeber} size="small" startIcon={<FaSquarePlus color='#3361E1' size={'30px'}/>} sx={{height:'40px', marginTop:'20px',width:'100%'}} >Add Member</Button>
                    </Grid>
                </Grid>
                )}
                {newMember && (<Grid container spacing={2} p={4}>
                    <Grid item xs={12} md={6}>
                        <FormControl variant="standard" fullWidth>
                        <InputLabel shrink htmlFor="memberName">
                            Member Name
                        </InputLabel>
                        <TextField
                            sx={{ paddingTop: '20px' }}
                            size="small"
                            id="memberName"
                            name="memberName"
                            placeholder="Enter Member Name"
                            value={policyData.memberName}
                            onChange={handleInputChange}
                        />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl variant="standard" fullWidth>
                        <InputLabel shrink htmlFor="contactNumber">
                            Agent Contact Number
                        </InputLabel>
                        <TextField
                            sx={{ paddingTop: '20px' }}
                            size="small"
                            id="contactNumber"
                            name="contactNumber"
                            placeholder="Enter Agent Contact Number"
                            value={policyData.contactNumber}
                            onChange={handleInputChange}
                        />
                        </FormControl>
                    </Grid>
                </Grid>
                )}
            </Box>
                <Grid container spacing={2} p={4} >
                        <Grid item xs={1} md={2} />
                        <Grid item xs={5} md={4}>
                            <Button variant="outlined" fullWidth onClick={props.handleClose}>Cancel</Button>
                        </Grid>
                        <Grid item xs={5} md={4}>
                            <Button variant="contained" fullWidth onClick={addsharePolicy}>Add</Button>
                        </Grid>
                        <Grid item xs={1} md={2} />
                </Grid>        
        </Box>
      </Modal>
    </div>
  );
}
export default SharePolicy