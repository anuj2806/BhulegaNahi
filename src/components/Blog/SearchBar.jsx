import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MicNoneIcon from '@mui/icons-material/MicNone';
export default function SearchBar() {
  return (
    <Paper
    
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',height:'35px' }}
    >
      <InputBase
        size='small'
        
        sx={{ ml: 1, flex: 1, }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      {/* <IconButton type="button" sx={{ p: '10px'}} aria-label="search">
        <MicNoneIcon />
      </IconButton> */}
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton  color="primary" sx={{ p: '10px'}} aria-label="directions">
        <SearchIcon color='primary'/>
      </IconButton>
    </Paper>
  );
}