import React,{useState} from 'react'
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
import { Link } from 'react-router-dom';
const PersonalInfo = () => {
  const [dateOfBirth,setdateOfBirth] =useState();

  const genderr =[ 'Male','Female','Other']; 
  const [policyData,setpolicyData] =useState({
    firstName:'',
    lastName:'',
    email:'',
    gender:'',
    mobileNumber:'',
    dob:dateOfBirth,
})
const handleInputChange = (event) => {
    const { name, value } = event.target;
    setpolicyData((prevData) => {
      const newData = { ...prevData, [name]: value };
      return newData;
    });
  };
  

  return (
    <Grid
            component="form"
            container
            noValidate
            spacing={2}
            p={2}
        >
        <Grid item xs={12}>
            <Typography variant="h6" fontFamily={'Lato'} fontWeight={'700'}>Personal Information</Typography>
        </Grid>
        <Grid item xs={12} md={6} >
            <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="firstName">
                First Name
            </InputLabel>
            <TextField
                sx={{ paddingTop: '20px' }}
                size="small"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                value={policyData.firstName}
                onChange={handleInputChange}
            />
            </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
            <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="lastName">
             Last Name
            </InputLabel>
            <TextField
                sx={{ paddingTop: '20px' }}
                size="small"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                value={policyData.lastName}
                onChange={handleInputChange}
            />
            </FormControl>
        </Grid>
        <Grid item xs={12} md={8}>
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
                <InputLabel shrink htmlFor="gender">
                    Gender
                </InputLabel>
                <Select
                    id = 'gender'
                    name='gender'
                    input={<OutlinedInput />}
                    value={policyData.gender}
                    label="Gender"
                    placeholder='Enter your gender'
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
        <Grid item xs={12} md={12}>
        <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="mobileNumber">
                Mobile Number
            </InputLabel>
            <TextField
                sx={{ paddingTop: '20px' }}
                size="small"
                id="mobileNumber"
                name="mobileNumber"
                placeholder='Enter your mobile number'
                value={policyData.mobileNumber}
                onChange={handleInputChange}
            />
            </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
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
        <Grid item xs={12} md={12} >
                <Button variant="contained" fullWidth component={Link} to="/dashboard">Start</Button>
        </Grid>
    </Grid>
  )
}

export default PersonalInfo
