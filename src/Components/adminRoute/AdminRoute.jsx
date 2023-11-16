import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }){
    const userInfo = useSelector((state) => state.userInfo);
    return userInfo && userInfo.isAdmin ? children : <Navigate to='/signin' />
}