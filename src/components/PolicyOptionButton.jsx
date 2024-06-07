import React,{useState,useRef } from 'react';
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import InfoIcon from '@mui/icons-material/Info';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Padding } from '@mui/icons-material';
import UpdateDetails from './UpdateDetails';
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

export default function PolicyOptionButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currButton,setCurrButton] = useState()
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const childButtonRef = useRef(null);
  const handleClose = (name) => {
    setCurrButton(name);
    setAnchorEl(null);
    if (childButtonRef.current) {
      childButtonRef.current.click();
    }
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
      >
        <MenuItem onClick={() => handleClose('Update Details')} disableRipple>
          <EditIcon />
          Update Details
        </MenuItem>
        <Divider sx={{margin:'0px !important'}}/>
        <MenuItem onClick={() => handleClose('Add Agent')} disableRipple>
          <PersonAddIcon />
          Add Agent
        </MenuItem>
        <Divider sx={{margin:'0px !important'}}/>
        <MenuItem onClick={() => handleClose('Pros and Cons')} disableRipple>
          <InfoIcon />
          Pros and Cons
        </MenuItem>
        <Divider sx={{margin:'0px !important'}}/>
        <MenuItem onClick={() => handleClose('Advisory')} disableRipple>
          <InfoIcon />
          Advisory
        </MenuItem>
        <Divider  sx={{margin:'0px !important'}}/>
        <MenuItem onClick={() => handleClose('Share')} disableRipple>
          <ShareIcon />
          Share
        </MenuItem>
        <Divider  sx={{margin:'0px !important'}}/>
        <MenuItem onClick={() => handleClose('Download PDF')} disableRipple>
          <FileDownloadOutlinedIcon />
          Download PDF
        </MenuItem>
        <Divider  sx={{margin:'0px !important'}}/>
        <MenuItem onClick={() => handleClose('Remove')} disableRipple>
          <DeleteIcon />
          Remove
        </MenuItem>
      </StyledMenu>
      <UpdateDetails name={currButton} ref={childButtonRef} />
    </div>
  );
}