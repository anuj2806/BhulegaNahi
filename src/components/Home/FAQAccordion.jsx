import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { BorderBottom } from '@mui/icons-material';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
   border: `1px solid ${theme.palette.divider}`,
   margin:"0 50px",
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:first-of-type': {
    borderRadius: '20px 20px 0 0',
  },
  '&:last-child': {
    borderRadius: '0 0 20px 20px',
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<AddOutlinedIcon sx={{ fontSize: '1.5rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(45deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },

  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const FAQAccordion = () => {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What is a Policy Wallet ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A policy wallet securely stores and organizes all your insurance policies in one convenient digital place, simplifying management and access.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What is Claim Assistance Service ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Claim assistance provides expert help with filing, tracking, and resolving insurance claims, ensuring a smooth and hassle-free process.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Is it Safe to Store policies over here ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Storing your policies in our digital wallet is safe because we use advanced encryption and security measures to protect your sensitive information. Your policies are accessible only to you, ensuring privacy and safeguarding against unauthorized access.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default FAQAccordion;