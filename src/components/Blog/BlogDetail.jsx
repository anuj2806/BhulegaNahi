import { Button, Container, Stack,Grid,Typography,Box,Divider,IconButton,CardActionArea,Card,CardContent,FormControl,InputLabel,TextField } from '@mui/material'
import React,{useState} from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';
import ShareBlog from './ShareBlog';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import dayjs from 'dayjs';
import blogDetail from '../../assests/blogDetail.png'
import blogImg from '../../assests/blog.png'
const BlogDetail = () => {
    const [open, setopen] = useState(false);
    const handleOpen = () => setopen(false);
    const shareClick = () => setopen(true);
    const {blogId} = useParams();
    const navigate = useNavigate();
    const backtoBlog = () => (navigate('/blog')); 
    const data =[1,2,3]
    const link = window.location.href;
  return (
    <Container>
        <Grid container >
            <Grid item xs={12} md={12} width={'100px'}>
                <Box >
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Stack direction={'row'} alignItems={'center'}>
                            <IconButton onClick={backtoBlog}>
                                <ArrowBackIosIcon />
                            </IconButton>
                            <Typography variant="h6"  fontFamily={'Lato'} fontWeight={'700'}>Blog {blogId}</Typography>
                        </Stack>
                        <Button variant="contained" size="small" startIcon={<ShareIcon/>} onClick={shareClick} sx={{height:'30px'}} >Share</Button>
                    </Stack>
                    <Divider sx={{marginTop:'5px'}}/>
                </Box>
            </Grid>
            <Grid item xs={0.1} md={2.35}/>    
            <Grid item xs={11.8} md={7.3}>
                <Typography  fontFamily={'Lato'} color={'rgba(0,0,0,0.87)'} fontWeight={'bold'} fontSize={'30px'}>
                    Finshots Money Resolution #8 - What’s your investing strategy?
                </Typography>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Typography variant="subtitle1" component="subtitle1" fontFamily={'Lato'} color={'rgba(0,0,0,0.40)'}  fontWeight={'regular'} fontSize={'16px'}>
                        {'Chand Kumar'}{'  |  '}{dayjs().format('MMMM DD, YYYY')}                                
                    </Typography>
                    <Typography variant="subtitle1" component="subtitle1" fontFamily={'Lato'} color={'rgba(0,0,0,0.40)'} fontWeight={'regular'} fontSize={'16px'}>
                        6 min read 
                    </Typography>
                 </Stack>
                <Box display={'flex'} justifyContent={'center'} p={1}>
                    <img src={blogDetail} alt="monet tree" />
                </Box>
                <Typography fontFamily={'Lato'} color={'rgba(0,0,0,0.60)'} fontWeight={'regular'} fontSize={'18px'}>
                        6 min readIn India, the country with population of 1.25 billion, it becomes very imperative to look at the grim picture of living conditions of its people, the future prospects of housing sector, especially when 20 million families are looking for roof over their heads and out of these, more than 90% are not in the condition to buy house beyond ₹ 10 Lakhs. 
                </Typography>
                <Box border={'1px solid #e0e0e0'} sx={{ boxShadow: 3 }} p={'4px 40px'} mt={4} mb={4}>
                    <Box position="static" sx={{display:'flex',justifyContent:'center'}}>
                        <Typography variant="subtitle" color={'rgba(0,0,0,0.87)'} fontFamily={'Lato'} fontWeight={'bold'} fontSize={'20px'} alignSelf={'center'} mt={1}  >
                            Subscribe
                        </Typography>
                    </Box>
                    <Box> 
                        <Grid container spacing={2} p={4} >
                            <Grid item xs={12} md={12}>
                                <FormControl variant="standard" fullWidth>
                                <InputLabel shrink htmlFor="email">
                                    Email
                                </InputLabel>
                                <TextField
                                    sx={{ paddingTop: '20px' }}
                                    size="small"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your Email"
                                    // value={policyData.agentName}
                                    // onChange={handleInputChange}
                                />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Button variant="contained" fullWidth >Subscribe</Button>
                            </Grid>  
                        </Grid>
                    </Box>      
                </Box>
            </Grid>    
            <Grid item xs={0.1} md={2.35}/>
            <Grid xs={12} md={12}>
            <Divider/>
                <Grid container spacing={2} mt={2} mb={2}>
                    {data.map((val,index)=>(
                        <Grid item xs={6} md={4} key={index} >
                            <Link to={`/blog/${index}`} style={{textDecoration:'none'}}><Card variant="outlined" >
                                <CardActionArea>
                                    <Box display={'flex'} justifyContent={'center'} p={1}>
                                    <img src={blogImg} alt="monet tree" />
                                    </Box>
                                    <CardContent>
                                    <Typography mt={'-15px'} mb={1} fontFamily={'Lato'} color={'rgba(0,0,0,0.8)'} fontWeight={'semibold'} fontSize={'16px'}>
                                        Finshots Money Resolution #8 - What’s your investing strategy?
                                    </Typography>
                                    <Stack direction={'row'} justifyContent={'space-between'}>
                                        <Typography variant="subtitle1" component="subtitle1" fontFamily={'Lato'} color={'primary'} fontWeight={'regular'} fontSize={'16px'}>
                                            {dayjs().format('MMMM DD, YYYY')}
                                        </Typography>
                                        <Typography variant="subtitle1" component="subtitle1" fontFamily={'Lato'} color={'rgba(0,0,0,0.40)'} fontWeight={'regular'} fontSize={'16px'}>
                                            6 min read 
                                        </Typography>
                                    </Stack>
                                    </CardContent>
                                </CardActionArea>
                            </Card></Link>
                        </Grid>
                        ))}
                </Grid>
            </Grid>
        </Grid>
        <ShareBlog  open={open} handleClose={handleOpen} link={link}/>
    </Container>
  )
}

export default BlogDetail
