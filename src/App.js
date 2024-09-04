import React,{useEffect, useState} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SideNav from './components/SideNav';
import Header from './components/Header';
import Dashboard from './components/Dashboard/Dashboard';
import { Grid, useMediaQuery,Drawer,CssBaseline  } from '@mui/material';
import Divider from '@mui/material/Divider';
import '../src/components/SideNav.css'
import Policy from './components/Policy/Policy';
import PolicyDetail from './components/Policy/PolicyDetail';
import UpdateDetails from './components/Policy/UpdateDetails';
import FamilySpace from './components/FamilySpace/FamilySpace';
import MemberPolicy from './components/FamilySpace/MemberPolicy';
import Agents from './components/Agents/Agents';
import AgentPolicy from './components/Agents/AgentPolicy';
import PolicyCalendar from './components/PolicyCalendar/PolicyCalendar';
import ClaimAssistance from './components/ClaimAssistance/ClaimAssistance';
import SOPpage from './components/DownloadSOP/SOPpage';
import DownloadSOP from './components/DownloadSOP/DownloadSOP.jsx';
import Blog from './components/Blog/Blog.jsx';
import BlogDetail from './components/Blog/BlogDetail.jsx';
import LoginPage from './components/LogIn/LoginPage.jsx';
import MyProfile from './components/MyProfile/MyProfile.jsx';
import Appointment from './components/Appointment/Appointment.jsx';
import ProtectedRoute from './components/Admin/ProtectedRoute.js';
import LandingPage from './components/Home/LandingPage.jsx';
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.js';
import { userExist, userNotExist } from './redux/reducer/userReducer.js';
import { getUser } from './redux/api/userAPI.js';
function App() {
  const isMobile = useMediaQuery('(max-width:1200px)');
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const {user,loading} = useSelector((state) => state.userReducer );
  const dispatch = useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth,async (user) =>{
      if(user){
        console.log("user is"+user.uid);
        const data = await getUser(user.uid);
        dispatch(userExist(data.user))
        
      }else{
        dispatch(userNotExist(null))
      }
    })
  },[])
 // console.log("user is"+user);
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/login" element={<ProtectedRoute isAuthenticated={user?false:true} ><LoginPage /></ProtectedRoute>} />
        <Route path="/*" element={<ProtectedRoute isAuthenticated={user?true:false} redirect='/'><AuthenticatedRoutes handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} isMobile={isMobile}/></ProtectedRoute>} />
      </Routes>
      <Toaster/>
    </Router>
  );
}

function AuthenticatedRoutes({handleDrawerToggle,mobileOpen,isMobile}) {
  return (
    <Grid container >
        <Grid item xs={12} md={12} style={{ zIndex:2000 }}>        
          <Header isMobile={isMobile} handleDrawerToggle={handleDrawerToggle}/>
          <Divider />
        </Grid>
       
        {isMobile ? (
          <Grid item xs={2}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          PaperProps={{
            style: {
              position: 'absolute',
              top: '64px',
              height: 'calc(100% - 64px)',
              boxShadow: 'none',
              overflow: 'auto',
            }
          }}
          BackdropProps={{
            sx: {
              top: '64px' // Adjust top position of the Backdrop
            }
          }}
        >
          <SideNav  isMobile={isMobile}  handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
        </Grid>
      ) : (
        <>
        <Grid item xs={1.99}>
          <SideNav isMobile={isMobile}  handleDrawerToggle={handleDrawerToggle} />
        </Grid>
        <Divider orientation="vertical" flexItem />
        </>
      )}
        <Grid item xs={isMobile ? 12 : 10} style={{ overflowY: 'auto', height: 'calc(100vh - 64px)' }}>
            <Routes >
              <Route path="/profile" element={<MyProfile />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/policy/addpolicy" element={<PolicyDetail />} />
              <Route path="/policy/updateDetails" element={<UpdateDetails />} />
              <Route path="/familySpace" element={<FamilySpace />} />
              <Route path="/familySpace/:memberid/:membername" element={<MemberPolicy />} />
              <Route path="/agents" element={<Agents />} />
              <Route path="/agents/:agentid" element={<AgentPolicy />} />
              <Route path="/policyCalender" element={<PolicyCalendar />} />
              <Route path="/claimAssistance" element={<ClaimAssistance />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/downloadSOP" element={<DownloadSOP />} />
              <Route path="/downloadSOP/:policyname" element={<SOPpage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:blogId" element={<BlogDetail />} />
              {/* <Route path="/test" element={<Test />} /> */}
            </Routes>
        </Grid>
    </Grid>
  );
}

export default App;
