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
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
        <>
            <Box sx={{ width: '100%',height:'82vh', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List component="nav" aria-label="main mailbox folders">
                <Link to={'/dashboard'} style={{textDecoration:'none',color:'black'}} >
                    <ListItemButton
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                        >
                        <ListItemIcon>
                            <HomeIcon color={selectedIndex===0?'primary':''}/>
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </Link>
                <Link to={'/policy'} style={{textDecoration:'none',color:'black'}} >
                <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                    >
                    <ListItemIcon>
                        <PolicyIcon color={selectedIndex=== 1?'primary':''}/>
                    </ListItemIcon>
                    <ListItemText primary="Policy" />
                </ListItemButton>
                </Link>
                <Link to={'/familySpace'} style={{textDecoration:'none',color:'black'}} >
                <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                    >
                    <ListItemIcon>
                        <GroupAddIcon color={selectedIndex=== 2?'primary':''}/>
                    </ListItemIcon>
                    <ListItemText primary="Family Space" />
                </ListItemButton>
                </Link>
                <Link to={'/agents'} style={{textDecoration:'none',color:'black'}} >
                <ListItemButton
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                    >
                    <ListItemIcon>
                        <GroupsIcon color={selectedIndex=== 3?'primary':''}/>
                    </ListItemIcon>
                    <ListItemText primary="Agents" />
                </ListItemButton>
                </Link>
                <Link to={'/policyCalender'} style={{textDecoration:'none',color:'black'}} >
                <ListItemButton
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}
                    >
                    <ListItemIcon>
                        <EventAvailableIcon color={selectedIndex=== 4?'primary':''}/>
                    </ListItemIcon>
                    <ListItemText primary="Policy Calender" />
                </ListItemButton>
                </Link>
                <Link to={'/claimAssistance'} style={{textDecoration:'none',color:'black'}} >
                <ListItemButton
                    selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}
                    >
                    <ListItemIcon>
                        <DescriptionIcon color={selectedIndex===5?'primary':''}/>
                    </ListItemIcon>
                    <ListItemText primary="Claim Assistance" />
                </ListItemButton>
                </Link>
                <Link to={'/downloadSOP'} style={{textDecoration:'none',color:'black'}} >
                <ListItemButton
                    selected={selectedIndex === 6}
                    onClick={(event) => handleListItemClick(event, 6)}
                    >
                    <ListItemIcon>
                        <DownloadIcon color={selectedIndex===6?'primary':''}/>
                    </ListItemIcon>
                    <ListItemText primary="Download SOP's" />
                </ListItemButton>
                </Link>
                <Link to={'/blog'} style={{textDecoration:'none',color:'black'}} >
                <ListItemButton
                    selected={selectedIndex === 7}
                    onClick={(event) => handleListItemClick(event, 7)}
                    >
                    <ListItemIcon>
                        <ArticleIcon color={selectedIndex===7?'primary':''}/>
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