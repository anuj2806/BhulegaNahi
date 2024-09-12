import React from 'react';
import { Container, Grid, Typography, Box, Divider, Button, Stack, IconButton, FormControl, InputLabel, Select, OutlinedInput, MenuItem } from '@mui/material';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const BookAppointment1 = () => {
    const [dateValue, setDateValue] = React.useState(dayjs()); // State to store selected date
    const [selectedTime, setSelectedTime] = React.useState(null); // State to store selected time
    const [purposeOfAppointment, setPurposeOfAppointment] = React.useState(null); // State to store purpose
    const navigate =useNavigate();
    const backtoAppointment = () => (navigate('/appointment'));
    // Time slots for booking in AM/PM format
    const timeSlots = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'];

    // Check if time slot is available based on current time
    const isTimeSlotAvailable = (timeSlot) => {
        const [hours, period] = timeSlot.split(' ');
        let slotHour = parseInt(hours.split(':')[0]);

        if (period === 'PM' && slotHour !== 12) {
            slotHour += 12; // Convert PM to 24-hour format
        }
        if (period === 'AM' && slotHour === 12) {
            slotHour = 0; // Midnight
        }

        const currentHour = dayjs().hour(); // Current hour in 24-hour format
        return dayjs(dateValue).isSame(dayjs(), 'day') ? slotHour > currentHour : true;
    };

    // Handle "BOOK APPOINTMENT" button click
    const handleBookAppointment = () => {
        if (selectedTime && dateValue && purposeOfAppointment) {
            const appointmentDate = dateValue.format('MMMM DD, YYYY');
            const appointmentTime = selectedTime;
            toast.success(`Appointment booked on ${appointmentDate} at ${appointmentTime}`);
        } else {
            toast.error("Please select a date, time and purpose for the appointment.");
        }
    };
    const purpose = ['Purchase of Health Insurance',
        'Purchase of Term Insurance',
        'Purchase of Motor Insurance',
        'Renewal of your policies',
        'Create an Inspection check on all your policies',
        'Talk about Claim Assistance',
        'Guidance regarding claims process',
        'Education about Insurance','Others'];
    return (
        <Container >
            <Grid container spacing={4}>
                {/* Header */}
                <Grid item xs={12} md={12}>
                    <Box >
                        <Stack direction={'row'} alignItems={'center'}>
                            <IconButton onClick={backtoAppointment}><ArrowBackIosIcon /></IconButton>
                            <Typography variant="h6" m={1} fontFamily={'Lato'} fontWeight={'700'}>Appointment</Typography>
                        </Stack>
                        <Divider sx={{marginTop:'5px'}}/>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5.62} ml={4}>
                        <FormControl variant="standard" fullWidth required>
                            <InputLabel shrink htmlFor="agentName">
                                Purpose of Appointment
                            </InputLabel>
                            <Select
                                id = 'purposeOfAppointment'
                                name='purposeOfAppointment'
                                input={<OutlinedInput />}
                                value={purposeOfAppointment}
                                label="Purpose of Appointment"
                                onChange={(e)=>setPurposeOfAppointment(e.target.value)}
                                size="small"
                                displayEmpty
                                sx={{ marginTop: '20px' }}
                            >
                                <MenuItem value='' disabled >
                                    <Typography color={'#778899b8'}>Select Purpose</Typography> 
                                </MenuItem>
                                    {
                                    purpose.map((agent,index)=>(<MenuItem value={agent} key={index}>{agent}</MenuItem>))
                                    }
                                        
                            </Select>
                        </FormControl>
                    </Grid>
                {/* Book Appointment Button */}
                <Grid item xs={4} textAlign="center" mt={2.5}>
                    <Button variant="contained" onClick={handleBookAppointment} type='submit'>BOOK APPOINTMENT</Button>
                </Grid>
                {/* Calendar and Time Slots */}
                <Grid item xs={12} md={5.6} ml={4}>
                    {/* Calendar */}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar
                            disablePast
                            views={['day']}
                            maxDate={dayjs().add(2, 'month')} 
                            value={dateValue}
                            onChange={(newValue) => setDateValue(newValue)}
                            sx={{
                                width: '100%',
                                margin: '0 auto',
                                borderRadius: '8px',
                                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                                '& .MuiPickersDay-root, & .MuiTypography-caption': {
                                    margin: '2px 10px', // Space between date numbers
                                },
                                '& .Mui-selected': {
                                    backgroundColor: '#1976d2', // Custom selected date background color
                                    color: '#fff !important', // Selected date color (white)
                                },
                                '& .MuiPickersDay-dayWithMargin': {
                                    borderRadius: '50%', // Make the date circle
                                }
                            }}
                        />
                    </LocalizationProvider>
                </Grid>

                <Grid item xs={12} md={5.6} mr={4}>
                    {/* Time Slots */}
                    <Grid container spacing={2}>
                        {timeSlots.map((time, index) => (
                            <Grid item xs={4} key={index}>
                                <Button
                                    variant={selectedTime === time ? "contained" : "outlined"}
                                    disabled={!isTimeSlotAvailable(time)}
                                    fullWidth
                                    sx={{
                                        padding: '12px',
                                        fontSize: '1rem',
                                        backgroundColor: selectedTime === time ? '#1976d2' : '#fff',
                                        color: selectedTime === time ? '#fff' : '#000',
                                        border: '1px solid #ccc',
                                        borderRadius: '8px',
                                        boxShadow: selectedTime === time ? '0 4px 12px rgba(25, 118, 210, 0.2)' : 'none',
                                        '&:hover': {
                                            backgroundColor: '#1976d2',
                                            color: '#fff',
                                        },
                                    }}
                                    onClick={() => setSelectedTime(time)}
                                >
                                    {time}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BookAppointment1;
