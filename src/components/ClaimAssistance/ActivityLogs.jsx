import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { Box, Typography, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // For review
import ChatIcon from '@mui/icons-material/Chat'; // For chat
import DescriptionIcon from '@mui/icons-material/Description'; // For document submission
import BlockIcon from '@mui/icons-material/Block'; // For rejection
import GavelIcon from '@mui/icons-material/Gavel'; // For court
import CelebrationIcon from '@mui/icons-material/Celebration'; // For win
import {timelineOppositeContentClasses} from '@mui/lab/TimelineOppositeContent';
const steps = [
  { date: '12/02/22', description: 'Documents have been reviewed by our professionals' },
  { date: '27/02/22', description: 'Visited the Insurance Company and had a chat regarding the case' },
  { date: '15/03/22', description: 'Submitted your documents to the Insurance' },
  { date: '30/03/22', description: 'Company rejected our Proposal. We will move to Ombudsman' },
  { date: '15/04/22', description: 'Attended the Court hearing and they gave a proposal in our benefit' },
  { date: '30/04/22', description: 'We won the case and you will get reimbursed within a week' },
];
const getIconForStep = (description) => {
    const lowerCaseDesc = description.toLowerCase();
  
    if (lowerCaseDesc.includes('review')) {
      return { icon: <CheckCircleIcon sx={{ color: 'green' }} />, dotColor: '#e0f2f1' }; // Light green dot with dark green icon
    }
    if (lowerCaseDesc.includes('visit') || lowerCaseDesc.includes('chat')) {
      return { icon: <ChatIcon sx={{ color: 'blue' }} />, dotColor: '#bbdefb' }; // Light blue dot with dark blue icon
    }
    if (lowerCaseDesc.includes('submit') || lowerCaseDesc.includes('document')) {
      return { icon: <DescriptionIcon sx={{ color: '#ff9800' }} />, dotColor: '#fff3e0' }; // Light orange dot with orange icon
    }
    if (lowerCaseDesc.includes('reject')) {
      return { icon: <BlockIcon sx={{ color: 'red' }} />, dotColor: '#ffebee' }; // Light red dot with red icon
    }
    if (lowerCaseDesc.includes('court') || lowerCaseDesc.includes('hearing') || lowerCaseDesc.includes('proposal')) {
      return { icon: <GavelIcon sx={{ color: 'brown' }} />, dotColor: '#efebe9' }; // Light brown dot with brown icon
    }
    if (lowerCaseDesc.includes('win') || lowerCaseDesc.includes('reimburse')) {
      return { icon: <CelebrationIcon sx={{ color: 'purple' }} />, dotColor: '#e1bee7' }; // Light purple dot with purple icon
    }
  
    return { icon: <CheckCircleIcon sx={{ color: 'gray' }} />, dotColor: '#f5f5f5' }; // Fallback: Light gray dot with gray icon
  };
  

const ActivityLogs = () => {
  return (
    <Timeline  sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.1,
        },
        margin:"10px 20px",
      }}>
        {steps.map((step, index) => {
        const { icon, dotColor } = getIconForStep(step.description);
        return (
            <TimelineItem key={index}>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="left"
                    variant="body2"
                    color="text.secondary"
                    >
                <Typography variant='h6'>{step.date}</Typography>
                
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot style={{ backgroundColor: dotColor }}>
                        {icon}
                    </TimelineDot>
                    {index < steps.length - 1 && <TimelineConnector />}
                </TimelineSeparator>

                <TimelineContent>
                    <Paper elevation={3} style={{ padding: '10px', borderLeft: `5px solid ${dotColor}`,marginTop:"6px"}}>
                        <Typography>{step.description}</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        )}
    )}
    </Timeline>
  )};

export default ActivityLogs