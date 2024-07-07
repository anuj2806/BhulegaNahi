import React, { useState } from 'react';
import {Button, Grid,MenuItem,OutlinedInput,Select, Typography} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Link } from 'react-router-dom';

const AddPolicyForm = ({handleClick}) => {
    const [policyData,setpolicyData] =useState({
        policyType:'',
        companyName:'',
        amount:'',
        startDate:'',
        endDate:'',
        natureOfFrequency:'',
    })
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setpolicyData((prevData) => {
          const newData = { ...prevData, [name]: value };
          console.log(newData)
          return newData;
        });
      };
    const frequency = ['One time','Monthly','Quarterly','Semi - Annually','Annually','Once in Two Year','Once in Three Year','Others'];
    function handleDatePickerChange(event)
    {
        console.log(event)
    }

    return (
        <Grid
            component="form"
            container
            noValidate
            spacing={2}
        >
        <Grid item xs={12} md={4} >
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
                        frequency.map((agent,index)=>(<MenuItem value={agent} key={index}>{agent}</MenuItem>))
                        }
                            
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
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
                        frequency.map((agent,index)=>(<MenuItem value={agent} key={index}>{agent}</MenuItem>))
                        }
                            
                </Select>
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
                sx={{ paddingTop: '20px' }}
                slotProps={{ textField: { size: 'small' } }}
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
                sx={{ paddingTop: '20px' }}
                slotProps={{ textField: { size: 'small' } }}
                />
            </LocalizationProvider>
            </FormControl>
        </Grid>
        <Grid item xs={12} md={4} >
            <FormControl variant="standard" fullWidth>
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
                    sx={{ marginTop: '20px' }}
                >
                    <MenuItem value='' disabled >
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
                <Button variant="outlined" fullWidth component={Link} to="/policy">Cancel</Button>
            </Grid>
            <Grid item xs={5} md={4}>
                <Button variant="contained" fullWidth onClick={handleClick}>Submit </Button>
            </Grid>
            <Grid item xs={1} md={2} />
        </Grid>

      );
}

export default AddPolicyForm
