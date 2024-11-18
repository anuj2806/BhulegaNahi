import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, InputAdornment} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useCreateFamilyMemberMutation } from '../../redux/api/userAPI';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius:'5px',
};

const AddMember = (props) => {
    const relationships = ['Brother', 'Sister', 'Father', 'Mother', 'Spouse', 'Son', 'Daughter',
         'Cousin', 'Uncle', 'Aunt', 'Nephew', 'Niece', 'Grandparent', 'Grandchild'];
    const [createFamilyMember] = useCreateFamilyMemberMutation();
    const {user} = useSelector((state) => state.userReducer );
    const [memberData,setMemberData] =useState({
        phone:null,
        email:null,
        relation:null,
        userId:user[0].id,
    })
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMemberData((prevData) => {
        const newData = { ...prevData, [name]: value };
        return newData;
        });
    };
    const submitHandler = async (e) =>{
        e.preventDefault();
        
        if(memberData.email && memberData.phone && user[0].id && memberData.relation){
           
            const res = await createFamilyMember(memberData);
            if("data" in res){
                toast.success(res.data.message);
                props.handleClose();
              }else{
                const error = res.error ;
                const message =error.data.message;
                toast.error(message);
              }
            
        }
    }
  return (
    <div>
      <Modal open={props.open}>
        <Box sx={style} width={['85%','40%']}>
                <Box position="static" sx={{width:'100%',height:'50px',backgroundColor:'#3361E1',display:'flex',justifyContent:'center',borderRadius:'5px 5px 0 0'}}>
                    <Typography variant="subtitle" color={'white'} fontFamily={'Lato'} fontWeight={'semibold'} fontSize={16} alignSelf={'center'} >
                        Add Member
                    </Typography>
                </Box>
                <Grid container spacing={2} p={4} component="form" noValidate onSubmit={submitHandler}>
                        {/* <Grid item xs={12} md={6}>
                            <FormControl variant="standard" fullWidth required>
                            <InputLabel shrink htmlFor="memberName">
                            Member Name
                            </InputLabel>
                            <TextField
                                sx={{ paddingTop: '20px' }}
                                size="small"
                                id="memberName"
                                name="memberName"
                                placeholder="Enter Member Name"
                                // value={policyData.memberName}
                                // onChange={handleInputChange}
                                
                            />
                            </FormControl>
                        </Grid> */}
                        <Grid item xs={12} md={6}>
                            <FormControl variant="standard" fullWidth required>
                            <InputLabel shrink htmlFor="email">
                            Email Id
                            </InputLabel>
                            <TextField
                                sx={{ paddingTop: '20px' }}
                                size="small"
                                id="email"
                                name="email"
                                placeholder="Enter Email Id"
                                value={memberData.email}
                                onChange={handleInputChange}
                                required
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl variant="standard" fullWidth required>
                            <InputLabel shrink htmlFor="phone">
                                Contact Number
                            </InputLabel>
                            <TextField
                                sx={{ paddingTop: '20px' }}
                                size="small"
                                id="phone"
                                name="phone"
                                placeholder="Enter Contact Number"
                                value={memberData.phone}
                                onChange={handleInputChange}
                                required
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                                }} 
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <FormControl variant="standard" fullWidth required>
                            <InputLabel shrink htmlFor="relation">
                                Relation
                            </InputLabel>
                            <Select
                                    id = 'relation'
                                    name='relation'
                                    input={<OutlinedInput />}
                                    value={memberData.relation}
                                    label="Type of Policy"
                                    onChange={handleInputChange}
                                    size="small"
                                    displayEmpty
                                    sx={{ marginTop: '20px' }}
                                >
                                    <MenuItem value='null' disabled >
                                        <Typography color={'#778899b8'}>Select Relation</Typography> 
                                    </MenuItem>
                                        {
                                        relationships.map((type,index)=>(<MenuItem value={type} key={index}>{type}</MenuItem>))
                                        }
                                            
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={0} md={6} />
                        <Grid item xs={0} md={2} />
                        <Grid item xs={12} md={4}>
                            <Button variant="outlined" fullWidth onClick={props.handleClose}>Invite Later</Button>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Button variant="contained" fullWidth type='submit'>Send Invitation</Button>
                        </Grid>
                        <Grid item xs={0} md={2} />
                </Grid>        
            </Box>
        </Modal>
    </div>
  );
}
export default AddMember