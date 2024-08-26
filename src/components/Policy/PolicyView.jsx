
import React,{useState} from 'react'
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
const PolicyView = ({filepath}) => {
    const [filePreview, setFilePreview] = useState(null);
    const [openPreview, setOpenPreview] = useState(false);
    const onClickView = async () => {
        try {
            
            const response = await fetch(`${process.env.REACT_APP_SERVER}/${filepath}`);
            const blob = await response.blob();
            const fileURL = URL.createObjectURL(blob);
            setFilePreview(fileURL);
            setOpenPreview(true);
        } catch (error) {
            console.error('Error fetching the file:', error);
            // Handle error gracefully (e.g., show error message)
        }
    };

    const handlePreviewClose = () => {
        URL.revokeObjectURL(filePreview); // Clean up the object URL
        setFilePreview(null);
        setOpenPreview(false);
    };
  return (
    <div>
        <Button variant="contained" onClick={onClickView} size="small" startIcon={<VisibilityIcon />} sx={{height:'35px'}}>View</Button>
        <Dialog open={openPreview} onClose={handlePreviewClose} maxWidth="md" sx={{top:50}} fullWidth>
            <DialogTitle>File Preview</DialogTitle>
            <DialogContent>
            {filePreview && (
                <Box sx={{ textAlign: 'center' }}>
                {/* {filepath.type.includes('image') ? (
                    <img src={filePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '500px' }} />
                ) : (
                    <iframe src={filePreview} title="PDF Preview" style={{ width: '100%', height: '500px' }} />
                )} */}
                <iframe src={filePreview} title="PDF Preview" style={{ width: '100%', height: '500px' }} />
                </Box>
            )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handlePreviewClose} color="primary">Close</Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}

export default PolicyView