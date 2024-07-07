import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, MenuItem, OutlinedInput, Select } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import FormControl from '@mui/material/FormControl';
import dayjs from 'dayjs';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '5px',
};

const Test = (props) => {
    const [appointmentDate, setAppointmentDate] = useState(dayjs()); // Initialize with current date/time
    const [policyData, setPolicyData] = useState({
        purposeOfAppointment: '',
        dateandtime: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPolicyData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const purpose = [
        'Purchase of Health Insurance',
        'Purchase of Term Insurance',
        'Purchase of Motor Insurance',
        'Renewal of your policies',
        'Create an Inspection check on all your policies',
        'Talk about Claim Assistance',
        'Guidance regarding claims process',
        'Education about Insurance',
        'Others',
    ];

    const eightAM = dayjs().set('hour', 8).set('minute', 0).set('second', 0);
    const tenPM = dayjs().set('hour', 22).set('minute', 0).set('second', 0);

    return (
        <div>
            <Modal open={true}>
                <Box sx={style} width={[300, 700]}>
                    <Box position="static" sx={{ width: '100%', height: '50px', backgroundColor: '#3361E1', display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="subtitle" color={'white'} fontFamily={'Lato'} fontWeight={'semibold'} fontSize={16} alignSelf={'center'} >
                            Book An Appointment
                        </Typography>
                    </Box>
                    <Box>
                        <Grid container spacing={2} p={4} >
                            <Grid item xs={12} md={6}>
                                <FormControl variant="standard" fullWidth required>
                                    <InputLabel shrink htmlFor="agentName">
                                        Purpose of Appointment
                                    </InputLabel>
                                    <Select
                                        id='purposeOfAppointment'
                                        name='purposeOfAppointment'
                                        input={<OutlinedInput />}
                                        value={policyData.purposeOfAppointment}
                                        label="Purpose of Appointment"
                                        onChange={handleInputChange}
                                        size="small"
                                        displayEmpty
                                        sx={{ marginTop: '20px' }}
                                    >
                                        <MenuItem value='' disabled >
                                            <Typography color={'#778899b8'}>Select Purpose</Typography>
                                        </MenuItem>
                                        {
                                            purpose.map((agent, index) => (<MenuItem value={agent} key={index}>{agent}</MenuItem>))
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
                                            maxTime={tenPM.toDate()} // Convert dayjs object to Date
                                            minTime={eightAM.toDate()} // Convert dayjs object to Date
                                            sx={{ paddingTop: '20px' }}
                                            slotProps={{ textField: { size: 'small' } }}
                                            value={appointmentDate.toDate()} // Convert dayjs object to Date
                                            onChange={(newValue) => {
                                                setAppointmentDate(dayjs(newValue)); // Store as dayjs object
                                                setPolicyData((prevData) => ({
                                                    ...prevData,
                                                    ["dateandtime"]: dayjs(newValue).format('DD/MM/YYYY HH:mm'),
                                                }));
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
                            <Button variant="contained" fullWidth onClick={props.handleClose} type='submit'>Submit</Button>
                        </Grid>
                        <Grid item xs={1} md={2} />
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}

export default Test;
