import React, { useEffect, useState } from 'react'
import familyImg from "../../assests/LandingPageImage/family.avif"
import policywallet from "../../assests/LandingPageImage/policywallet.avif"
import reminders from "../../assests/LandingPageImage/reminders.avif"
import sharewithfamily from "../../assests/LandingPageImage/sharewithfamily.avif"
import prosandcons from "../../assests/LandingPageImage/prosandcons.avif"
import claimAssistance from "../../assests/LandingPageImage/claimAssistance.avif"
import motorInsurance from "../../assests/LandingPageImage/motorInsurance.avif"
import lifeInsurance from "../../assests/LandingPageImage/lifeInsurance.avif"
import healthinsurance from "../../assests/LandingPageImage/healthinsurance.avif"

import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, useMediaQuery } from '@mui/material'
import FAQAccordion from './FAQAccordion'
import { Link } from 'react-router-dom'
const ProductHero = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [mobileOpen, setMobileOpen] = useState(isMobile);
  useEffect(()=>{
    setMobileOpen(isMobile)
  },[isMobile])
  return (
    <Box sx={{ flexGrow: 1,width:'100%' }}>
      <Grid container spacing={3} margin={0} width={'100%'}>
        <Grid container item spacing={1} className='productHeroContainer1'>
          <Grid item xs={12}>
            <Typography pl={5} pr={5} textAlign={"center"} variant={mobileOpen ? "h4" : "h2"} m={1} fontFamily={'Lato'} fontWeight={'700'} color={"primary"}>Solving Insurance for 1 Billion Indians</Typography>
          </Grid>
          <Grid item xs={12} >
              <img src={familyImg} alt="family" width={"100%"} style={{padding:"20px",borderRadius:"30px"}}/>
          </Grid>
          <Grid item xs={12} container display={"flex"} direction={"column"} alignItems={"center"} pb={5}>
            <Typography textAlign={"center"} variant={"h6"} m={1} fontFamily={'Lato'} fontWeight={'700'} color={"primary"}>A platform for all your Insurance needs.</Typography>
            <Button sx={{width:"180px"}} component={Link} to="/signup" variant="contained" color="primary">Get Started</Button>
          </Grid>
        </Grid>
        <Grid container item spacing={3} bgcolor={"#F7F7F7"} className='productHeroContainer1'>
          <Grid item xs={12} sm={6} md={6}>
              <img src={policywallet} className="featuresImg" alt="family" height={"100%"} width={"100%"} style={{padding:"20px",borderRadius:"30px"}}/>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography pl={5} pr={5}  variant={"h5"} m={1} fontFamily={'Lato'} fontWeight={'700'} color={"primary"}>Policy Wallet</Typography>
            <Typography pl={5} pr={5}  variant={"h6"} m={1} fontFamily={'Lato'} fontWeight={'700'} color={"gray"}>Platform very all your policy are stored, Safe and Secure. All your Insurance at one place.</Typography>
          </Grid>

          {mobileOpen && <Grid item xs={12} sm={6} md={6}>
              <img src={reminders} className="featuresImg" alt="family" height={"100%"} width={"100%"} style={{padding:"20px",borderRadius:"30px"}}/>
          </Grid>}
          <Grid item xs={12} sm={6} md={6}>
            <Typography pl={5} pr={5}  variant={"h5"} m={1} fontFamily={'Lato'} fontWeight={'700'} color={"primary"}>Reminders of Policy</Typography>
            <Typography pl={5} pr={5}  variant={"h6"} m={1} fontFamily={'Lato'} fontWeight={'700'} color={"gray"}>Get frequent reminders on all your policies via Mail and Whatsapp.</Typography>
          </Grid>
          {!mobileOpen && <Grid item xs={12} sm={6} md={6}>
              <img src={reminders} className="featuresImg" alt="family" height={"100%"} width={"100%"} style={{padding:"20px",borderRadius:"30px"}}/>
          </Grid>}
        </Grid> 
        <Grid container item spacing={3} className='productHeroContainer1'>
          <Grid item xs={12} sm={6} md={6}>
              <img src={sharewithfamily} className="featuresImg" alt="family" height={"100%"} width={"100%"} style={{padding:"20px",borderRadius:"30px"}}/>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography pl={5} pr={5}  variant={"h5"} m={1} fontFamily={'Lato'} fontWeight={'700'} color={"primary"}>Share  with Family & Friends</Typography>
            <Typography pl={5} pr={5}  variant={"h6"} m={1} fontFamily={'Lato'} fontWeight={'700'} color={"gray"}>Share your policy with your Friends and Family through Platform so it can be used in need.</Typography>
          </Grid>

          {mobileOpen && <Grid item xs={12} sm={6} md={6}>
              <img src={prosandcons} className="featuresImg" alt="family" height={"100%"} width={"100%"} style={{padding:"20px",borderRadius:"30px"}}/>
          </Grid>}
          <Grid item xs={12} sm={6} md={6}>
            <Typography pl={5} pr={5}  variant={"h5"} m={1} fontFamily={'Lato'} fontWeight={'700'} color={"primary"}>Pros and Cons of Policy</Typography>
            <Typography pl={5} pr={5}  variant={"h6"} m={1} fontFamily={'Lato'} fontWeight={'700'} color={"gray"}>People know about What is Covered in your Policy, but do you know what is not covered in your Policy?</Typography>
          </Grid>
          {!mobileOpen && <Grid item xs={12} sm={6} md={6}>
              <img src={prosandcons} className="featuresImg" alt="family" height={"100%"} width={"100%"} style={{padding:"20px",borderRadius:"30px"}}/>
          </Grid>}
        </Grid>
        <Grid container item spacing={3} >
          <Grid item xs={12} >
          <Box 
              sx={{
                position: 'relative',
                width: '100%',
                height: '400px',
                backgroundImage: `url(${claimAssistance})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <Box 
                sx={{
                  position: 'absolute',
                  top: '30%',
                  left: '10%',
                  color: 'white',
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                  Claim Assistance
                </Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  With you on Every step of the Way.
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  sx={{ mt: 3 }}
                  onClick={() => alert('Appointment Booked')}
                >
                  Book an Appointment
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container item spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{margin:"0 20px"}}>
              <CardMedia
                component="img"
                alt="talking person"
                height="500"
                image={motorInsurance}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Motor Insurance Complaint
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant='contained' size="small">Book an Appointment</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{margin:"0 20px"}}>
              <CardMedia
                component="img"
                alt="talking person"
                height="500"
                image={lifeInsurance}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Life Insurance Complaint
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant='contained' size="small">Book an Appointment</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{margin:"0 20px"}}>
              <CardMedia
                component="img"
                alt="talking person"
                height="500"
                image={healthinsurance}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Health Insurance Complaint
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant='contained' size="small">Book an Appointment</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Grid container item spacing={1} >
          <Grid item xs={12}>
            <Typography pl={5} pr={5} textAlign={"center"} variant={mobileOpen ? "h4" : "h2"} m={1} fontFamily={'Lato'} fontWeight={'700'} color={"primary"}>100+</Typography>
            <Typography textAlign={"center"} variant={mobileOpen ? "h6" : "h4"} m={1} fontFamily={'Lato'} fontWeight={'700'} >Complaints Resolved</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography pl={5} pr={5} textAlign={"center"} variant={mobileOpen ? "h4" : "h2"} m={1} fontFamily={'Lato'} fontWeight={'700'} color={"primary"}>1.5 Cr+</Typography>
            <Typography textAlign={"center"} variant={mobileOpen ? "h6" : "h4"} m={1} fontFamily={'Lato'} fontWeight={'700'} >Amount Recovered</Typography>
          </Grid> 
        </Grid>
        <Grid container item spacing={1} pb={5}>
          <Grid item xs={12}>
            <Typography pl={5} pr={5} textAlign={"center"} variant={mobileOpen ? "h6" : "h4"} m={1} fontFamily={'Lato'} fontWeight={'700'} color={"primary"}>FAQ</Typography>
            <FAQAccordion/> 
          </Grid>
        </Grid>
        <Grid container item spacing={1} bgcolor={"#F7F7F7"} pb={5}>
          <Grid item xs={12} container display={"flex"} direction={"column"} alignItems={"center"}>
            <Typography textAlign={"center"} variant={"h6"} m={1} fontFamily={'Lato'} fontWeight={'700'} color={"primary"}>A platform for all your Insurance needs.</Typography>
            <Button sx={{width:"180px"}}  variant="contained" color="primary">Get Started</Button>
          </Grid>
        </Grid>
        <Grid container item spacing={1} bgcolor={"#0854A1"}>
          <Grid item xs={12} md={9}>
            <Typography variant={mobileOpen ? "body" : "h6"} m={1} fontFamily={'Lato'} fontWeight={'700'} color={"white"}>© B.N Cover Services Private Limited</Typography>
            <Link to={'/termsAndConditions'}><Typography variant={mobileOpen ? "body" : "h6"}  m={1} fontFamily={'Lato'} fontWeight={'700'} color={"white"}>Terms And Conditions</Typography></Link>
            <Link to={'/privacyPolicy'}><Typography variant={mobileOpen ? "body" : "h6"}  m={1} fontFamily={'Lato'} fontWeight={'700'} color={"white"}>Privacy Policy</Typography></Link>
            <Link to={'/aboutUs'}><Typography variant={mobileOpen ? "body" : "h6"}  m={1} fontFamily={'Lato'} fontWeight={'700'} color={"white"}>About Us</Typography></Link>
          </Grid>
          <Grid item xs={12} md={3} display={'flex'}>
            <Typography variant={mobileOpen ? "body" : "h6"}  m={1} fontFamily={'Lato'} fontWeight={'700'} color={"white"}>YouTube</Typography>
            <Typography variant={mobileOpen ? "body" : "h6"}  m={1} fontFamily={'Lato'} fontWeight={'700'} color={"white"}>Instagram</Typography>
            <Typography variant={mobileOpen ? "body" : "h6"}  m={1} fontFamily={'Lato'} fontWeight={'700'} color={"white"}>FaceBook</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProductHero