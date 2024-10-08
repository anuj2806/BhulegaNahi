import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, Grid, CardMedia,Stack,IconButton, InputLabel, Select, OutlinedInput, MenuItem, TextField, Divider } from '@mui/material';
// import MuiPhoneNumber from 'material-ui-phone-number';
import InputAdornment from '@mui/material/InputAdornment';
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
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';
import toast from 'react-hot-toast';
import { useLoginMutation } from '../../redux/api/userAPI';
import { ResponseToast } from '../../utils/features';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginMutation();
 
 
  const handleGoogleSignIn = async()=>{
    try{
        const provider = new GoogleAuthProvider();
        const {user} = await signInWithPopup(auth,provider);
    }
    catch(error){
      toast.error("sign in faild")
    }
  }
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      toast.error("User logged in:", userCredential.user.uid);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ height: '100vh' }}>
    <Grid item xs={12} md={6}>
      <Box p={4} boxShadow={3} borderRadius={2}>
        <Typography variant="h4" gutterBottom>Log In</Typography>

        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          size="small"
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          size="small"
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Login
        </Button>
          <Typography align="center"  marginY={2}><Divider>OR</Divider></Typography>
        <Button variant="contained" color="secondary" fullWidth onClick={handleGoogleSignIn}>
          Sign In with Google
        </Button>
      </Box>
    </Grid>
  </Grid>
  );
}

export default LoginPage;