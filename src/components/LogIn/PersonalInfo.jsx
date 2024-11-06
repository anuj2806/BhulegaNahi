import React,{useState} from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid,Select,OutlinedInput,MenuItem, Card, InputAdornment} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import VerifyOTP from './VerifyOTP';
import Signup from './SignUp';
import { checkMobileNumber, sendOTPText } from '../../redux/api/userAPI';
const PersonalInfo = () => {
  const [dateOfBirth,setdateOfBirth] =useState(null);
  const [sendOTP,setSendOTP] = useState(false);
  const [verifyOTP,setVerifyOTP] = useState(false);
  const [nextPage,setNextPage] = useState(false);
  const genderr =[ 'male','female']; 
  const [otp, setOtp] = React.useState('')
  const [randomNumber,setRandomNumber] = useState();
  const [policyData,setpolicyData] =useState({
    email:'',
    fullName:'',
    gender:'',
    mobileNumber:'',
    dob:'',
})
const handleInputChange = (event) => {
    const { name, value } = event.target;
    setpolicyData((prevData) => {
      const newData = { ...prevData, [name]: value };
      return newData;
    });
  };
  function generateRandomNumber() {
    return Math.floor(100000 + Math.random() * 900000);
  }
  

 const sendOTPPage = async () =>{
        if(!policyData.mobileNumber) return toast.error("Plese Enter Mobile Number")
        if (policyData.mobileNumber.length === 10) {
            try {
                const data = await checkMobileNumber(policyData.mobileNumber);
                if(data?.user.length !==0) return toast.error("Mobile Number Already Registered")
            } catch (error) {
                
            }
            const otpValue = generateRandomNumber();
            setRandomNumber(otpValue);
            setSendOTP(true);
            try {
                await sendOTPText(policyData.mobileNumber,otpValue)
            } catch (error) {
                
            }
            
        }
        else{
            toast.error("Invalid Mobile Number")
        }
 } 
 const veifyOTPPage = () =>{
    if(otp == randomNumber){
        setVerifyOTP(true);

    }
    else{
        toast.error("Plese Enter valid OTP")
    }
 } 
const signUpPage = () =>{
    if(!policyData.fullName) return toast.error("Plese Enter Full Name");
    if(!policyData.dob) return toast.error("Plese Enter DOB");
    if(!policyData.gender) return toast.error("Plese Select Gender");
    
    setNextPage(true);
}
  return (
    <>
    {!nextPage && <Card elevation={3} sx={{padding:'16px',width:['70%','50%','30%'],margin:'auto',marginTop:['10%','5%']}}>
        <Grid component="form" container noValidate spacing={2} p={2} >
            <Grid item xs={12}>
                <Typography variant="h6" fontFamily={'Lato'} fontWeight={'700'}>Personal Information</Typography>
            </Grid>
            <Grid item xs={12} md={12}>
                <FormControl variant="standard" fullWidth>
                    <InputLabel shrink htmlFor="logincontactNumber">
                        Mobile Number
                    </InputLabel>
                    <TextField
                        disabled={sendOTP}
                        sx={{ paddingTop: '20px' }}
                        size="small"
                        id="logincontactNumber"
                        name="mobileNumber"
                        placeholder="Enter Contact Number"
                        value={policyData.mobileNumber}
                        onChange={handleInputChange}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                        }} />
                    </FormControl>
            </Grid>
        { !sendOTP && (<><Grid item xs={12} md={12}>
                      <Button variant="contained" fullWidth onClick={sendOTPPage}>Send OTP</Button>
                  </Grid>
            </>)
        }{
        sendOTP && !verifyOTP && (
        <>
            <Grid item xs={12} md={12}>
                <Typography align="right" fontSize={'12px'} fontStyle={'italic'} fontFamily={'Lato'} fontWeight={'400'}>OTP has been sent to +91******{policyData.mobileNumber.slice(-4)} </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
                <VerifyOTP setOtp={setOtp} otp={otp}/>
            </Grid>
            <Grid item xs={12} md={12}>
                <Typography component={Link} fontSize={'12px'} fontStyle={'italic'} fontFamily={'Lato'} fontWeight={'400'}>Resend OTP</Typography>
            </Grid>
            <Grid item xs={12} md={12}>
                <Button variant="contained" fullWidth onClick={veifyOTPPage}>Verify OTP</Button>
            </Grid>
        </>) 
        }
        {
        verifyOTP  && (
                <>
                    <Grid item xs={12} md={12}>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel shrink htmlFor="fullName">
                            Full Name
                        </InputLabel>
                        <TextField
                            sx={{ paddingTop: '20px' }}
                            size="small"
                            id="fullName"
                            name="fullName"
                            placeholder="Enter Full Name"
                            value={policyData.fullName}
                            onChange={handleInputChange}
                        />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <FormControl variant="standard" fullWidth>
                            <InputLabel shrink htmlFor="gender">
                                Gender
                            </InputLabel>
                            <Select
                                id='gender'
                                name='gender'
                                input={<OutlinedInput />}
                                value={policyData.gender}
                                label="Gender"
                                placeholder='Enter your gender'
                                onChange={handleInputChange}
                                size="small"
                                sx={{ marginTop: '20px' }}
                            >
                                <MenuItem value={null}>
                                    <Typography color={'#778899b8'}>Select Gender</Typography>
                                </MenuItem>
                                <MenuItem value={'male'} >Male</MenuItem>
                                <MenuItem value={'female'} >Female</MenuItem>

                            </Select>
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
                                    disableFuture
                                    onChange={(newValue) => {
                                        setdateOfBirth(newValue);
                                        setpolicyData((prevData) => {
                                            const newData = { ...prevData, ['dob']: dayjs(newValue, "YYYY-MM-DD+h:mm").format('MM/DD/YYYY') };
                                            return newData;
                                        });

                                    } } />
                            </LocalizationProvider>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Button variant="contained" fullWidth onClick={signUpPage}>NEXT</Button>
                    </Grid>
        </>)}
            
         </Grid>
    </Card>}
        {
            nextPage && <Signup name={policyData.fullName} gender={policyData.gender} dob={policyData.dob} phone={policyData.mobileNumber}/>
        }
    </>
  )
}

export default PersonalInfo
