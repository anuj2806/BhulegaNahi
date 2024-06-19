import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid,Stack,Divider,Box,Container } from '@mui/material';
import dayjs from 'dayjs';
import blogImg from '../../assests/blog.png'
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import SearchBar from './SearchBar';
const Blog =() =>{
    const data = [1,2,3,4,5,6]
    const [page, setPage] = useState(1);
    // console.log(page);
  return (
    <Container>
        <Grid container >
            <Grid item xs={12} md={12} width={'100px'}>
                <Box >
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant="h6" m={1} fontFamily={'Lato'} fontWeight={'700'}>Blog</Typography>
                        <SearchBar/>
                    </Stack>
                    <Divider />
                </Box>
            </Grid>
            <Grid item xs={12} md={12}>
                <Grid container spacing={2} pt={2}>
                <Grid item xs={12} display={'flex'} direction={'column'} alignItems={'center'}>

                    <Typography fontFamily={'Lato'} color={'rgba(0,0,0,0.87)'} fontWeight={'extrabold'} fontSize={'36px'}>
                        Finshots Money
                    </Typography>    
                    <Typography fontFamily={'Lato'} color={'rgba(0,0,0,0.67)'} fontWeight={'regular'} fontSize={'18px'}>
                    3 min articles that will help you kickstart your personal finance journey.
                    </Typography>    
                </Grid>
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
            <Grid item xs={12} p={2}>
                <Stack spacing={2}  alignItems={'center'}>
                    <Pagination count={10} variant="outlined" shape="rounded" onChange={(e, value) => setPage(value)}/>
                </Stack>
            </Grid>    
        </Grid>
    </Container>
  );
}
export default Blog