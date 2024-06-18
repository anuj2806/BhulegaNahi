import React,{useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Grid} from '@mui/material';
import { RxCrossCircled } from "react-icons/rx";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius:'5px',
};

const RemoveAgent = (props) => {
  const deleteAgent = () => {
    // delete logic
    props.handleClose();
    }
  return (
    <div>
      <Modal open={props.open}>
        <Box sx={style}>
            <Grid container spacing={2} p={4} >
                <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                    <RxCrossCircled color='red' size={'50px'} />
                </Grid>
                <Grid item xs={12}  display={'flex'} justifyContent={'center'}>
                    <Typography variant="subtitle" fontFamily={'Lato'} fontWeight={'medium'} fontSize={24} >
                        Are you sure?
                    </Typography>
                </Grid>
                <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                    <Typography variant="subtitle" fontFamily={'Lato'} fontWeight={'regular'} fontSize={16} >
                        Do you really want to delete these records? This<br/>
                        process cannot be undone.
                    </Typography>
                </Grid>
                
                <Grid item xs={12} md={12} />
                    <Grid item xs={1} md={2} />
                    <Grid item xs={5} md={4}>
                        <Button variant="outlined" fullWidth onClick={props.handleClose}>Cancel</Button>
                    </Grid>
                    <Grid item xs={5} md={4}>
                        <Button variant="contained" fullWidth onClick={deleteAgent}>Delete</Button>
                    </Grid>
                    <Grid item xs={1} md={2} />
            </Grid>
        </Box>
      </Modal>
    </div>
  );
}
export default  RemoveAgent