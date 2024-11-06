import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const Loader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh" // Makes the loader centered on the full height of the screen
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
