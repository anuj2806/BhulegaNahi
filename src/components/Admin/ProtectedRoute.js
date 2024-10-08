import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute  = ({children,isAuthenticated,adminOnly,isAdmin,redirect="/dashboard"})=>{
    if(!isAuthenticated) return <Navigate to={redirect}/>
    if(adminOnly && !isAdmin) return <Navigate to={redirect}/>
    return children?children:<Outlet/>
}


export default ProtectedRoute