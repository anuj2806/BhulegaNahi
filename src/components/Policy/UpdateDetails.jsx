import React,{useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, IconButton, MenuItem, OutlinedInput, Select} from '@mui/material';
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
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
const style = {
  position: 'absolute',
  top: '45%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
//   width: 700,
  bgcolor: 'background.paper',
 
  boxShadow: 24,
  borderRadius:'5px',
};
const frequency = ['One time','Monthly','Quarterly','Semi - Annually','Annually','Once in Two Year','Once in Three Year','Others'];
    const insurancePolicies = [
        "Health Insurance",
        "Life Insurance",
        "Auto Insurance",
        "Homeowners Insurance",
        "Renters Insurance",
        "Travel Insurance",
        "Disability Insurance",
        "Pet Insurance",
        "Liability Insurance",
        "Business Insurance",
        "Umbrella Insurance",
        "Critical Illness Insurance",
        "Long-Term Care Insurance",
        "Dental Insurance",
        "Vision Insurance",
        "Mortgage Insurance",
        "Flood Insurance",
        "Earthquake Insurance",
        "Income Protection Insurance",
        "Key Person Insurance",
        "Cyber Insurance",
        "Professional Liability Insurance",
        "Directors and Officers Insurance",
        "Workers' Compensation Insurance",
        "Marine Insurance",
        "Product Liability Insurance",
        "Environmental Insurance",
        "Political Risk Insurance",
        "Credit Insurance"
    ];
    const insuranceCompanies = [
        "Life Insurance Corporation of India (LIC)",
        "HDFC Life Insurance",
        "ICICI Prudential Life Insurance",
        "SBI Life Insurance",
        "Max Life Insurance",
        "Star Health and Allied Insurance",
        "Care Health Insurance",
        "HDFC ERGO Health Insurance",
        "ICICI Lombard General Insurance",
        "Bajaj Allianz General Insurance",
        "New India Assurance",
        "Oriental Insurance Company",
        "United India Insurance",
        "Reliance General Insurance",
        "Bharti AXA General Insurance",
        "Aegon Life Insurance",
        "Kotak Mahindra General Insurance",
        "Future Generali India Insurance",
        "Aditya Birla Capital"
    ];
