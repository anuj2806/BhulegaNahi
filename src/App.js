import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SideNav from './components/SideNav';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { Grid, Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
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
            </Routes>
        </Grid>
    </Grid>
  );
}

export default App;
