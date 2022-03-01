import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/homepage/homePage'
import {Register} from './pages/registerPage/register'
import {LoginPage} from './pages/login/loginPage'
import {LoginOtpScreen} from './pages/loginOtp/loginOtp'
import {TopDeal} from './pages/topDeal/topDeal'
import {CoursesPage} from './pages/courses/coursesPage'
import {ContactUs} from './pages/contactUs/contactUs'
import {AboutUs} from './pages/aboutUs/aboutUs'
import {TutorCertificatesPage} from './pages/TutorCertificates/tutorCertificates'
import {ExploreCoursesPage} from './pages/exploreCourses/exploreCourses'

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
          <Route path='/courses' element={<CoursesPage/>} />
          <Route path='/contact-us' element={<ContactUs/>} />
          <Route path='/about-us' element={<AboutUs/>} />
          <Route path='/tutor-certificates' element={<TutorCertificatesPage/>} />
          <Route path='/our-courses' element={<ExploreCoursesPage/>} />



        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
