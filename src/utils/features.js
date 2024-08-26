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
