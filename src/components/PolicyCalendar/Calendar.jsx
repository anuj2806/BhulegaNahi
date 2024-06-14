// src/Calendar.js
import React, { useState } from 'react';
import { Grid, Typography, IconButton, Box, Select, MenuItem, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import CalendarShowDetail from './CalendarShowDetail';

dayjs.extend(isoWeek);
dayjs.extend(weekOfYear);

const events = [
  { date: dayjs(new Date(2024, 5, 3)), color: 'red', description: 'Event 1' },
  { date: dayjs(new Date(2024, 5, 3)), color: 'orange', description: 'Event 2' },
  { date: dayjs(new Date(2024, 5, 5)), color: 'red', description: 'Event 3' },
  { date: dayjs(new Date(2024, 5, 11)), color: 'red', description: 'Event 4' },
  { date: dayjs(new Date(2024, 5, 11)), color: 'orange', description: 'Event 5' },
  { date: dayjs(new Date(2024, 5, 11)), color: 'green', description: 'Event 6' },
  { date: dayjs(new Date(2024, 5, 15)), color: 'orange', description: 'Event 7' },
  { date: dayjs(new Date(2024, 5, 15)), color: 'green', description: 'Event 8' },
  { date: dayjs(new Date(2024, 5, 19)), color: 'orange', description: 'Event 9' },
  { date: dayjs(new Date(2024, 5, 23)), color: 'green', description: 'Event 10' },
  { date: dayjs(new Date(2024, 5, 30)), color: 'green', description: 'Event 11' },
  { date: dayjs(new Date(2024, 5, 31)), color: 'red', description: 'Event 12' },
  { date: dayjs(new Date(2024, 5, 32)), color: 'red', description: 'Event 13' },
  { date: dayjs(new Date(2024, 5, 32)), color: 'orange', description: 'Event 14' },
];

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isopen, setIsOpen] = useState(false);
  const handleIsClose = () => setIsOpen(false);
  const [policyData,setpolicyData] =useState({
    name:'Piyush Singhal',
    policyNumber:'1231342',
    amount:'876',
})

  const handleMonthChange = (event) => {
    setCurrentMonth(currentMonth.month(event.target.value));
  };

  const handleYearChange = (event) => {
    setCurrentMonth(currentMonth.year(event.target.value));
  };

  const renderHeader = () => {
    const dateFormat = 'MMMM YYYY';
    const months = Array.from({ length: 12 }, (_, index) => dayjs().month(index).format('MMMM'));
    const years = Array.from({ length: 1 }, (_, index) => dayjs().year(dayjs().year() + index).year());

    return (
      <Grid container p={1} justifyContent="space-between" >
        <Grid item>
          <IconButton onClick={prevMonth}>
            <ChevronLeft />
          </IconButton>
        </Grid>
        <Grid item>
          <Select value={currentMonth.month()} sx={{width:'200px'}} onChange={handleMonthChange} size='small' >
            {months.map((month, index) => (
              <MenuItem key={index} value={index}>
                {month} {years}
              </MenuItem>
            ))}
          </Select>
          
          {/* <Select value={currentMonth.year()} onChange={handleYearChange}  size='small'>
            {years.map((year, index) => (
              <MenuItem key={index} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select> */}
        </Grid>
        <Grid item>
          <IconButton onClick={nextMonth}>
            <ChevronRight />
          </IconButton>
        </Grid>
      </Grid>
    );
  };

  const renderDays = () => {
    const day =['MON','TUE','WED','THU','FRI','SAT','SUN']
    const days = [];
    day.forEach ((val,i)=>{
      days.push(
        <Grid item xs key={i} display={'flex'} justifyContent={'center'}  border={'1px solid #e0e0e0'} height={'40px'}>
          <Typography variant="subtitle" color={'#969696'} fontFamily={'Inter'} fontWeight={'medium'} fontSize={16} alignSelf={'center'} >{val}</Typography>
        </Grid>
      );
    })
    return <Grid container>{days}</Grid>;
  };

  const renderCells = () => {
    const monthStart = currentMonth.startOf('month');
    const monthEnd = currentMonth.endOf('month');
    const startDate = monthStart.startOf('isoWeek');
    const endDate = monthEnd.endOf('isoWeek');
    console.log(monthStart,monthEnd,startDate,endDate);
    const dateFormat = 'D';
    const rows = [];

    let days = [];
    let day = startDate;

    while (day.isBefore(endDate)) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        days.push(
          <Grid
            item
            xs
            key={day.toString()}
            style={{
              border: '1px solid #e0e0e0',
              height: '80px',
              width:'80px',
              backgroundColor: !day.isSame(monthStart, 'month') ? '#f9f9f9' : '#fff',
              color: !day.isSame(monthStart, 'month') ? '#d0d0d0' : '#000',
              position:'relative',
            }}
          >
            <Box  height={'100%'} display="flex" justifyContent='center'>
            <Typography variant="subtitle" color={'#969696'} fontFamily={'Inter'} fontWeight={'medium'} fontSize={21} alignSelf={'center'} >{day.format(dateFormat)}</Typography>
            </Box>
            <Box display="flex" justifyContent={'center'} alignItems="center" mt={'-15px'} >
              {events
                .filter(event => event.date.isSame(cloneDay, 'day'))
                .map((event, index) => (
                  <Box
                    key={index}
                    width={10}
                    height={10}
                    borderRadius="50%"
                    marginX={0.5}
                    bgcolor={event.color}
                    onClick={() => {setSelectedEvent(event);
                      setIsOpen(true)
                    }}
                    style={{ cursor: 'pointer' }}
                    
                  />
                ))}
            </Box>
          </Grid>
        );
        day = day.add(1, 'day');
      }
      rows.push(
        <Grid container key={day.toString()}>
          {days}
        </Grid>
      );
      days = [];
    }
    return rows;
  };

  const nextMonth = () => {
    setCurrentMonth(currentMonth.add(1, 'month'));
  };

  const prevMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, 'month'));
  };

  return (
    <>
    <Box mt={'-25px'} >
      {renderHeader()}
      <Box border={'1px solid #e0e0e0'}>
      {renderDays()}
      {renderCells()}
      </Box>
      
      <CalendarShowDetail open={isopen} handleClick={handleIsClose} data={policyData} event={selectedEvent}/>
    </Box>
    </>
  );
};

export default Calendar;
