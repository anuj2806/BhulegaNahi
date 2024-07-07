import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { GoDotFill } from "react-icons/go";
import { Divider } from '@mui/material';
import { IoCloseCircle } from "react-icons/io5";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius:'5px',
  };
const Advisory=(props)=> {
    const num = [1,2,3,4,5];
  return (
    <div>
        <Modal
            open={props.open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} width={[300,600]}>
                <Box position="static" sx={{width:'100%',height:'50px',backgroundColor:'#3361E1',display:'flex',justifyContent:'space-between'}}>
                <div></div>
                <Typography variant="subtitle" color={'white'} fontFamily={'Lato'} fontWeight={'semibold'} fontSize={16} alignSelf={'center'} >
                    Advisory
                </Typography>
                <IconButton onClick={props.handleClose} sx={{alignSelf:'centre'}}>
                    <IoCloseCircle color='white'/>
                </IconButton>
                </Box>
                <Grid container spacing={2} p={3} textAlign={'center'}>
                    <Grid item xs={12} md={12}>
                        <Box >
                            <List dense={true}>
                                { num.map((i,j)=>(
                                    <>
                                    <ListItem>
                                    <ListItemIcon><GoDotFill/></ListItemIcon>
                                    <ListItemText
                                        primary="Lorem ipsum dolor sit amet consectetur."
                                        sx={{marginLeft:'-30px',fontFamily:'Lato',fontSize:'12px'}}
                                        
                                    />
                                    </ListItem>
                                    <Divider/>
                                    </>
                                ))}
                            </List>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    </div>
  );
}
export default Advisory