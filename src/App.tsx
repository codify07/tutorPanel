import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/homepage/homePage'
import {Register} from './pages/registerPage/register'
import {LoginPage} from './pages/login/loginPage'
import {LoginOtpScreen} from './pages/loginOtp/loginOtp'
import {TopDeal} from './pages/topDeal/topDeal'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/login-otp' element={<LoginOtpScreen/>} />
          <Route path='/deals' element={<TopDeal/>} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
