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
import { RegisterTutor } from './pages/registerPage/tutor-register'
import { Ratings } from './pages/tutor-panal/ratings/ratings'
import { MyBookings } from './pages/tutor-panal/myBookings/myBookings'
import { Analytics } from './pages/tutor-panal/myBookings/analytics'
import { MyBookingParentPage } from './pages/tutor-panal/myBookings/myBookingParentPage'
import { PromotionParentPage } from './pages/tutor-panal/promotion/promotionMainPage'
import { MyPromotions } from './pages/tutor-panal/promotion/promotion'
import { CreatePromotion } from './pages/tutor-panal/promotion/createPromotion'
import { Notification } from './pages/tutor-panal/notification/notification'
import { MyWallet } from './pages/tutor-panal/myWallet/myWallet'
import { CreateQuizParent } from './pages/tutor-panal/createQuiz/createQuizParent'
import { CreateQuizTable } from './pages/tutor-panal/createQuiz/createQuiz'
import { ViewQuizPage } from './pages/tutor-panal/createQuiz/viewQuiz'
import { EditQuiz } from './pages/tutor-panal/createQuiz/editQuiz'
import { ViewQuizParent } from './pages/tutor-panal/createQuiz/viewQuizParent'
import { AddQuiz } from './pages/tutor-panal/createQuiz/addQuiz'
import { PurchaseProductParent } from './pages/tutor-panal/purchaseProduct/purchaseProductParent'
import { PurchaseProduct } from './pages/tutor-panal/purchaseProduct/purchaseProduct'
import { ProductDetail } from './pages/tutor-panal/purchaseProduct/productDetail'
import { MyCartParent } from './pages/tutor-panal/myCart/myCartParent'
import { MyCart } from './pages/tutor-panal/myCart/myCart'
import { Continue } from './pages/tutor-panal/myCart/checkWalletCardPage'
import { Thanku } from './pages/tutor-panal/myCart/thankuPage'
import {CheckWalletParent } from  './pages/tutor-panal/myCart/myWalletCardPageParent'
import {InviteFriend} from './pages/tutor-panal/inviteFriend/inviteFriend'
import {DisputeParent} from './pages/tutor-panal/dispute/disputeParent'
import {Dispute} from './pages/tutor-panal/dispute/dispute'
import {CreateDispute} from './pages/tutor-panal/dispute/createDispute'
import {TransactionHistory} from './pages/tutor-panal/transaction/transactionHistory'


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
            <Route path='ratings' element={<Ratings />} />
            <Route path='my-booking' element={<MyBookingParentPage />}  >
              <Route path='' element={<MyBookings />} />
              <Route path='analytics' element={<Analytics />} />
            </Route>
            <Route path='my-promotions' element={<PromotionParentPage />} >
              <Route path='' element={<MyPromotions />} />
              <Route path='create-promotion' element={<CreatePromotion />} />
            </Route>
            <Route path='notifications' element={<Notification />} />
            <Route path='my-wallet' element={<MyWallet />} />
            <Route path='create-quiz' element={<CreateQuizParent />}>
              <Route path='' element={<CreateQuizTable />} />
              <Route path='view' element={<ViewQuizParent />} >
                <Route path='' element={<ViewQuizPage />} />
                <Route path='edit-quiz' element={<EditQuiz />} />
              </Route>
              <Route path='create-quiz' element={<AddQuiz />} />
            </Route>
            <Route path='purchase-product' element={<PurchaseProductParent />}>
              <Route path='' element={<PurchaseProduct />} />
              <Route path='product-detail' element={<ProductDetail />} />
            </Route>
            <Route path='my-cart' element={<MyCartParent />} >
              <Route path='' element={<MyCart />} />
              <Route path='buy-now' element={<CheckWalletParent />}  >
                <Route path='' element={<Continue />} />
                <Route path='thanku' element={<Thanku />} />
              </Route>
            </Route>
            <Route path='invite-friends' element={<InviteFriend />}  />
            <Route path='dispute' element={<DisputeParent />} >
              <Route path='' element={<Dispute />} />
              <Route path='create-dispute' element={<CreateDispute />} />
            </Route>
            <Route path='transaction-history' element={<TransactionHistory />} />
          </Route>



        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
