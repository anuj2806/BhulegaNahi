import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Grid, Divider} from '@mui/material';
import { signInWithPopup, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useLoginMutation } from '../../redux/api/userAPI';

const Signup = ({name,gender,dob,phone}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [login] = useLoginMutation();
  const navigate =useNavigate();
  
  // Google Sign-in
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user.uid)
      const res = await login({
        name:result.user.displayName,
        email:result.user.email,
        gender,
        photo:result.user.photoURL,
        dob,
        id:result.user.uid,
        phone
    });
    if("data" in res){
      toast.success(res.data.message);
      
    }else{
      const error = res.error ;
      const message =error.data.message;
      toast.error(message);
    }
    } catch (error) {
      
    }
  };

  // Handle Signup with email and password
  const handleSignup = async () => {
    if (password === confirmPassword) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const userData = {
          name,
          email: userCredential.user.email,
          gender,
          photo: userCredential.user.photoURL,
          dob,
          id: userCredential.user.uid,
          phone,
        };
  
        const res = await login(userData);
  
        if (res.data) {
          toast.success(res.data.message);
          console.log('User registered:', userCredential.user);
          await signOut(auth);
          navigate("/login");
        } else {
          const error = res.error;
          const message = error?.data?.message || "An error occurred"; // Fallback for missing message
          toast.error(message);
  
          // Delete user if registration fails
          if(userCredential.user) await deleteUserAccount(userCredential.user);
          
        }
      } catch (error) {
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
          // Add more cases as needed
          default:
            toast.error("An unknown error occurred: " + error.message);
        }
      }
    } else {
      toast.error('Passwords do not match');
    }
  };
  
  // Helper function to delete user account
  const deleteUserAccount = async (user) => {
    if (user) {
      try {
        await user.delete();
        //console.log("Account deleted successfully.");
        //toast.error("Account deleted successfully.");
      } catch (deleteError) {
        //console.error("Error deleting account:", deleteError);
        //toast.error("Failed to delete account.");
      }
    }
  };
  

  return (
    <Grid container spacing={2} alignItems="center"  justifyContent="center" style={{ height: '100vh' }}>
      <Grid item xs={12} md={6}>
        <Box p={4} boxShadow={3} borderRadius={2}>
          <Typography variant="h4" gutterBottom>Sign Up</Typography>

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
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            margin="normal"
            size="small"
          />

          <Button variant="contained" color="primary" fullWidth onClick={handleSignup}>
            Sign Up with Email
          </Button>
            <Typography align="center"  marginY={2}><Divider>OR</Divider></Typography>
          <Button variant="contained" color="secondary" fullWidth onClick={handleGoogleSignIn}>
            Sign In with Google
          </Button>

          
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;
