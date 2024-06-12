import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import PolicyIcon from '@mui/icons-material/Policy';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import GroupsIcon from '@mui/icons-material/Groups';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import DescriptionIcon from '@mui/icons-material/Description';
import DownloadIcon from '@mui/icons-material/Download';
import ArticleIcon from '@mui/icons-material/Article';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

export default function SideNav() {
  const [selectedIndex, setSelectedIndex] = React.useState('');
  const pageName = window.location.pathname;
  const currPage = pageName.split('/')[1];
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
    React.useEffect(()=>{
         setSelectedIndex(currPage)
        },[currPage])
  return (
        <>
            <Box sx={{ width: '100%',height:'82vh', minWidth: 225, bgcolor: 'background.paper' }}>
            <List component="nav" aria-label="main mailbox folders">
                <Link to={'/dashboard'} style={{textDecoration:'none',color:'black'}} >
                    <ListItemButton
                        selected={selectedIndex === 'dashboard'}
                        onClick={(event) => handleListItemClick(event, 'dashboard')}
                        >
                        <ListItemIcon>
                            <HomeIcon color={selectedIndex==='dashboard' ?'primary':''}/>
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </Link>
                <Link to={'/policy'} style={{textDecoration:'none',color:'black'}} >
                <ListItemButton
                    selected={selectedIndex === 'policy'}
                    onClick={(event) => handleListItemClick(event, 'policy')}
                    >
                    <ListItemIcon>
                        <PolicyIcon color={selectedIndex=== 'policy' ?'primary':''}/>
                    </ListItemIcon>
                    <ListItemText primary="Policy" />
                </ListItemButton>
                </Link>
                <Link to={'/familySpace'} style={{textDecoration:'none',color:'black'}} >
                <ListItemButton
                    selected={selectedIndex === 'familySpace'}
                    onClick={(event) => handleListItemClick(event, 'familySpace')}
                    >
                    <ListItemIcon>
                        <GroupAddIcon color={selectedIndex=== 'familySpace' ?'primary':''}/>
                    </ListItemIcon>
                    <ListItemText primary="Family Space" />
                </ListItemButton>
                </Link>
                <Link to={'/agents'} style={{textDecoration:'none',color:'black'}} >
                <ListItemButton
                    selected={selectedIndex === 'agents'}
                    onClick={(event) => handleListItemClick(event, 'agents')}
                    >
                    <ListItemIcon>
                        <GroupsIcon color={selectedIndex=== 'agents' ?'primary':''}/>
                    </ListItemIcon>
                    <ListItemText primary="Agents" />
                </ListItemButton>
                </Link>
                <Link to={'/policyCalender'} style={{textDecoration:'none',color:'black'}} >
                <ListItemButton
                    selected={selectedIndex === 'policyCalender'}
                    onClick={(event) => handleListItemClick(event, 'policyCalender')}
                    >
                    <ListItemIcon>
                        <EventAvailableIcon color={selectedIndex=== 'policyCalender' ?'primary':''}/>
                    </ListItemIcon>
                    <ListItemText primary="Policy Calender" />
                </ListItemButton>
                </Link>
                <Link to={'/claimAssistance'} style={{textDecoration:'none',color:'black'}} >
                <ListItemButton
                    selected={selectedIndex === 'claimAssistance'}
                    onClick={(event) => handleListItemClick(event, 'claimAssistance')}
                    >
                    <ListItemIcon>
                        <DescriptionIcon color={selectedIndex==='claimAssistance' ?'primary':''}/>
                    </ListItemIcon>
                    <ListItemText primary="Claim Assistance" />
                </ListItemButton>
                </Link>
                <Link to={'/downloadSOP'} style={{textDecoration:'none',color:'black'}} >
                <ListItemButton
                    selected={selectedIndex === 'downloadSOP'}
                    onClick={(event) => handleListItemClick(event, 'downloadSOP')}
                    >
                    <ListItemIcon>
                        <DownloadIcon color={selectedIndex=== 'downloadSOP' ?'primary':''}/>
                    </ListItemIcon>
                    <ListItemText primary="Download SOP's" />
                </ListItemButton>
                </Link>
                <Link to={'/blog'} style={{textDecoration:'none',color:'black'}} >
                <ListItemButton
                    selected={selectedIndex === 'blog'}
                    onClick={(event) => handleListItemClick(event, 'blog')}
                    >
                    <ListItemIcon>
                        <ArticleIcon color={selectedIndex=== 'blog' ?'primary':''}/>
                    </ListItemIcon>
                    <ListItemText primary="Blog" />
                </ListItemButton>
                </Link>
                
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folder">
                <Link to={'/logout'} style={{textDecoration:'none',color:'black'}} >
                <ListItemButton
                selected={selectedIndex === 8}
                onClick={(event) => handleListItemClick(event, 8)}
                >
                    <ListItemIcon>
                        <LogoutIcon color={selectedIndex===8?'primary':''}/>
                    </ListItemIcon>
                <ListItemText primary="Logout" />
                </ListItemButton>
                </Link>
            </List>
            </Box>
       <Divider orientation="vertical" flexItem />
    </>
  );
}