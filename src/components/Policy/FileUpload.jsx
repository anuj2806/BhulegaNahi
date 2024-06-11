import React, { useState, useEffect, useCallback,useNavigate } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Button, Typography, IconButton, LinearProgress, Dialog, DialogTitle, DialogContent, DialogActions, Stack, Grid } from '@mui/material';
import { CloudUpload as CloudUploadIcon, Cancel as CancelIcon, Preview as PreviewIcon } from '@mui/icons-material';
import { FiUploadCloud } from "react-icons/fi";
import { FaRegFileImage } from "react-icons/fa6";
import { FaRegFilePdf } from "react-icons/fa";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';
const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileSize, setFileSize] = useState(0);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [filePreview, setFilePreview] = useState(null);
  const [openPreview, setOpenPreview] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (selectedFile) {
      const fileURL = URL.createObjectURL(selectedFile);
      setFilePreview(fileURL);
      return () => URL.revokeObjectURL(fileURL);
    }
  }, [selectedFile]);
 
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    navigate("/policy");
    setOpen(false);
  };

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file && file.size <= 10485760) { // 10MB limit
      setSelectedFile(file);
      setFileSize((file.size / 1048576).toFixed(1)); // Convert bytes to MB and round to 1 decimal place
      setUploadProgress(0); // Reset progress
    } else {
      alert('File is too large or not selected');
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.size <= 10485760) { // 10MB limit
      setSelectedFile(file);
      setFileSize((file.size / 1048576).toFixed(2)); // Convert bytes to MB and round to 1 decimal place
      setUploadProgress(0); // Reset progress
    } else {
      alert('File is too large or not selected');
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return;
    setIsUploading(true);

    const fileSizeInBytes = selectedFile.size;
    const chunkSize = fileSizeInBytes / 100; // Each chunk represents 1% of the total file size

    let uploadedSize = 0;

    const uploadInterval = setInterval(() => {
      uploadedSize += chunkSize;
      const progress = (uploadedSize / fileSizeInBytes) * 100;
      setUploadProgress(progress);

      if (progress >= 100) {
        clearInterval(uploadInterval);
        setIsUploading(false);
        setOpen(true);
      }
    }, 50); // Update progress every 100ms
  };

  const handleCancel = () => {
    setSelectedFile(null);
    setFileSize(0);
    setUploadProgress(0);
    setIsUploading(false);
    setFilePreview(null);
    setOpenPreview(false);
  };

  const handlePreviewOpen = () => {
    setOpenPreview(true);
  };

  const handlePreviewClose = () => {
    setOpenPreview(false);
  };

  return (
    <Grid container spacing={1}>
        <Grid item xs={12} md={12} >
            <Typography variant="subtitle" fontFamily={'Lato'} fontWeight={'medium'} fontSize={20} >
                Please Upload File
            </Typography>
        </Grid>
        <Grid item xs={12} md={12} >
            <Typography variant="subtitle1" fontFamily={'Lato'} fontSize={14}>
                Upload documents you want to share with your team.
            </Typography>
        </Grid>
        <Grid item xs={12} md={12} >
            <Box sx={{p: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between',border: '1px dashed grey', borderRadius: 1 }}>
                <Box
                {...getRootProps()}
                sx={{
                    textAlign: 'left',
                    flex: 1,
                }}
                >
                <input
                    {...getInputProps()}
                    accept=".jpg,.png,.pdf"
                    style={{ display: 'none' }}
                    id="contained-button-file"
                    type="file"
                    onChange={handleFileChange}
                />
                <Stack direction={'row'} gap={2} alignItems={'center'}>
                    <FiUploadCloud size={50}/>
                    <div>
                        <Typography variant="subtitle"  fontFamily={'Lato'}>
                            Select a file or drag and drop here
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            JPG, PNG or PDF, file size no more than 10MB
                        </Typography>
                    </div>
                </Stack>
                </Box>
                <Box>
                    <label htmlFor="contained-button-file">
                        <Button variant="outlined" component="span">
                        Select File
                        </Button>
                    </label>
                </Box>
            </Box>
        </Grid>
        <Grid item xs={12} md={12} sx={{minHeight:'120px'}}>
            {selectedFile && (
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} >
                        <Typography variant="subtitle" fontFamily={'Lato'} fontWeight={'regular'} fontSize={16} >
                            File added
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12} display={'flex'} alignItems={'center'}>
                        {selectedFile.name.split('.')[1]==='pdf'?<FaRegFilePdf size={20} style={{marginTop:'-2px'}}/>:<FaRegFileImage size={20} style={{marginTop:'-2px'}}/>}
                        <Stack direction={'column'} justifyContent={'space-between'} width={'95%'} marginLeft={2}>
                            <Stack direction={'row'} justifyContent={'space-between'}>
                                <Typography variant="subtitle" fontFamily={'Lato'} fontWeight={'regular'} fontSize={12} >
                                    {selectedFile.name}
                                    {uploadProgress>=100?<button style={{border:'none',color:'blue',backgroundColor:'white'}}  onClick={handlePreviewOpen}>
                                        Preview
                                    </button>:<></>}
                                </Typography>
                                <Typography variant="subtitle" fontFamily={'Lato'} fontWeight={'regular'} fontSize={10} >
                                    {fileSize}MB
                                </Typography>
                            </Stack>
                            {uploadProgress>=100?<></>:<Box sx={{ width: '100%', mb: 2 }}>
                                <LinearProgress variant="determinate" value={uploadProgress} />
                                {/* <Typography variant="body2" color="textSecondary">
                                    {uploadProgress.toFixed(0)}%
                                </Typography> */}
                            </Box>}
                        </Stack>
                        <IconButton onClick={handleCancel} sx={{marginTop:'-5px'}}>
                            <CancelIcon />
                        </IconButton>
                    </Grid>
                </Grid>          
           )}
        </Grid>
        <Grid item xs={12} md={12} >
            <Grid container spacing={2}>
                <Grid item xs={1} md={2} ></Grid>
                <Grid item xs={5} md={4} >
                    <Button variant="outlined" fullWidth component={Link} to="/policy">
                        Cancel
                    </Button>
                </Grid>
                <Grid item xs={5} md={4} >
                    <Button variant="contained" fullWidth onClick={handleUpload} disabled={!selectedFile || isUploading}>
                        Upload
                    </Button>
                </Grid>
                <Grid item xs={1} md={2} ></Grid>
            </Grid> 
        </Grid>

        <Dialog open={openPreview} onClose={handlePreviewClose} maxWidth="md" fullWidth>
            <DialogTitle>File Preview</DialogTitle>
            <DialogContent>
            {filePreview && (
                <Box sx={{ textAlign: 'center' }}>
                {selectedFile.type.includes('image') ? (
                    <img src={filePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '500px' }} />
                ) : (
                    <iframe src={filePreview} title="PDF Preview" style={{ width: '100%', height: '500px' }} />
                )}
                </Box>
            )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handlePreviewClose} color="primary">Close</Button>
            </DialogActions>
        </Dialog>
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}  anchorOrigin={{ vertical:'top', horizontal:'center' }}>
        <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
        >
            File Uploaded Successfully.
        </Alert>
        </Snackbar>
      </Grid>
  );
};

export default FileUpload;
