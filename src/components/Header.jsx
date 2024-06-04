import React from 'react'
import {  Stack } from '@mui/material';
import logo from '../assests/logo.png'
import AccountMenu from './AccountMenu';
const Header = () => {
  return (
    
       <Stack direction={'row'} justifyContent={'space-between'} p={'0px 10px'}> 
                <img src={logo} alt="bhuleganahi" width={'194px'}/>
                <AccountMenu/>
        </Stack>
    
  )
}

export default Header
