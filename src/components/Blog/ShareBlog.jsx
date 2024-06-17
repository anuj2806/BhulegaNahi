import React,{useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Grid,IconButton,TextField,FormControl,InputLabel} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius:'5px',
  padding:'16px'
};

const ShareBlog = (props) => {
  const [isopen, setIsOpen] = useState(false);
  const handleIsClose = () => setIsOpen(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsOpen(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(props.link);
    props.handleClose();
    setIsOpen(true);
  };
  return (
    <div>
      <Modal open={props.open}>
        <Box sx={style}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Share this with your social community</Typography>
            <IconButton onClick={props.handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box display="flex" justifyContent="center" my={2}>
            <IconButton color="primary" component="a" href={`https://www.facebook.com/sharer/sharer.php?u=${props.link}`} target="_blank">
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton color="success" component="a" href={`https://api.whatsapp.com/send?text=${props.link}`} target="_blank">
              <WhatsAppIcon fontSize="large" />
            </IconButton>
            <IconButton color="info" component="a" href={`https://twitter.com/intent/tweet?url=${props.link}`} target="_blank">
              <TwitterIcon fontSize="large" />
            </IconButton>
          </Box>
          <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="copylink">
                or copy link
            </InputLabel>
            <TextField
                sx={{ paddingTop: '20px'}}
                size="small"
                fullWidth
                id='copylink'
                variant="outlined"
                value={props.link}
                InputProps={{
                readOnly: true,
                endAdornment: (
                    <IconButton onClick={handleCopy}>
                    <ContentCopyIcon />
                    </IconButton>
                ),
                }}
            />
            </FormControl>
          
        </Box>
      </Modal>
      <Snackbar open={isopen} autoHideDuration={3000} onClose={handleClose}  anchorOrigin={{ vertical:'top', horizontal:'center' }}>
        <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
        >
            Link Copied Successfully.
        </Alert>
        </Snackbar>
    </div>
  );
}
export default  ShareBlog