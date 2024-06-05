import React, { useEffect, useState } from 'react'
import {  Grid, Stack,Typography} from '@mui/material';
import logo from '../assests/logo.png'
import AccountMenu from './AccountMenu';
const Header = () => {
    return (
    <Grid container>
        <Grid item xs={4} md={2}>
        <img src={logo} alt="bhuleganahi" width={'194px'}/>
        </Grid>
        <Grid item xs={8} md={10} alignContent={'center'}>
            <Stack direction={'row'} justifyContent={'space-between'} p={'0px 10px'} >
                <Typography variant="h5" component="subtitle1" fontFamily={'Inter'} fontWeight={'700'} >Dahboard</Typography>
                <AccountMenu/>
            </Stack>
        </Grid>
    </Grid>
  )
}

export default Header
