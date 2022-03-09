import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import { HomePage } from './pages/homepage/homePage'
import { Register } from './pages/registerPage/register'
import { LoginPage } from './pages/login/loginPage'
import { LoginOtpScreen } from './pages/loginOtp/loginOtp'
import { TopDeal } from './pages/topDeal/topDeal'
import { CoursesPage } from './pages/courses/coursesPage'
import { ContactUs } from './pages/contactUs/contactUs'
import { AboutUs } from './pages/aboutUs/aboutUs'
import { TutorCertificatesPage } from './pages/TutorCertificates/tutorCertificates'
import { ExploreCoursesPage } from './pages/exploreCourses/exploreCourses'
import { DashboardPage } from './pages/tutor-panal/tutorPanelDashboard/tutorPanelDashboardPage'
import { Profile } from './pages/tutor-panal/profile/profile'
import { Dashboard } from './pages/tutor-panal/dashBoard/tutorDashBoard'
import { MyCoursesPage } from './pages/tutor-panal/myCourses/myCoursesPage'
import { CourseDetailPage } from './pages/tutor-panal/myCourses/courseDetailPage'
import { MyCoursesMainPage } from './pages/tutor-panal/myCourses/MyCoursesParentPage'
import { AddNewCourse } from './pages/tutor-panal/addNewCourse/addNewCourse'
import { AddNewPackage } from './pages/tutor-panal/addNewCourse/addNewPackage'
import { ChatInbox } from './pages/tutor-panal/ChatInbox/chatInbox'
import { StudentRegistration } from './components/registrationComponents/registrationComponents'
import { TutorRegistration } from './components/registrationComponents/registrationComponents'
import {RegisterTutor} from './pages/registerPage/tutor-register'
import {Ratings} from './pages/tutor-panal/ratings/ratings'
import {MyBookings} from './pages/tutor-panal/myBookings/myBookings'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/register-student' element={<StudentRegistration />} />
          <Route Path='/register-student' element={<StudentRegistration />} />
          <Route path='/register-tutor' element={<RegisterTutor />}>
            <Route path='' element={<TutorRegistration />} />
            <Route path='certificates' element={<TutorCertificatesPage />} />
          </Route>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/login-otp' element={<LoginOtpScreen />} />
          <Route path='/deals' element={<TopDeal />} />
          <Route path='/courses' element={<CoursesPage />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/our-courses' element={<ExploreCoursesPage />} />
          <Route path='/tutor-home' element={<DashboardPage />}>
            <Route path='profile' element={<Profile />} />
            <Route path='' element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='my-courses' element={<MyCoursesMainPage />}>
              <Route path='' element={<MyCoursesPage />} />
              <Route path='course-detail' element={<CourseDetailPage />} />
              <Route path='add-new-course' element={<AddNewCourse />} />
              <Route path='add-new-package' element={<AddNewPackage />} />
            </Route>
            <Route path='chat-inbox' element={<ChatInbox />} />
            <Route path='ratings' element={<Ratings/>} />
            <Route path='my-booking' element={<MyBookings/>}  />
          </Route>



        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
