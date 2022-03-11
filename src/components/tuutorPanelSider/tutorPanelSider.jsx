import React from 'react'
import './tutorPanelSider.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { DashboardData } from './tutorPanelSiderData'
import dashlogo from '../../assets/dashboardlogo.png'
import profile from '../../assets/tutorProfile.png'
import courses from '../../assets/tutorCourses.png'
import chat from '../../assets/chat.png'
import ratings from '../../assets/ratings.png'
import myBooking from '../../assets/myBooking.png'
import myPromotion from '../../assets/myPromotion.png'
import notification from '../../assets/notification.png'
import myWallet from '../../assets/myWallet.png'
import inviteFriend from '../../assets/inviteFriend.png'
import dispute from '../../assets/dispute.png'
import transactionHistory from '../../assets/transactionHistory.png'
import logoutArrow from '../../assets/siderLogoutArrow.png'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import BookIcon from '@mui/icons-material/Book';
import ForumIcon from '@mui/icons-material/Forum';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CampaignIcon from '@mui/icons-material/Campaign';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import GroupIcon from '@mui/icons-material/Group';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';




export const TutotPanelSidBar = () => {
    return (
        <>

            <div className='tutor-panel-sider-container' >
                <div className='tutor-panel-sider-content-wraper' >
                    <div className="tutor-panel-sider-logo-container" >
                        <img src={logo} alt="logo" width='120px' />
                    </div>
                    <ul style={{ paddingTop: '10px' }} >
                        <li className="tutor-panel-sider-list-item" >

                            <Link to='dashboard' className='tutor-panel-sider-link' >
                                <DashboardIcon />
                                <p>dashboard</p>
                            </Link>

                        </li>

                        <li className="tutor-panel-sider-list-item" >
                            <Link to='profile' className='tutor-panel-sider-link' >
                                <PersonIcon />
                                <p>profile</p>
                            </Link>
                        </li>
                        <li className="tutor-panel-sider-list-item" >
                            <Link to='my-courses' className='tutor-panel-sider-link' >
                                <BookIcon />
                                <p>my courses</p>
                            </Link>
                        </li>
                        <li className="tutor-panel-sider-list-item" >
                            <Link to='chat-inbox' className='tutor-panel-sider-link' >
                                <ForumIcon />
                                <p>chat inbox</p>
                            </Link>
                        </li>
                        <li className="tutor-panel-sider-list-item" >
                            <Link to='ratings' className='tutor-panel-sider-link' >
                                <StarHalfIcon />
                                <p>ratings</p>
                            </Link>
                        </li>
                        <li className="tutor-panel-sider-list-item" >
                            <Link to='my-booking' className='tutor-panel-sider-link' >
                                <CalendarTodayIcon />
                                <p>my booking</p>
                            </Link>
                        </li>
                        <li className="tutor-panel-sider-list-item" >
                            <Link to='my-promotions' className='tutor-panel-sider-link' >
                                <CampaignIcon />
                                <p>my promotions</p>
                            </Link>
                        </li>
                        <li className="tutor-panel-sider-list-item" >
                            <Link to='notifications' className='tutor-panel-sider-link' >
                                <NotificationsActiveIcon />
                                <p>notifications</p>
                            </Link>
                        </li>
                        <li className="tutor-panel-sider-list-item" >
                            <Link to='my-wallet' className='tutor-panel-sider-link' >
                                <AccountBalanceWalletIcon />
                                <p>my wallet</p>
                            </Link>
                        </li>
                        <li className="tutor-panel-sider-list-item" >
                            <Link to='invite-friend' className='tutor-panel-sider-link' >
                                <GroupIcon />
                                <p>invite friends</p>
                            </Link>
                        </li>
                        <li className="tutor-panel-sider-list-item" >
                            <Link to='dispute' className='tutor-panel-sider-link' >
                                <PsychologyIcon />
                                <p>dispute</p>
                            </Link>
                        </li>
                        <li className="tutor-panel-sider-list-item" >
                            <Link to='transaction-history' className='tutor-panel-sider-link' >
                                <PointOfSaleIcon />
                                <p>transaction history</p>
                            </Link>
                        </li>
                    </ul>
                    <div className='first-tutor-panel-sider-log-out-container' >
                        <div>
                            <p>
                                logout
                            </p>
                        </div>
                        <div>
                            <img src={logoutArrow} alt="arrow" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}