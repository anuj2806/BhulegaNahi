import React, { useState } from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid,Input,MenuItem,OutlinedInput,Select, Typography} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import VisibilityIcon from '@mui/icons-material/Visibility';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { useNewPolicyMutation } from '../../redux/api/policyAPI';
import { ResponseToast } from '../../utils/features';

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
const AddPolicyForm = ({handleClick}) => {

    const {user} = useSelector((state) => state.userReducer );
    const [filePreview, setfilePreview] = useState("");
    const [photo, setPhoto] = useState();
    const [openPreview, setOpenPreview] = useState(false);
    const [startDate,setStartDate] =useState();
    const [endDate,setEndDate] =useState();
    const [newPolicy] = useNewPolicyMutation();
    const navigate = useNavigate();
    const [policyData,setpolicyData] =useState({
        policyNumber:null,
        policyName:null,
        companyName:null,
        premiumAmount:null,
        startDate:null,
        endDate:null,
        natureOfFrequency:null,
        _id:user._id

    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setpolicyData((prevData) => {
          const newData = { ...prevData, [name]: value };
          return newData;
        });
    };
    
    const handleChangeFileUpload =(e)=>{
        const file = e.target.files?.[0];

        const reader = new FileReader();

        if (file && file.size <= 10485760) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                if (typeof reader.result === "string") {
                    setfilePreview(reader.result);
                    setPhoto(file);
                    toast.success("File uploaded successfully");
                }
            };
            
        }else{
            setfilePreview("");
            setPhoto();
            toast.error("File is too large or not selected")
        }
    }
    const handlePreviewOpen = () => {
        setOpenPreview(true);
    };
    
    const handlePreviewClose = () => {
        setOpenPreview(false);
    };
    const submitHandler = async (e) =>{
        e.preventDefault();
        if(policyData._id && policyData.companyName && policyData.endDate && policyData.natureOfFrequency 
            && policyData.policyName && policyData.policyNumber && policyData.premiumAmount
            && policyData.startDate)
        {  
            const formData = new FormData();
            formData.append("_id", policyData._id);
            formData.append("companyName", policyData.companyName);
            formData.append("endDate", policyData.endDate);
            formData.append("natureOfFrequency", policyData.natureOfFrequency);
            formData.append("policyName", policyData.policyName);
            formData.append("policyNumber", policyData.policyNumber);
            formData.append("premiumAmount", policyData.premiumAmount);
            formData.append("startDate", policyData.startDate);
            photo?formData.append("photo", photo):toast.error("Upload File");;
            const res = await newPolicy(formData);
            ResponseToast(res,navigate,"/policy");
        } 
        else{
            return toast.error("All field are required");
        }
    }
    return (
        <Grid
            component="form"
            container
            noValidate
            spacing={2}
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
                        required
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
                        value={policyData.policyName}
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
                        required
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
                                const newData = { ...prevData, ["startDate"]: dayjs(newValue, "YYYY-MM-DD+h:mm").format('MM/DD/YYYY') };
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
                                    const newData = { ...prevData, ["endDate"]: dayjs(newValue, "YYYY-MM-DD+h:mm").format('MM/DD/YYYY') };
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
            <Grid item xs={12} md={4}>
                <FormControl variant="standard" fullWidth required>
                    <InputLabel shrink htmlFor="policy-upload">
                        Upload Policy
                    </InputLabel>
                    <Input
                        sx={{ paddingTop: '15px' }}
                        size="small"
                        id="policy-upload"
                        type='file'
                        onChange={handleChangeFileUpload}
                    />
                </FormControl>
            </Grid>
            {filePreview && <Grid item xs={12} md={4}>
            <Button variant="contained" onClick={handlePreviewOpen} size="small" startIcon={<VisibilityIcon />} sx={{height:'35px'}}>Preview</Button>
            </Grid>}
            <Grid item xs={12} md={12} />
            <Grid item xs={1} md={2} />
            <Grid item xs={5} md={4}>
                <Button variant="outlined" fullWidth component={Link} to="/policy">Cancel</Button>
            </Grid>
            <Grid item xs={5} md={4}>
                <Button variant="contained" fullWidth type='submit'>Submit </Button>
            </Grid>
            <Grid item xs={1} md={2} />
            <Dialog open={openPreview} onClose={handlePreviewClose} maxWidth="md" fullWidth sx={{zIndex:5000}}>
                <DialogTitle>File Preview</DialogTitle>
                <DialogContent>
                {filePreview && (
                    <Box sx={{ textAlign: 'center' }}>
                    {photo.type.includes('image') ? (
                        <img src={filePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '500px' }} />
                    ) : (
                        <iframe src={filePreview} title="PDF Preview" style={{ width: '100%', height: '500px' }} />
                    )}
                    </Box>
                )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handlePreviewClose} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        </Grid>
        

      );
}

export default AddPolicyForm
