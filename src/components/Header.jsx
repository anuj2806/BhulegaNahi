import React from 'react';
import { Grid, Stack, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountMenu from './AccountMenu';
import logo from '../assests/logo.png'

const Header = ({isMobile,handleDrawerToggle}) => {
    return (
    <Grid container style={{ height: '64px'}}>
         {isMobile && (
        <Grid item xs={isMobile ? 1 : 0} p={'0px 10px'} alignContent={'center'}>
             <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
        </Grid>
         )}
        <Grid item xs={isMobile ? 10 : 2} p={'0px 10px'}  alignItems={'center'} display={'flex'} justifyContent={isMobile ? 'center' : 'left'}>
        <img src={logo} alt="bhuleganahi" width={'150px'} height={'40px'} />
        </Grid>
        <Grid item xs={isMobile ? 1 : 10} alignContent={'center'}>
            <Stack direction={'row'} justifyContent={'space-between'} p={'0px 10px'} >
                <Typography variant="h5" component="subtitle1" fontFamily={'Inter'} fontWeight={'700'} ></Typography>
                <AccountMenu/>
            </Stack>
        </Grid>
    </Grid>
  )
}

export default Header
