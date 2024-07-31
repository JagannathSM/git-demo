import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Register from "../Register/Register";
import Login from "../Login/Login";
import Home from "../Home/Home";
import PasswordReset from "../PasswordReset/PasswordReset";
import NewPassword from "../NewPassword/NewPassword";
import GetTask from "../GetTask/GetTask";
import AddTask from "../AddTask/AddTask";
import UpdateTask from '../UpdateTask/UpdateTask';
import PrivateRoute from './PrivateRoute';
import Logout from '../Logout/Logout';

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/password-reset' element={<PasswordReset/>}/>
        <Route path='/password-reset/:resetToken' element={<NewPassword/>}/>
        <Route element={<PrivateRoute />}>
          <Route path='/user/tasks' element={<GetTask/>}/>
          <Route path='/user/addtask' element={<AddTask/>}/>
          <Route path='/user/updatetask/:taskID' element={<UpdateTask/>}/>
          <Route path='/logout' element={<Logout/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default Routing
