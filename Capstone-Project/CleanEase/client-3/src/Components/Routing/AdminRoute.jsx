import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useGlobal } from '../../GlobalContext/GlobalProvider';

function AdminRoute() {
 
  const {loginUser} = useGlobal();
  console.log(loginUser)
  return (
    loginUser.role == "Admin" ? <Outlet/> : <Navigate to="/"/>
  )
}

export default AdminRoute