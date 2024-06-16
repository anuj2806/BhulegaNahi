import React,{useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid,Select,OutlinedInput,MenuItem} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
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

const UpdateProfile = (props) => {
  const [isopen, setIsOpen] = useState(false);
  const [startDate,setStartDate] =useState();
  const [dateOfBirth,setdateOfBirth] =useState(dayjs('2022-04-17'));
  
  const handleIsClose = () => setIsOpen(false);
  const genderr =[ 'Male','Female','Other']; 
  const [policyData,setpolicyData] =useState({
    firstName:'Chand',
    lastName:'Kumar',
    email:'chand@gmail.com',
    gender:'Male',
    mobileNumber:'6674654554',
    dob:dateOfBirth,
})
const handleInputChange = (event) => {
    const { name, value } = event.target;
    setpolicyData((prevData) => {
      const newData = { ...prevData, [name]: value };
      return newData;
    });
  };
  const handleIsOpen = () => {
    props.handleClose();
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
            <InputLabel shrink htmlFor="firstName">
                First Name
            </InputLabel>
            <TextField
                sx={{ paddingTop: '20px' }}
                size="small"
                id="firstName"
                name="firstName"
                value={policyData.firstName}
                onChange={handleInputChange}
            />
            </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
            <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="lastName">
             Last Name
            </InputLabel>
            <TextField
                sx={{ paddingTop: '20px' }}
                size="small"
                id="lastName"
                name="lastName"
                value={policyData.lastName}
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
                value={policyData.email}
                onChange={handleInputChange}
            />
            </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
            <FormControl variant="standard" fullWidth>
                <InputLabel shrink htmlFor="gender">
                    Gender
                </InputLabel>
                <Select
                    id = 'gender'
                    name='gender'
                    input={<OutlinedInput />}
                    value={policyData.gender}
                    label="Gender"
                    onChange={handleInputChange}
                    size="small"
                    sx={{ marginTop: '20px' }}
                    >
                    <MenuItem value="">
                    <em>Select Gender</em>
                    </MenuItem>
                    {
                     genderr.map((gender,index)=>(<MenuItem value={gender} key={index}>{gender}</MenuItem>))
                    }
                            
                </Select>
            </FormControl> 
        </Grid>
        <Grid item xs={12} md={4}>
        <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="mobileNumber">
                Mobile Number
            </InputLabel>
            <TextField
                sx={{ paddingTop: '20px' }}
                size="small"
                id="mobileNumber"
                name="mobileNumber"
                value={policyData.mobileNumber}
                onChange={handleInputChange}
            />
            </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
            <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="dob">
                Date Of Birth
            </InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                inputFormat="DD/MM/YYYY"
                sx={{ paddingTop: '20px' }}
                slotProps={{ textField: { size: 'small' } }}
                value={dateOfBirth}
                onChange={(newValue) => {
                    setdateOfBirth(newValue);
                    setpolicyData((prevData) => {
                        const newData = { ...prevData, ['dob']:dayjs(newValue, "YYYY-MM-DD+h:mm").format('DD/MM/YYYY') };
                        return newData;
                      });

                }}
                />
            </LocalizationProvider>
            </FormControl>
        </Grid>
        <Grid item xs={12} md={12} />
            <Grid item xs={1} md={2} />
            <Grid item xs={5} md={4}>
                <Button variant="outlined" fullWidth onClick={props.handleClose}>Cancel</Button>
            </Grid>
            <Grid item xs={5} md={4}>
                <Button variant="contained" fullWidth onClick={handleIsOpen}>Update</Button>
            </Grid>
            <Grid item xs={1} md={2} />
        </Grid>
        </Box>
      </Modal>
    </div>
  );
}
export default  UpdateProfile