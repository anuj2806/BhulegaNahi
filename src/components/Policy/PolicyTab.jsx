import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import AddPolicyForm from './AddPolicyForm';
import FileUpload from './FileUpload';

const PolicyTab=()=> {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = ()=> setValue('2');

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="add policy tabs" indicatorColor='primary'>
            <Tab label="Add Policy Form" value="1" />
            <Tab label="Upload Policy" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><AddPolicyForm handleClick={handleClick}/></TabPanel>
        <TabPanel value="2"><FileUpload/></TabPanel>
      </TabContext>
    </Box>
  );
}
export default PolicyTab