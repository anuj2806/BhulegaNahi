import toast from "react-hot-toast";

export const ResponseToast = (res,navigate,url)=>{
    if("data" in res){
        toast.success(res.data.message)
        if(navigate) navigate(url); 
      }else{
        const error = res.error;
        const message = error.data.message;
        toast.error(message);
      }
}
export const formatRupees=(amount)=> {
  // Convert amount to string to work with
  const amountStr = amount.toString();
  
  // Split the amount into integer and decimal parts
  const [integerPart, decimalPart] = amountStr.split('.');

  // Format the integer part based on the Indian number system
  const lastThree = integerPart.slice(-3);
  const otherNumbers = integerPart.slice(0, -3);

  const formattedInteger = otherNumbers !== '' ? otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree : lastThree;
  
  // Combine the integer part and decimal part (if present)
  return decimalPart ? `${formattedInteger}.${decimalPart}` : `${formattedInteger}`;
}