// src/Calendar.js
import React, { useState } from 'react';
import { Grid, Typography, IconButton, Box, Select, MenuItem, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import weekOfYear from 'dayjs/plugin/weekOfYear';

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

  const handleMonthChange = (event) => {
    setCurrentMonth(currentMonth.month(event.target.value));
  };

  const handleYearChange = (event) => {
    setCurrentMonth(currentMonth.year(event.target.value));
  };

  const renderHeader = () => {
    const dateFormat = 'MMMM YYYY';
    const months = Array.from({ length: 12 }, (_, index) => dayjs().month(index).format('MMMM'));
    const years = Array.from({ length: 10 }, (_, index) => dayjs().year(dayjs().year() + index).year());

    return (
      <Grid container alignItems="center" justifyContent="space-between" padding={2}>
        <Grid item>
          <IconButton onClick={prevMonth}>
            <ChevronLeft />
          </IconButton>
        </Grid>
        <Grid item>
          <Select value={currentMonth.month()} onChange={handleMonthChange}>
            {months.map((month, index) => (
              <MenuItem key={index} value={index}>
                {month}
              </MenuItem>
            ))}
          </Select>
          <Select value={currentMonth.year()} onChange={handleYearChange}>
            {years.map((year, index) => (
              <MenuItem key={index} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
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
    const dateFormat = 'dddd';
    const days = [];
    let startDate = currentMonth.startOf('isoWeek');

    for (let i = 0; i < 7; i++) {
      days.push(
        <Grid item xs key={i} textAlign="center">
          <Typography variant="body1">{startDate.add(i, 'day').format(dateFormat)}</Typography>
        </Grid>
      );
    }

    return <Grid container>{days}</Grid>;
  };

  const renderCells = () => {
    const monthStart = currentMonth.startOf('month');
    const monthEnd = currentMonth.endOf('month');
    const startDate = monthStart.startOf('isoWeek');
    const endDate = monthEnd.endOf('isoWeek');

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
              height: '100px',
              backgroundColor: !day.isSame(monthStart, 'month') ? '#f9f9f9' : '#fff',
              color: !day.isSame(monthStart, 'month') ? '#d0d0d0' : '#000',
              position: 'relative',
            }}
          >
            <Box padding={1} display="flex" justifyContent="space-between">
              <Typography variant="body2">{day.format(dateFormat)}</Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="flex-start" padding={1}>
              {events
                .filter(event => event.date.isSame(cloneDay, 'day'))
                .map((event, index) => (
                  <Box
                    key={index}
                    width={8}
                    height={8}
                    borderRadius="50%"
                    marginY={0.5}
                    bgcolor={event.color}
                    onClick={() => setSelectedEvent(event)}
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
    <Box>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      <Dialog open={!!selectedEvent} onClose={() => setSelectedEvent(null)}>
        <DialogTitle>Event Details</DialogTitle>
        <DialogContent>
          {selectedEvent && (
            <>
              <Typography>Date: {selectedEvent.date.format('MMMM D, YYYY')}</Typography>
              <Typography>Color: {selectedEvent.color}</Typography>
              <Typography>Description: {selectedEvent.description}</Typography>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Calendar;
