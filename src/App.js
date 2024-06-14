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
import Calendar from './components/PolicyCalendar/Calendar';
import PolicyCalendar from './components/PolicyCalendar/PolicyCalendar';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthenticatedRoutes />} />
        <Route path="/*" element={<AuthenticatedRoutes />} />
      </Routes>
    </Router>
  );
}

function AuthenticatedRoutes() {
  return (
    <Grid container >
        <Grid item xs={12} md={12}>        
          <Header/>
          <Divider />
        </Grid>
       
        <Grid item xs={4} md={2}>
          <Stack direction={'row'}>        
            <SideNav />
            <Divider orientation="vertical" flexItem />
          </Stack> 
        </Grid>
        <Grid item xs={8} md={10}> 
            <Routes >
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/policy/addpolicy" element={<PolicyDetail />} />
              <Route path="/policy/updateDetails" element={<UpdateDetails />} />
              <Route path="/familySpace" element={<FamilySpace />} />
              <Route path="/familySpace/:memberid" element={<MemberPolicy />} />
              <Route path="/agents" element={<Agents />} />
              <Route path="/agents/:agentid" element={<AgentPolicy />} />
              <Route path="/policyCalender" element={<PolicyCalendar />} />
            </Routes>
        </Grid>
    </Grid>
  );
}

export default App;
