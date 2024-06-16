import { Button, Container, Stack,Grid,Typography,Box,Divider,IconButton } from '@mui/material'
import React,{} from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useParams,useNavigate} from 'react-router-dom'
import sop from '../../styles/sop.png'
import { GrDocumentPdf } from "react-icons/gr";
import { IoMdDownload } from "react-icons/io";

const SOPpage = () => {
    const navigate = useNavigate();
    const {policyname} = useParams();
    const backtoSOP = () => (navigate('/downloadSOP'));
    const pdfDownload =(a) =>{
        console.log(a+' pdf download')
    }
    function downloadPDF(pdf,val) {
        const linkSource = `data:application/pdf;base64,${pdf}`;
        const downloadLink = document.createElement("a");
        const fileName = val+".pdf";
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();}
  return (
    <Container>
        <Grid container >
            <Grid item xs={12} md={12} width={'100px'}>
                <Box >
                    <Stack direction={'row'}  alignItems={'center'}>
                        <IconButton onClick={backtoSOP} >
                            <ArrowBackIosIcon />
                        </IconButton>
                        <Typography variant="h6" m={1} fontFamily={'Lato'} fontWeight={'700'} >{policyname}</Typography>
                    </Stack>
                    <Divider/>
                </Box>
            </Grid>
            <Grid item xs={12} md={12} mt={2}>
              <img src={sop} alt="dsopimage" />
            </Grid>    
            <Grid item xs={12} md={12}>
                <Grid container spacing={2}>
                    {['file1', 'file2','file3','file4'].map((val,index)=>(
                    <Grid item xs={1.5} md={2}>
                        <Stack border={'1px solid #e0e0e0'} borderRadius={1} >
                            <Box height={'100px'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderBottom={'1px solid #e0e0e0'}>
                                <GrDocumentPdf size={40} color='#3361E1'/>
                            </Box>
                            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} p={0.5}>
                                <Typography variant="subtitle" fontFamily={'Lato'} fontWeight={'regular'} fontSize={16} >{val}</Typography>
                                <IconButton ><IoMdDownload onClick={()=>downloadPDF('SGVsbG8gV29ybGQhCg==',val)}/></IconButton>
                            </Stack>
                        </Stack>
                    </Grid>
                  ))}
                </Grid>
            </Grid>    
        </Grid>
    </Container>
  )
}

export default SOPpage
