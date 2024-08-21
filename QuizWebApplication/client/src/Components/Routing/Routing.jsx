import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import ForgotPassword from '../Auth/ForgotPassword';
import PassTokenVerifyPage from '../Auth/PassTokenVerifyPage';
import ResetPassword from '../Auth/ResetPassword';
import Dashboard from '../Pages/Dashboard';
import QuizPage from '../Pages/QuizPage';
import Logout from '../Auth/Logout';

function Routing() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}/> 
        <Route path='/register' element={<Register />}/> 
        <Route path='/forgot-password' element={<ForgotPassword />}/> 
        <Route path='/verify-password-token/:passResetToken' element={<PassTokenVerifyPage />}/>
        <Route path='/forgot-password/reset-pass/:passResetToken' element={<ResetPassword />}/> 
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/quiz-page" element={<QuizPage />}/>
          <Route path='/logout' element={<Logout />}/>
        </Route>
      </Routes>
    </>
  )
}


export default Routing
