import React,{useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, IconButton} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ShowDetails from './ShowDetails';
import dayjs from 'dayjs';
import { IoCloseCircle } from 'react-icons/io5';
import { useUpdatePolicyMutation } from '../../redux/api/policyAPI';
import { ResponseToast } from '../../utils/features';
const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
//   width: 700,
  bgcolor: 'background.paper',
 
  boxShadow: 24,
  borderRadius:'5px',
};

const UpdateDetails = (props) => {
  const [isopen, setIsOpen] = useState(false);
  const [startDate,setStartDate] =useState();
  const [renewalDate,setrenewalDate] =useState();
  const [updatePolicy] = useUpdatePolicyMutation();
  const handleIsClose = () => setIsOpen(false);

    const [policyData,setpolicyData] =useState({
        policyId:'',
        policyType:'',
        companyName:'',
        policyNumber:'',
        amount:'',
        startDate:'',
        renewalDate:'',
        agentName:'',
    });
    useEffect(() => {
        if (props.policyData) {
            setpolicyData({
            policyId:props.policyData.id || '',
            policyType: props.policyData.policyType || '',
            companyName: props.policyData.companyName || '',
            policyNumber: props.policyData.policyNumber || '',
            amount: props.policyData.amount || 0,
            startDate: props.policyData.startDate || '',
            renewalDate: props.policyData.renewalDate || '',
            agentName: props.policyData.agentName || ''
        });
        setStartDate(dayjs(props.policyData.startDate));
        setrenewalDate(dayjs(props.policyData.renewalDate));
        }

    }, [props.policyData]);
    const [showData,setshowData] =useState({
        policyType:'',
        companyName:'',
        policyNumber:'',
        amount:'',
        startDate:'',
        renewalDate:'',
        agentName:'',
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setpolicyData((prevData) => {
        const newData = { ...prevData, [name]: value };
        return newData;
        });
    };
    const handleIsOpen = () => {
    props.handleClose();
    console.log(policyData)
    setshowData({
        policyType:policyData.policyType,
        companyName:policyData.companyName,
        policyNumber:policyData.policyNumber,
        amount:policyData.amount,
        startDate:policyData.startDate,
        renewalDate:policyData.renewalDate,
        agentName:policyData.agentName,
    })
    setIsOpen(true);
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (policyData.policyNumber) formData.append("policyNumber", policyData.policyNumber); 
        if (policyData.policyType) formData.append("policyName", policyData.policyType); 
        if (policyData.companyName) formData.append("companyName", policyData.companyName);
        if (policyData.amount) formData.append("premiumAmount", policyData.amount);
        if (policyData.startDate) formData.append("startDate", policyData.startDate);
        if (policyData.renewalDate) formData.append("endDate", policyData.renewalDate);
    
        const res = await updatePolicy({
          id:policyData.policyId ,
          formData
        });
          ResponseToast(res,null,'');
          handleIsOpen();
      };
  return (
    <div>
      <Modal
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} width={[300,700]}>
        <Box position="static" sx={{width:'100%',height:'50px',backgroundColor:'#3361E1',display:'flex',justifyContent:'space-between'}}>
            <div></div>
            <Typography variant="subtitle" color={'white'} fontFamily={'Lato'} fontWeight={'semibold'} fontSize={16} alignSelf={'center'} >
                Update Details
            </Typography>
            <IconButton onClick={props.handleClose} sx={{alignSelf:'centre'}}>
                <IoCloseCircle color='white'/>
            </IconButton>
            </Box>
        <Grid
            component="form"
            container
            noValidate
            spacing={2}
            p={4}
            onClick={submitHandler}
        >
        <Grid item xs={12} md={4} >
            <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="type-of-policy">
                Type of Policy
            </InputLabel>
            <TextField
                sx={{ paddingTop: '20px' }}
                size="small"
                id="type-of-policy"
                name="policyType"
                placeholder="Enter your policy"
                value={policyData.policyType}
                onChange={handleInputChange}
            />
            </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
            <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="name-of-company">
                Name of Company
            </InputLabel>
            <TextField
                sx={{ paddingTop: '20px' }}
                size="small"
                id="name-of-company"
                name="companyName"
                placeholder="Enter your company"
                value={policyData.companyName}
                onChange={handleInputChange}
            />
            </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
            <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="policy-Number">
                Policy Number
            </InputLabel>
            <TextField
                sx={{ paddingTop: '20px' }}
                size="small"
                id="policy-Number"
                name="policyNumber"
                placeholder="Enter your company"
                value={policyData.policyNumber}
                onChange={handleInputChange}
            />
            </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
            <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="premium-amount">
                Premium Amount
            </InputLabel>
            <TextField
                sx={{ paddingTop: '20px' }}
                size="small"
                id="premium-amount"
                name="amount"
                placeholder="Enter your amount"
                value={policyData.amount}
                onChange={handleInputChange}
            />
            </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
            <FormControl variant="standard" fullWidth>
                <InputLabel shrink htmlFor="start-date">
                    Start Date
                </InputLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                    disableFuture
                    inputFormat="DD/MM/YYYY"
                    sx={{ paddingTop: '20px' }}
                    slotProps={{ textField: { size: 'small' } }}
                    value={startDate}
                    onChange={(newValue) => {
                        setStartDate(newValue);
                        setpolicyData((prevData) => {
                            const newData = { ...prevData, ['startDate']: dayjs(newValue, "YYYY-MM-DD+h:mm").format('MM/DD/YYYY')};
                            return newData;
                        });

                    }}
                    />
                </LocalizationProvider>
            </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
            <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="renewal-date">
                Expiry Date
            </InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                disablePast
                inputFormat="DD/MM/YYYY"
                sx={{ paddingTop: '20px' }}
                slotProps={{ textField: { size: 'small' } }}
                value={renewalDate}
                onChange={(newValue) => {
                    setrenewalDate(newValue);
                    setpolicyData((prevData) => {
                        const newData = { ...prevData, ['renewalDate']:dayjs(newValue, "YYYY-MM-DD+h:mm").format('MM/DD/YYYY') };
                        return newData;
                      });

                }}
                />
            </LocalizationProvider>
            </FormControl>
        </Grid>
        <Grid item xs={12} md={12} />
            <Grid item xs={1} md={2} />
            <Grid item xs={5} md={4}>
                <Button variant="outlined" fullWidth onClick={props.handleClose}>Cancel</Button>
            </Grid>
            <Grid item xs={5} md={4}>
                <Button variant="contained" fullWidth type='submit'>Submit</Button>
            </Grid>
            <Grid item xs={1} md={2} />
        </Grid>
        </Box>
      </Modal>
      <ShowDetails open={isopen} handleClick={handleIsClose} data={showData}/>
    </div>
  );
}
export default  UpdateDetails