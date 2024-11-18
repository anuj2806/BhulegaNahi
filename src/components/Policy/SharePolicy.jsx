import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Checkbox, Chip, Grid, ListItemText} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useSelector } from 'react-redux';
import { useGetAllFamilyMembersQuery } from '../../redux/api/userAPI';
import toast from 'react-hot-toast';
import { useSharePolicyMutation } from '../../redux/api/sharedPolicyAPI';
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
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SharePolicy = (props) => {
    const {user} = useSelector((state) => state.userReducer);
    const [personName, setPersonName] = useState([]);
    const [sharePolicy] = useSharePolicyMutation();
    const policyId = props.policyId;

    const handleChange = (event) => {
        const { value } = event.target;
        setPersonName(typeof value === 'string' ? value.split(',') : value,);
    };
    const {data,error,isError} = useGetAllFamilyMembersQuery(user[0].id);
  
    const {familyMembers} = data || [];
    if (isError) {
          const err = error;
          toast.error(err.data.message);
    }

    const addsharePolicy = async () => {
        const res = await sharePolicy(
            {
                "sharedBy":user[0].id,
                "sharedTo":personName[0],
                "sharedPolicy":policyId
            }
        )
        ResponseToast(res,null,null);
        props.handleClose();
    }
  return (
    <div>
      <Modal open={props.open}>
        <Box sx={style} width={['85%','40%']}>
                <Box position="static" sx={{width:'100%',height:'50px',backgroundColor:'#3361E1',display:'flex',justifyContent:'center',borderRadius:'5px 5px 0 0'}}>
                <Typography variant="subtitle" color={'white'} fontFamily={'Lato'} fontWeight={'semibold'} fontSize={16} alignSelf={'center'} >
                    Share Policy
                </Typography>
                </Box>
            <Box>
                <Grid container spacing={2} p={4}>
                    <Grid item xs={12} md={12} >
                    <FormControl fullWidth variant='standard'>
                        <InputLabel shrink id="demo-multiple-checkbox-label">Members</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            size="small"
                            multiple
                            sx={{ marginTop: '20px' }}
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput />}
                            renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => {
                                const label = familyMembers.find((item) => item.id === value)?.name;
                                return (
                                    <Chip key={value} label={label} />
                                );
                                })}
                            </Box>
                            )}
                        >
                            {familyMembers?.map((val) => (
                            <MenuItem key={val.id} value={val.id}>
                                <Checkbox checked={personName.indexOf(val.id) > -1} />
                                <ListItemText primary={val.name} />
                            </MenuItem>
                            ))}
                        </Select>
                        </FormControl>
                    </Grid>
                    
                        <Grid item xs={0} md={2} />
                        <Grid item xs={5.5} md={4}>
                            <Button variant="outlined" fullWidth onClick={props.handleClose}>Cancel</Button>
                        </Grid>
                        <Grid item xs={5.5} md={4}>
                            <Button variant="contained" fullWidth onClick={addsharePolicy}>Add</Button>
                        </Grid>
                        <Grid item xs={0} md={2} />
                      
                </Grid> 
            </Box>    
        </Box>
      </Modal>
    </div>
  );
}
export default SharePolicy