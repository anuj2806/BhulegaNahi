import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Calendar from './Calendar';
import YearlyPremium from './YearlyPremium';
import TotalYearlyPremium from './TotalYearlyPremium';

const PolicyCalendar=()=> {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box sx={{typography: 'body1' }} pl={3} pr={3}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="add policy tabs" indicatorColor='primary'>
            <Tab label="Policy Calendar" value="1" />
            <Tab label="Yearly Premium" value="2" />
            <Tab label="Total Yearly Premium" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><Calendar /></TabPanel>
        <TabPanel value="2"><YearlyPremium/></TabPanel>
        <TabPanel value="3"><TotalYearlyPremium/></TabPanel>
      </TabContext>
    </Box>
  );
}
export default PolicyCalendar