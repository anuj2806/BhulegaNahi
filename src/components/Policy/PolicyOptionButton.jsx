import React,{useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import InfoIcon from '@mui/icons-material/Info';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import UpdateDetails from './UpdateDetails';
import RemovePolicy from './RemovePolicy';
import AddAgent from './AddAgent';
import ProsCons from './ProsCons';
import Advisory from './Advisory';
import SharePolicy from './SharePolicy';
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(0),
    minWidth: 150,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      padding:'5px 16px',
      fontSize: '13px',
      fontFamily: 'Lato',
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
      
    },
  },
}));

export default function PolicyOptionButton({policyData}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isopen, setIsOpen] = useState(false);
  const [openRemove, setopenRemove] = useState(false);
  const [openAgent, setopenAgent] = useState(false);
  const [openProsCons, setopenProsCons] = useState(false);
  const [openAdvisory, setopenAdvisory] = useState(false);
  const [openShare, setopenShare] = useState(false);
  const handleIsClose = () => setIsOpen(false);
  const handleOpenRemove = () => setopenRemove(false);
  const handleOpenAgent = () => setopenAgent(false);
  const handleOpenProsCons = () => setopenProsCons(false);
  const handleOpenAdvisory = () => setopenAdvisory(false);
  const handleOpenShare = () => setopenShare(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
 
  function downloadPDF(pdf,val) {
      const linkSource = `data:application/pdf;base64,${pdf}`;
      const downloadLink = document.createElement("a");
      const fileName = val+".pdf";
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();}

  const handleClose = (index,name) => {
    setAnchorEl(null);
    if(index===0 ){
      setIsOpen(true);
    }
    else if(index===1 ){
      setopenAgent(true);
    }
    else if(index===2 ){
      setopenProsCons(true);
    }
    else if(index===3 ){
      setopenAdvisory(true);
    }
    else if(index===4 ){
      setopenShare(true);
    }
    else if(index===5 ){
      downloadPDF('SGVsbG8gV29ybGQhCg==','PolicyName')
    }
    else if(index===6 ){
      setopenRemove(true);
    };
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };
 

  return (
    <div>
     <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose1}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => handleClose(0,'Update Details')} disableRipple>
          <EditIcon />
          Update Details
        </MenuItem>
        <Divider sx={{margin:'0px !important'}}/>
        <MenuItem onClick={() => handleClose(1,'Add Agent')} disableRipple>
          <PersonAddIcon />
          Add Agent
        </MenuItem>
        <Divider sx={{margin:'0px !important'}}/>
        <MenuItem onClick={() => handleClose(2,'Pros and Cons')} disableRipple>
          <InfoIcon />
          Pros and Cons
        </MenuItem>
        <Divider sx={{margin:'0px !important'}}/>
        <MenuItem onClick={() => handleClose(3,'Advisory')} disableRipple>
          <InfoIcon />
          Advisory
        </MenuItem>
        <Divider  sx={{margin:'0px !important'}}/>
        <MenuItem onClick={() => handleClose(4,'Share')} disableRipple>
          <ShareIcon />
          Share
        </MenuItem>
        <Divider  sx={{margin:'0px !important'}}/>
        <MenuItem onClick={() => handleClose(5,'Download PDF')} disableRipple>
          <FileDownloadOutlinedIcon />
          Download PDF
        </MenuItem>
        <Divider  sx={{margin:'0px !important'}}/>
        <MenuItem onClick={() => handleClose(6,'Remove')} disableRipple>
          <DeleteIcon />
          Remove
        </MenuItem>
      </StyledMenu>
      <UpdateDetails  open={isopen} handleClose={handleIsClose} policyData={policyData}/>
      <RemovePolicy  open={openRemove} handleClose={handleOpenRemove} policyData={policyData}/>
      <AddAgent  open={openAgent} handleClose={handleOpenAgent}/>
      <ProsCons  open={openProsCons} handleClose={handleOpenProsCons}/>
      <Advisory  open={openAdvisory} handleClose={handleOpenAdvisory}/>
      <SharePolicy  open={openShare} handleClose={handleOpenShare} policyId={policyData.id}/>

    </div>
  );
}