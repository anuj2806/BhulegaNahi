import  React, {useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Calendar from './Calendar';
import YearlyPremium from './YearlyPremium';
import TotalYearlyPremium from './TotalYearlyPremium';
import dayjs from 'dayjs';
import { Grid,MenuItem,Select,Typography} from '@mui/material';
const PolicyCalendar=()=> {
  const [value, setValue] = useState('1');
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleMonthChange = (event) => {
    setCurrentMonth(currentMonth.month(event.target.value));
  };
  const handleYearChange = (event) => {
    setCurrentMonth(currentMonth.year(event.target.value));
  };
  const dateFormat = 'MMMM YYYY';
  const months = Array.from({ length: 12 }, (_, index) => dayjs().month(index).format('MMMM'));
  const years = Array.from({ length: 1 }, (_, index) => dayjs().year(dayjs().year() + index).year());
  const years1 = Array.from({ length: 5 }, (_, index) => dayjs().year(dayjs().year() + index).year());


  return (
    <Box sx={{typography: 'body1' }} pl={3} pr={3}>
      <TabContext value={value}>
        <Box display={'flex'} sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="add policy tabs" indicatorColor='primary'>
            <Tab label="Policy Calendar" value="1" />
            <Tab label="Yearly Premium" value="2" />
            <Tab label="Total Yearly Premium" value="3" />
          </TabList>
          {(value==='1') &&(<Grid container justifyContent="space-between" alignSelf={'flex-end'} alignContent={'center'} flex={'40%'} minHeight={'48px'}>
              <Grid item></Grid>
              <Grid item></Grid>
              <Typography variant="subtitle" color='primary' fontFamily={'Lato'} fontWeight={'medium'} fontSize={16} alignSelf={'center'} >{ dayjs().month(currentMonth.month()).format('MMMM YYYY')}</Typography>
              <Grid item mr={2}>
                <Select value={currentMonth.month()} sx={{width:'200px'}} onChange={handleMonthChange} size='small' >
                  {months.map((month, index) => (
                    <MenuItem key={index} value={index}>
                      {month} {years}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
          )}
          {(value==='2') &&(<Grid container justifyContent="space-between" alignSelf={'flex-end'} alignContent={'center'} flex={'40%'} minHeight={'48px'}>
              <Grid item></Grid>
              <Grid item></Grid>
              <Grid item mr={2}>
                <Select value={currentMonth.year()} sx={{width:'100px'}}   size='small'>
                  {years1.map((year, index) => (
                    <MenuItem key={index} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
          )}
        </Box>
        <TabPanel value="1">{value === '1' && <Calendar currentMonth={currentMonth} />}</TabPanel>
        <TabPanel value="2"><YearlyPremium/></TabPanel>
        <TabPanel value="3"><TotalYearlyPremium/></TabPanel>
      </TabContext>
    </Box>
  );
}
export default PolicyCalendar