const UpdateDetails = (props) => {
  const [isopen, setIsOpen] = useState(false);
  const [startDate,setStartDate] =useState();
  const [endDate,setEndDate] =useState();
  const [updatePolicy] = useUpdatePolicyMutation();
  const handleIsClose = () => setIsOpen(false);
  dayjs.extend(utc);
  dayjs.extend(timezone);
    const [policyData,setpolicyData] =useState({
        policyId:'',
        policyType:'',
        companyName:'',
        policyNumber:'',
        premiumAmount:'',
        startDate:'',
        endDate:'',
        natureOfFrequency:'',
        agentName:'',
    });
    useEffect(() => {
        if (props.policyData) {
            setpolicyData({
            policyId:props.policyData.id || '',
            policyType: props.policyData.policyType || '',
            companyName: props.policyData.companyName || '',
            policyNumber: props.policyData.policyNumber || '',
            premiumAmount: props.policyData.amount || 0,
            startDate: props.policyData.startDate || '',
            endDate: props.policyData.endDate || '',
            natureOfFrequency:props.policyData.natureOfFrequency || '',
            agentName: props.policyData.agentName || ''
        });
        console.log(props.policyData)
        setStartDate(dayjs(props.policyData.startDate));
        setEndDate(dayjs(props.policyData.endDate));
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
        renewalDate:policyData.endDate,
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
        if (policyData.premiumAmount) formData.append("premiumAmount", policyData.premiumAmount);
        if (policyData.startDate) formData.append("startDate", policyData.startDate);
        if (policyData.endDate) formData.append("endDate", policyData.endDate);
        if (policyData.natureOfFrequency) formData.append("natureOfFrequency", policyData.natureOfFrequency);
    
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
                onSubmit={submitHandler}
            >
                <Grid item xs={12} md={4}>
                    <FormControl variant="standard" fullWidth required>
                        <InputLabel shrink htmlFor="policy-Number">
                            Policy Number
                        </InputLabel>
                        <TextField
                            sx={{ paddingTop: '20px' }}
                            size="small"
                            id="policy-Number"
                            name="policyNumber"
                            placeholder="Enter Policy No."
                            value={policyData.policyNumber}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4} >
                    <FormControl variant="standard" fullWidth required>
                    <InputLabel shrink htmlFor="typeofpolicy">
                        Type of Policy
                    </InputLabel>
                    <Select
                            id = 'typeofpolicy'
                            name='policyName'
                            input={<OutlinedInput />}
                            value={policyData.policyType}
                            label="Type of Policy"
                            onChange={handleInputChange}
                            size="small"
                            displayEmpty
                            sx={{ marginTop: '20px' }}
                        >
                            <MenuItem value='null' disabled >
                                <Typography color={'#778899b8'}>Select policy</Typography> 
                            </MenuItem>
                                {
                                insurancePolicies.map((type,index)=>(<MenuItem value={type} key={index}>{type}</MenuItem>))
                                }
                                    
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                    <FormControl variant="standard" fullWidth required>
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
                            <MenuItem value='null' disabled >
                                <Typography color={'#778899b8'}>Select company</Typography> 
                            </MenuItem>
                                {
                                insuranceCompanies.map((company,index)=>(<MenuItem value={company} key={index}>{company}</MenuItem>))
                                }
                                    
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                    <FormControl variant="standard" fullWidth required>
                        <InputLabel shrink htmlFor="premium-amount">
                            Premium Amount
                        </InputLabel>
                        <TextField
                            sx={{ paddingTop: '20px' }}
                            size="small"
                            id="premium-amount"
                            name="premiumAmount"
                            placeholder="Enter your amount"
                            value={policyData.premiumAmount}
                            onChange={handleInputChange}
                            
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                    <FormControl variant="standard" fullWidth required>
                        <InputLabel shrink htmlFor="start-date">
                            Start Date
                        </InputLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                            disableFuture
                            sx={{ paddingTop: '20px' }}
                            slotProps={{ textField: { size: 'small' } }}
                            value={startDate}
                            onChange={(newValue) => {
                                setStartDate(newValue);
                                setpolicyData((prevData) => {
                                    const newData = { ...prevData, ["startDate"]: dayjs(newValue, "YYYY-MM-DD+h:mm").tz("Asia/Kolkata").format('MM/DD/YYYY') };
                                    return newData;
                                });
                            }}
                            />
                        </LocalizationProvider>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                    <FormControl variant="standard" fullWidth required>
                        <InputLabel shrink htmlFor="renewal-date">
                            Expiry Date
                        </InputLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                disablePast
                                sx={{ paddingTop: '20px' }}
                                slotProps={{ textField: { size: 'small' } }}
                                value={endDate}
                                onChange={(newValue) => {
                                    setEndDate(newValue);
                                    setpolicyData((prevData) => {
                                        const newData = { ...prevData, ["endDate"]: dayjs(newValue, "YYYY-MM-DD+h:mm").tz("Asia/Kolkata").format('MM/DD/YYYY') };
                                        return newData;
                                    });
                                }}
                            />
                        </LocalizationProvider>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4} >
                    <FormControl variant="standard" fullWidth required>
                        <InputLabel shrink htmlFor="natureOfFrequency">
                            Nature of Frequency
                        </InputLabel>
                        <Select
                            id = 'natureOfFrequency'
                            name='natureOfFrequency'
                            input={<OutlinedInput />}
                            value={policyData.natureOfFrequency}
                            label="Nature Of Frequency"
                            onChange={handleInputChange}
                            size="small"
                            displayEmpty
                            required
                            sx={{ marginTop: '20px' }}
                        >
                            <MenuItem value='null' disabled >
                                <Typography color={'#778899b8'}>Select frequency</Typography> 
                            </MenuItem>
                                {
                                frequency.map((agent,index)=>(<MenuItem value={agent} key={index}>{agent}</MenuItem>))
                                }
                                    
                        </Select>
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
      {/* <ShowDetails open={isopen} handleClick={handleIsClose} data={showData}/> */}
    </div>
  );
}
export default  UpdateDetails