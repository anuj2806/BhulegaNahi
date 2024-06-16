import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SideNav from './components/SideNav';
import Header from './components/Header';
import Dashboard from './components/Dashboard/Dashboard';
import { Grid, Stack } from '@mui/material';
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
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/*" element={<AuthenticatedRoutes />} />
      </Routes>
    </Router>
  );
}

function AuthenticatedRoutes() {
  return (
    <Grid container >
        <Grid item xs={12} md={12} >        
          <Header/>
          <Divider />
        </Grid>
       
        <Grid item xs={1.5} md={2} >
          <Stack direction={'row'}>        
            <SideNav />
            <Divider orientation="vertical" flexItem />
          </Stack> 
        </Grid>
        <Grid item xs={10.5} md={10}> 
        <div style={{ overflowY: 'auto', height: 'calc(100vh - 64px)'}}>
            <Routes >
              <Route path="/profile" element={<MyProfile />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/policy/addpolicy" element={<PolicyDetail />} />
              <Route path="/policy/updateDetails" element={<UpdateDetails />} />
              <Route path="/familySpace" element={<FamilySpace />} />
              <Route path="/familySpace/:memberid" element={<MemberPolicy />} />
              <Route path="/agents" element={<Agents />} />
              <Route path="/agents/:agentid" element={<AgentPolicy />} />
              <Route path="/policyCalender" element={<PolicyCalendar />} />
              <Route path="/claimAssistance" element={<ClaimAssistance />} />
              <Route path="/downloadSOP" element={<DownloadSOP />} />
              <Route path="/downloadSOP/:policyname" element={<SOPpage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:blogId" element={<BlogDetail />} />
            </Routes>
        </div>
        </Grid>
    </Grid>
  );
}

export default App;
