import { Box, Divider, Grid, Typography,Stack,CardContent,Card } from '@mui/material'
import React from 'react'
import PolicyIcon from '@mui/icons-material/Policy';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
const Dashboard = () => {
  return (
    <Grid container spacing={2} p={2}>
        <Grid item xs={12} md={12}>
            <Typography variant='h5'>Welcome Back, Joey Tribbiani</Typography>
            <Divider/>
        </Grid>
        <Grid item xs={12} md={4}>
            <Card variant="outlined">
                    <CardContent className='datatiles'  style={{padding:0}}>
                    <Grid container >
                        <Grid item xs={4} md={4} sx={{backgroundColor:'#F1F5FE',display:'flex'}}>
                                <PolicyIcon color='primary' sx={{margin:'auto',fontSize:60}}/>
                        </Grid>
                        <Grid item xs={8} md={8}>
                            <Stack direction={'column'}  alignItems={'center'} m={'auto'} p={2}>
                                <Typography variant="subtitle1" component="subtitle1" fontFamily={'Inter'} fontWeight={'500'} >Total  Policy</Typography>
                                <Typography variant="h4" component="h4" align='center' fontFamily={'Inter'} fontWeight={'500'}>121</Typography>
                            </Stack> 
                        </Grid>    
                    </Grid>
                    </CardContent>
                </Card>
        </Grid>
        <Grid item xs={12} md={4}>
        <Card variant="outlined">
                    <CardContent className='datatiles'  style={{padding:0}}>
                    <Grid container >
                        <Grid item xs={4} md={4} sx={{backgroundColor:'rgba(190,51,225,0.12)',display:'flex'}}>
                        <GroupAddIcon color='secondary' sx={{margin:'auto',fontSize:60}}/>
                        </Grid>
                        <Grid item xs={8} md={8}>
                            <Stack direction={'column'}  alignItems={'center'} m={'auto'} p={2}>
                                <Typography variant="subtitle1" component="subtitle1" fontFamily={'Inter'} fontWeight={'500'} >Total Family Space</Typography>
                                <Typography variant="h4" component="h4" align='center' fontFamily={'Inter'} fontWeight={'500'}>121</Typography>
                            </Stack> 
                        </Grid>    
                    </Grid>
                    </CardContent>
                </Card>
        </Grid>
        <Grid item xs={12} md={4}>
        <Card variant="outlined">
                    <CardContent className='datatiles'  style={{padding:0}}>
                    <Grid container >
                        <Grid item xs={4} md={4} sx={{backgroundColor:'#F1F5FE',display:'flex'}}>
                        <GroupsIcon color='primary' sx={{margin:'auto',fontSize:60}}/>
                        </Grid>
                        <Grid item xs={8} md={8}>
                            <Stack direction={'column'}  alignItems={'center'} m={'auto'} p={2}>
                                <Typography variant="subtitle1" component="subtitle1" fontFamily={'Inter'} fontWeight={'500'} >Total Agents</Typography>
                                <Typography variant="h4" component="h4" align='center' fontFamily={'Inter'} fontWeight={'500'}>121</Typography>
                            </Stack> 
                        </Grid>    
                    </Grid>
                    </CardContent>
                </Card>
        </Grid>
        <Grid item xs={8} md={8}>
            <Card>

            </Card>
        </Grid>
        <Grid item xs={4} md={4}>
            
        </Grid>
    </Grid>
  )
}

export default Dashboard
