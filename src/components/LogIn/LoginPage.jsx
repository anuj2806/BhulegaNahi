import React, { useState } from 'react';
import { Typography, Button, Box, Grid, TextField, Divider, Stack } from '@mui/material';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';
import toast from 'react-hot-toast';
import { useLoginMutation } from '../../redux/api/userAPI';
import { Link } from 'react-router-dom';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginMutation();
 
 
  const handleGoogleSignIn = async()=>{
    try{
        const provider = new GoogleAuthProvider();
        const {user} = await signInWithPopup(auth,provider);
        const res = await login({
          _id:user.uid,
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
  const handleLogin = async () => {
    try {
      const {user} = await signInWithEmailAndPassword(auth, email, password);
      const res = await login({
        _id:user.uid,
      });
      if("data" in res){
        toast.success(res.data.message);
      }else{
        const error = res.error ;
        const message =error.data.message;
        toast.error(message);
      }
    } catch (error) {
      // Handle specific Firebase authentication errors
      switch (error.code) {
        case 'auth/missing-email':
          toast.error("Please enter your email address.");
          break;
        case 'auth/missing-password':
          toast.error("Please enter a password.");
          break;
        case 'auth/invalid-email':
          toast.error("Please enter a valid email address.");
          break;
        case 'auth/email-already-in-use':
          toast.error("This email is already in use.");
          break;
        case 'auth/user-disabled':
          toast.error("This user has been disabled.");
          break;
        case 'auth/user-not-found':
          toast.error("No user found with this email address.");
          break;
        case 'auth/wrong-password':
          toast.error("Incorrect password. Please try again.");
          break;
        case 'auth/invalid-credential':
          toast.error("Invalid credentials provided.");
          break;
        default:
          toast.error("An unknown error occurred: " + error.message);
      }
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
        <Stack display={'flex'} flexDirection={'row'} marginBottom={1}> 
          <Typography fontSize={'14px'}  fontFamily={'Lato'} fontWeight={'400'}>New User ? </Typography>
          <Typography component={Link} to="/signup" fontSize={'14px'}  fontFamily={'Lato'} fontWeight={'400'}> Signup</Typography>
        </Stack>
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