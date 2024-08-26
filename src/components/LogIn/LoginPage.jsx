import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, Grid, CardMedia,Stack,IconButton, InputLabel, Select, OutlinedInput, MenuItem } from '@mui/material';
// import MuiPhoneNumber from 'material-ui-phone-number';
import FormControl from '@mui/material/FormControl';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MuiTelInput } from 'mui-tel-input';
import { useNavigate } from 'react-router-dom';
import logo from '../../assests/logo.png'
import DescriptionIcon from '@mui/icons-material/Description';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import GoogleIcon from '@mui/icons-material/Google';
import VerifyOTP from './VerifyOTP';
import PersonalInfo from './PersonalInfo';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';
import toast from 'react-hot-toast';
import { useLoginMutation } from '../../redux/api/userAPI';
import { ResponseToast } from '../../utils/features';
const LoginPage = () => {
  const [loginpage,setLogin]=useState(true);
  const [otppage,setOtpPage]=useState(false);
  const [personalInfo,setpersonalInfo]=useState(false)
  const [phoneNo,setPhoneNo]=useState(null);
  const [gender,setGender]=useState(null);
  const [dateOfBirth,setdateOfBirth] =useState();
  const [login] = useLoginMutation();
  const genderr =['male','female']; 
  const handleOnChange =(value)=>(setPhoneNo(value));
  const navigate = useNavigate();
  const verifyOTP = () =>{
    if(phoneNo==='+91 63778 61314'){
      navigate('/dashboard')
    }else{
      setLogin(false)
      setOtpPage(false)
      setpersonalInfo(true)
    }
  }
  const loginHandler = async()=>{
    try{
        const provider = new GoogleAuthProvider();
        const {user} = await signInWithPopup(auth,provider);
        const res = await login({
            name:user.displayName,
            email:user.email,
            gender,
            photo:user.photoURL,
            role:"user",
            dob:dateOfBirth,
            _id:user.uid,
            phone:phoneNo
        });
        if("data" in res){
          toast.success(res.data.message);
        }else{
          const error = res.error ;
          const message =error.data.message;
          toast.error(message);
        }
    }
    catch(error){
      toast.error("sign in faild")
    }
  }
  return (
    <Grid container p={10}>
      <Grid item xs={1} md={4} />
      <Grid item xs={10} md={4} >
        <Card elevation={3} sx={{padding:'16px'}}>
          {loginpage && (<><CardMedia sx={{display:'flex', justifyContent:'center'}}>
          <img src={logo} alt="bhuleganahi"/>
          </CardMedia>
          <CardContent className='cardContent'>
          <Typography variant="h6" fontFamily={'Lato'} fontWeight={'700'}>Login</Typography>
            <Typography variant="subtitle1" gutterBottom className='subtitle'>
              Enter phone to continue
            </Typography>
                <MuiTelInput
                          id="phone"
                          name="phone"
                          size='small'
                          value={phoneNo}
                          defaultCountry="IN"
                          onChange={handleOnChange}
                          variant='outlined'
                          required
                          fullWidth
                          //countryCodeEditable={false}
                          //enableLongNumbers
                          //disableAreaCodes 
                          forceCallingCode 
                      />
            <Box mt={2}>
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
                  }}
                  />
              </LocalizationProvider>
              </FormControl>
            </Box>
            <Box mt={2}>
              <FormControl variant="standard" fullWidth>
                  <InputLabel shrink htmlFor="gender">
                      Gender
                  </InputLabel>
                  <Select
                      id = 'gender'
                      name='gender'
                      input={<OutlinedInput />}
                      value={gender}
                      label="Gender"
                      placeholder='Enter your gender'
                      onChange={(e)=>setGender(e.target.value)}
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
            </Box>
            {/* <Box mt={2}>
              <Button variant="contained" fullWidth className='continueButton' onClick={()=>{setLogin(false);setOtpPage(true)}}>
                Continue
              </Button>
            </Box> */}
            <Box mt={2} mb={1} className='buttonContainer'>
              <Button variant="outlined" color='primary' fullWidth className='outlinedButton' startIcon={<GoogleIcon/>} onClick={loginHandler}>
                Sign In With Google
              </Button>
            </Box>
            <Box mt={1} className='buttonContainer'>
              <Button variant="outlined"  color='primary' fullWidth className='outlinedButton' startIcon={<EmojiEmotionsIcon/>}>
                Take The Survey
              </Button>
            </Box>
          </CardContent></>
        )}
        {otppage && (<CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} width={'100px'}>
                <Box >
                    <Stack direction={'row'} alignItems={'center'}>
                        <IconButton onClick={()=>{setOtpPage(false);setLogin(true)}}>
                            <ArrowBackIosIcon />
                        </IconButton>
                        <Typography variant="h6" m={1} fontFamily={'Lato'} fontWeight={'700'} >Verify OTP</Typography>
                    </Stack>
                    <Typography variant="subtitle1"  fontFamily={'Lato'} fontSize={'16px'} fontWeight={'regular'} color={'rgba(0,0,0,0.6)'}>
                        We have sent the code verification to your mobile number
                    </Typography>
                    <Typography variant="subtitle1"  fontFamily={'Lato'} fontSize={'14px'} fontWeight={'medium'} color={'#242424'}>
                       {phoneNo}
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <VerifyOTP/>
              </Grid>
              <Grid item xs={12} md={12}>
              <Typography mb={1} variant="subtitle1"  fontFamily={'Lato'} fontSize={'14px'} fontWeight={'regular'} color={'rgba(0,0,0,0.38)'}>
               Resend One-Time Password
              </Typography>
              <Button  variant="contained" fullWidth className='continueButton' onClick={verifyOTP}>
                Continue
              </Button>
            </Grid>    
        </Grid>
        </CardContent>)}
        {personalInfo && (<PersonalInfo/>)}
        </Card>
      </Grid>
      <Grid item xs={1} md={4}/>
    </Grid>
  );
}

export default LoginPage;