import React, { useState } from 'react';
import {Button, Grid} from '@mui/material';
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
    })
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setpolicyData((prevData) => {
          const newData = { ...prevData, [name]: value };
          console.log(newData)
          return newData;
        });
      };

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
                Renewal Date
            </InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                sx={{ paddingTop: '20px' }}
                slotProps={{ textField: { size: 'small' } }}
                />
            </LocalizationProvider>
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
