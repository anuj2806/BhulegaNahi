import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Chip, Grid, ListItemText} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { FaSquarePlus } from "react-icons/fa6";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import { usePolicyOfUserAgentQuery, useUserAgentQuery } from '../../redux/api/agentAPI';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useAddAgentMutation } from '../../redux/api/policyAPI';
import { ResponseToast } from '../../utils/features';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius:'5px',
};

const AddAgent = (props) => {
    const {user} = useSelector((state) => state.userReducer );
    const [agent,setAgent] =useState(null);
    const [addAgentToPolicy] = useAddAgentMutation();
    const {data,error,isError} = useUserAgentQuery(user._id);

    const {agents} = data || [];
    const agentAdd = async (e) => {
        e.preventDefault();
        // add agent logic
        if(props.policyId && user._id && agent){
            const data = {
                "userId":user._id,
                "agentId":agent,
                "policyId":props.policyId
            }
            const res = await addAgentToPolicy(data);
            ResponseToast(res,null,null);
        }
        else{
            return toast.error("Invalid request");
        }
        props.handleClose();
    }

  return (
    <div>
      <Modal open={props.open}>
        <Box sx={style} width={[300,500]}>
            <Box position="static" sx={{width:'100%',height:'50px',backgroundColor:'#3361E1',display:'flex',justifyContent:'center'}}>
                <Typography variant="subtitle" color={'white'} fontFamily={'Lato'} fontWeight={'semibold'} fontSize={16} alignSelf={'center'} >
                    Add Agent
                </Typography>
            </Box>
            <Box>
                <Grid container spacing={2} p={4} component={'form'} onSubmit={agentAdd}>
                    <Grid item xs={12}>
                        <FormControl fullWidth variant='standard'>
                            <InputLabel shrink id="agentadd-label">Agent</InputLabel>
                            <Select
                                labelId="demo--checkbox-label"
                                id="agentadd"
                                size="small"
                                sx={{ marginTop: '20px' }}
                                value={agent}
                                onChange={(e)=>setAgent(e.target.value)}
                                input={<OutlinedInput />}
                            >
                                {agents?.map((val) => (
                                <MenuItem key={val._id} value={val._id}>
                                    <ListItemText primary={val.name} />
                                </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={1} md={2} />
                    <Grid item xs={5} md={4}>
                        <Button variant="outlined" fullWidth onClick={props.handleClose}>Cancel</Button>
                    </Grid>
                    <Grid item xs={5} md={4}>
                        <Button variant="contained" fullWidth type='submit'>Add</Button>
                    </Grid>
                    <Grid item xs={1} md={2} />
                </Grid>
            </Box>        
        </Box>
      </Modal>
    </div>
  );
}
export default AddAgent