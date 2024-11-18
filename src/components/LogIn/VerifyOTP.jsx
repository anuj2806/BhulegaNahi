import React, { useMemo } from 'react'
import { Typography ,Box} from '@mui/material'
import { OtpBox } from './OtpBox';
const VerifyOTP = ({setOtp,otp}) => {
  const [otp1, setOtp1] = React.useState(otp);
  useMemo(() => setOtp(otp1), [otp1])
        
    
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}> 
        <OtpBox  value={otp1} onChange={setOtp1} length={6} />
      </Box>
    </>
  )
}

export default VerifyOTP
  
 