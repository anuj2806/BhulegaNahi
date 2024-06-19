import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, Grid, CardMedia,Stack,IconButton } from '@mui/material';
// import MuiPhoneNumber from 'material-ui-phone-number';
import { MuiTelInput } from 'mui-tel-input';
import { Link,useNavigate } from 'react-router-dom';
import logo from '../../assests/logo.png'
import DescriptionIcon from '@mui/icons-material/Description';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import VerifyOTP from './VerifyOTP';
import PersonalInfo from './PersonalInfo';
const LoginPage = () => {
  const [loginpage,setLogin]=useState(true);
  const [otppage,setOtpPage]=useState(false);
  const [personalInfo,setpersonalInfo]=useState(false)
  const [phoneNo,setPhoneNo]=useState();
    const handleOnChange =(value)=>(setPhoneNo(value))
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
                          countryCodeEditable={false}
                          enableLongNumbers
                          disableAreaCodes
                          forceCallingCode 
                      />
            <Box mt={2}>
              <Button variant="contained" fullWidth className='continueButton' onClick={()=>{setLogin(false);setOtpPage(true)}}>
                Continue
              </Button>
            </Box>
            <Box mt={2} mb={1} className='buttonContainer'>
              <Button variant="outlined" color='primary' fullWidth className='outlinedButton' startIcon={<DescriptionIcon/>}>
                Claim Assistance
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