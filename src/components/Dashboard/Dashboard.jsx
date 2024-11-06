import { Box, Divider, Grid, Typography,Stack,CardContent,Card } from '@mui/material'
import React, { useEffect } from 'react'
import PolicyIcon from '@mui/icons-material/Policy';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import TableDashboard from './TableDashboard';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, useUserDetailQuery } from '../../redux/api/userAPI';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import { userExist, userNotExist } from '../../redux/reducer/userReducer';
import { usePoliciesByRangeQuery } from '../../redux/api/policyAPI';
const Dashboard = () => {
    const [range, setRange] = React.useState(7);
    const dispatch = useDispatch();
    const handleChange = (event) => {
        setRange(event.target.value);
    };
    const {user} = useSelector((state) => state.userReducer );
    const {data,error,isError}=usePoliciesByRangeQuery({id:user?._id,range});
   const {policies} = data || [];
    useEffect(()=>{
        onAuthStateChanged(auth,async (user) =>{
        if(user){
            
            const data = await getUser(user.uid);
            dispatch(userExist(data.user))
            
        }else{
            dispatch(userNotExist(null))
        }
        })
    },[dispatch])
  return (
    <Grid container spacing={2} p={2}>
        <Grid item xs={12} md={12}>
            <Typography variant="subtitle1" component="subtitle1" fontFamily={'Lato'} color={'rgba(0,0,0,0.87)'} fontWeight={'semibold'} fontSize={'20px'}>
                Welcome Back, {user.name}
            </Typography>
            <Divider/>
        </Grid>
        <Grid item xs={12} md={4}>
            <Link to={'/policy'} style={{textDecoration:'none'}} >
            <Card variant="outlined">
                    <CardContent className='datatiles'  style={{padding:0}}>
                    <Grid container >
                        <Grid item xs={4} md={4} sx={{backgroundColor:'#F1F5FE',display:'flex'}}>
                                <PolicyIcon color='primary' sx={{margin:'auto',fontSize:60}}/>
                        </Grid>
                        <Grid item xs={8} md={8}>
                            <Stack direction={'column'}  alignItems={'center'} m={'auto'} p={2}>
                                <Typography variant="subtitle1" component="subtitle1" fontFamily={'Inter'} fontWeight={'500'} >Total Policy</Typography>
                                <Typography variant="h4" component="h4" align='center' fontFamily={'Inter'} fontWeight={'500'}>{user?.policies.length}</Typography>
                            </Stack> 
                        </Grid>    
                    </Grid>
                    </CardContent>
                </Card>
            </Link>
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
                                <Typography variant="h4" component="h4" align='center' fontFamily={'Inter'} fontWeight={'500'}>{user?.familyMembers.length}</Typography>
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
                        <Grid item xs={4} md={4} sx={{backgroundColor:'rgba(255,127,28,0.12)',display:'flex'}}>
                        <GroupsIcon  sx={{margin:'auto',fontSize:60,color:'#FF7F1C'}}/>
                        </Grid>
                        <Grid item xs={8} md={8}>
                            <Stack direction={'column'}  alignItems={'center'} m={'auto'} p={2}>
                                <Typography variant="subtitle1" component="subtitle1" fontFamily={'Inter'} fontWeight={'500'} >Total Agents</Typography>
                                <Typography variant="h4" component="h4" align='center' fontFamily={'Inter'} fontWeight={'500'}>{user?.agents.length}</Typography>
                            </Stack> 
                        </Grid>    
                    </Grid>
                    </CardContent>
                </Card>
        </Grid>
        <Grid item xs={12} md={9}>        
            <Card variant="outlined">
                    <CardContent className='datatiles'  style={{padding:0}}>
                    <Grid container >
                        <Grid item xs={12} md={12} width={'100px'}>
                            <Box >
                            <Typography variant="h6" m={1} fontFamily={'Lato'} fontWeight={'700'}>Recent Policy</Typography>
                            <Divider sx={{marginTop:'10px'}}/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12}>
                        <TableDashboard/>
                        </Grid>    
                    </Grid>
                    </CardContent>
                </Card>
        </Grid>
        <Grid item xs={12} md={3}>        
            <Card variant="outlined">
                <CardContent className='datatiles'  style={{padding:'0'}}>
                    <Grid container >
                        <Grid item xs={12} md={12} width={'100px'}>
                            <Box >
                            <Typography variant="h6" m={1} fontFamily={'Lato'} fontWeight={'700'}>Policy Schedule</Typography>
                            <Divider sx={{marginTop:'10px'}}/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12} >
                            <FormControl variant="standard" sx={{ m: 1, width:'96%'}}>
                                <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={range}
                                onChange={handleChange}
                                sx={{color:'blue'}}
                                >
                                <MenuItem value={7}>Last 7 Days</MenuItem>
                                <MenuItem value={15}>Last 15 Days</MenuItem>
                                <MenuItem value={30}>Last 1 Months</MenuItem>
                                <MenuItem value={90}>Last 3 Months</MenuItem>
                                {/* <MenuItem value={180}>Last 6 Months</MenuItem> */}
                                </Select>
                            </FormControl>
                        </Grid> 
                        <Grid item xs={12} md={12} sx={{maxHeight: "340px",overflow: "scroll",scrollbarWidth: "none"}}>
                            {policies?.map((policy,index)=>(
                                <Card variant="outlined" sx={{margin:'10px'}} key={index}>
                                <CardContent className='datatiles'  style={{padding:0}}>
                                    <Grid container >
                                        <Grid item xs={0.3} md={0.3} sx={{backgroundColor:'#FF9900',display:'flex'}}></Grid>
                                        <Grid item xs={11.7} md={11.7}>
                                            <Stack direction={'column'}  p={2}>
                                                <Typography variant="subtitle2" component="subtitle1" fontFamily={'Inter'} ><span>Policy Number :</span><span><b>{policy.policyNumber}</b></span></Typography>
                                                <Typography variant="subtitle2" component="subtitle1" fontFamily={'Inter'} ><span>Name :</span><span><b>{user.name}</b></span></Typography>
                                                <Typography variant="subtitle2" component="subtitle1" fontFamily={'Inter'} ><span>Premium :</span><span><b> Rs. {policy.premiumAmount}</b></span></Typography>
                                            </Stack> 
                                        </Grid>    
                                    </Grid>
                                </CardContent>
                                </Card>
                            ))}
                        </Grid>   
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
  )
}

export default Dashboard
