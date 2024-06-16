import React from 'react'
import { MuiOtpInput } from 'mui-one-time-password-input'
const VerifyOTP = () => {
    const [otp, setOtp] = React.useState('')

    const handleChange = (newValue) => {
        setOtp(newValue)
    }

    const matchIsNumeric = (text) =>{
        const isNumber = typeof text === 'number'
        const isString = matchIsString(text)
        return (isNumber || (isString && text !== '')) && !isNaN(Number(text))
      }
    const matchIsString =(value)=> {
        return typeof value === 'string' || value instanceof String;
    }
      
      const validateChar = (value, index) => {
        return matchIsNumeric(value)
      }
  return (
    <MuiOtpInput  value={otp} onChange={handleChange} autoFocus length={4} validateChar={validateChar} TextFieldsProps={{ placeholder: '-' }} />
  )
}

export default VerifyOTP
  
 