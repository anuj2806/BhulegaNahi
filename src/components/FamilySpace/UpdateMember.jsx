import React,{useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import ShowMemberDetail from './ShowMemberDetail';
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

const UpdateMember = (props) => {
  const [isopen, setIsOpen] = useState(false);
  const handleIsClose = () => setIsOpen(false);

  const [policyData,setpolicyData] =useState({
    name:props.data.name,
    email:props.data.email,
    contact:props.data.contactNumber,
})
const [showData,setshowData] =useState({
    name:'',
    email:'',
    contact:'',
});
const handleInputChange = (event) => {
    const { name, value } = event.target;
    setpolicyData((prevData) => {
      const newData = { ...prevData, [name]: value };
      return newData;
    });
  };
  const handleIsOpen = () => {
    props.handleClose();
    console.log(policyData)
    setshowData({
        name:policyData.name,
        email:policyData.email,
        contact:policyData.contact
    })
    setIsOpen(true);
    }

  return (
    <div>
      <Modal
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Box position="static" sx={{width:'100%',height:'50px',backgroundColor:'#3361E1',display:'flex',justifyContent:'center'}}>
            <Typography variant="subtitle" color={'white'} fontFamily={'Lato'} fontWeight={'semibold'} fontSize={16} alignSelf={'center'} >
                Update Details
            </Typography>
            </Box>
        <Grid
            component="form"
            container
            noValidate
            spacing={2}
            p={4}
        >
        <Grid item xs={12} md={4} >
            <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="name">
                Member Name
            </InputLabel>
            <TextField
                sx={{ paddingTop: '20px' }}
                size="small"
                id="name"
                name="name"
                placeholder="Enter Member Name"
                value={policyData.name}
                onChange={handleInputChange}
            />
            </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
            <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="email">
                Email
            </InputLabel>
            <TextField
                sx={{ paddingTop: '20px' }}
                size="small"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={policyData.email}
                onChange={handleInputChange}
            />
            </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
            <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="contact">
                Contact Number
            </InputLabel>
            <TextField
                sx={{ paddingTop: '20px' }}
                size="small"
                id="contact"
                name="contact"
                placeholder="Enter Member Contact No."
                value={policyData.contact}
                onChange={handleInputChange}
            />
            </FormControl>
        </Grid>
        <Grid item xs={12} md={12} />
            <Grid item xs={1} md={2} />
            <Grid item xs={5} md={4}>
                <Button variant="outlined" fullWidth onClick={props.handleClose}>Cancel</Button>
            </Grid>
            <Grid item xs={5} md={4}>
                <Button variant="contained" fullWidth onClick={handleIsOpen}>Submit</Button>
            </Grid>
            <Grid item xs={1} md={2} />
        </Grid>
        </Box>
      </Modal>
      <ShowMemberDetail open={isopen} handleClick={handleIsClose} data={showData}/>
    </div>
  );
}
export default  UpdateMember