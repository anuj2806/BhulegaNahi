import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid,MenuItem,OutlinedInput,Select} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import FormControl from '@mui/material/FormControl';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius:'5px',
};

const RegisterCase = (props) => {

    const addAgentt = () => {
        // add member logic
        props.handleClose();
    }
    const [appointmentdateandtime,setAppointmentdateandtime] =useState();
    const [policyData,setpolicyData] =useState({
        policyType:'',
        companyName:'',
        dateandtime:''
    })
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setpolicyData((prevData) => {
        const newData = { ...prevData, [name]: value };
        return newData;
        });
    };
    const purpose = ['Purchase of Health Insurance',
                    'Purchase of Term Insurance',
                    'Purchase of Motor Insurance',
                    'Renewal of your policies',
                    'Create an Inspection check on all your policies',
                    'Talk about Claim Assistance',
                    'Guidance regarding claims process',
                    'Education about Insurance','Others'];
    const eightAM = dayjs().set('hour', 8).startOf('hour');
    const tenPM = dayjs().set('hour', 22).startOf('hour');
  return (
    <div>
      <Modal open={props.open}>
        <Box sx={style} width={[300,700]}>
                <Box position="static" sx={{width:'100%',height:'50px',backgroundColor:'#3361E1',display:'flex',justifyContent:'center'}}>
                <Typography variant="subtitle" color={'white'} fontFamily={'Lato'} fontWeight={'semibold'} fontSize={16} alignSelf={'center'} >
                    Book An Appointment
                </Typography>
                </Box>
            <Box >
                
               <Grid container spacing={2} p={4} >
                    <Grid item xs={12} md={6} >
                        <FormControl variant="standard" fullWidth>
                        <InputLabel shrink htmlFor="typeofpolicy">
                            Type of Policy
                        </InputLabel>
                        <Select
                                id = 'typeofpolicy'
                                name='policyType'
                                input={<OutlinedInput />}
                                value={policyData.policyType}
                                label="Type of Policy"
                                onChange={handleInputChange}
                                size="small"
                                displayEmpty
                                sx={{ marginTop: '20px' }}
                            >
                                <MenuItem value='' disabled >
                                    <Typography color={'#778899b8'}>Select policy</Typography> 
                                </MenuItem>
                                    {
                                    purpose.map((agent,index)=>(<MenuItem value={agent} key={index}>{agent}</MenuItem>))
                                    }
                                        
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl variant="standard" fullWidth>
                        <InputLabel shrink htmlFor="nameofcompany">
                            Name of Company
                        </InputLabel>
                        <Select
                                id = 'nameofcompany'
                                name='companyName'
                                input={<OutlinedInput />}
                                value={policyData.companyName}
                                label="Name of Company"
                                onChange={handleInputChange}
                                size="small"
                                displayEmpty
                                sx={{ marginTop: '20px' }}
                            >
                                <MenuItem value='' disabled >
                                    <Typography color={'#778899b8'}>Select company</Typography> 
                                </MenuItem>
                                    {
                                    purpose.map((agent,index)=>(<MenuItem value={agent} key={index}>{agent}</MenuItem>))
                                    }
                                        
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl variant="standard" fullWidth>
                            <InputLabel shrink htmlFor="start-date">
                                Appointment Date & Time
                            </InputLabel>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker 
                                    views={['year', 'day', 'hours']}
                                    inputFormat="DD/MM/YYYY"
                                    disablePast
                                    maxTime={tenPM}
                                    minTime={eightAM }
                                    sx={{ paddingTop: '20px' }}
                                    slotProps={{ textField: { size: 'small' } }}
                                    value={appointmentdateandtime}
                                    onChange={(newValue) => {
                                        setAppointmentdateandtime(newValue);
                                        setpolicyData((prevData) => {
                                            const newData = { ...prevData, ["dateandtime"]: dayjs(newValue).format('DD/MM/YYYY HH:mm') };
                                            return newData;
                                        });
                                    }}
                                />
                            </LocalizationProvider>
                        </FormControl>
                    </Grid>
                </Grid>

            </Box>
                <Grid container spacing={2} p={4} >
                        <Grid item xs={1} md={2} />
                        <Grid item xs={5} md={4}>
                            <Button variant="outlined" fullWidth onClick={props.handleClose}>Cancel</Button>
                        </Grid>
                        <Grid item xs={5} md={4}>
                            <Button variant="contained" fullWidth onClick={addAgentt} type='submit'>Submit</Button>
                            <Button variant="contained" fullWidth component={Link} to ={'/claimAssistance/timeline'} type='submit'>Submit</Button>
                        </Grid>
                        <Grid item xs={1} md={2} />
                </Grid>      
            </Box>
      </Modal>
    </div>
  );
}
export default RegisterCase