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







export const TutotPanelSidBar = () => {
    return (
        <>

            <div className='tutor-panel-sider-container' >
                <div className="tutor-panel-sider-logo-container" >
                    <img src={logo} alt="logo" width='120px' />
                </div>
                <ul style={{paddingTop:'10px'}} >
                    <li className="tutor-panel-sider-list-item" >

                        <Link to='dashboard' className='tutor-panel-sider-link' >
                            <img src={dashlogo} alt="" />
                            <p>dashboard</p>
                        </Link>

                    </li>

                    <li className="tutor-panel-sider-list-item" >
                        <Link to='profile' className='tutor-panel-sider-link' >
                            <img src={profile} alt="" />
                            <p>profile</p>
                        </Link>
                    </li>
                    <li className="tutor-panel-sider-list-item" >
                        <Link to='my-courses' className='tutor-panel-sider-link' >
                            <img src={courses} alt="" />
                            <p>my courses</p>
                        </Link>
                    </li>
                    <li className="tutor-panel-sider-list-item" >
                        <Link to='chat-inbox' className='tutor-panel-sider-link' >
                            <img src={chat} alt="" />
                            <p>chat inbox</p>
                        </Link>
                    </li>
                    <li className="tutor-panel-sider-list-item" >
                        <Link to='ratings' className='tutor-panel-sider-link' >
                            <img src={ratings} alt="" />
                            <p>ratings</p>
                        </Link>
                    </li>
                    <li className="tutor-panel-sider-list-item" >
                        <Link to='my-booking' className='tutor-panel-sider-link' >
                            <img src={myBooking} alt="" />
                            <p>my booking</p>
                        </Link>
                    </li>
                    <li className="tutor-panel-sider-list-item" >
                        <Link to='my-promotion' className='tutor-panel-sider-link' >
                            <img src={myPromotion} alt="" />
                            <p>my promotions</p>
                        </Link>
                    </li>
                    <li className="tutor-panel-sider-list-item" >
                        <Link to='notifications' className='tutor-panel-sider-link' >
                            <img src={notification} alt="" />
                            <p>notifications</p>
                        </Link>
                    </li>
                    <li className="tutor-panel-sider-list-item" >
                        <Link to='my-wallet' className='tutor-panel-sider-link' >
                            <img src={myWallet} alt="" />
                            <p>my wallet</p>
                        </Link>
                    </li>
                    <li className="tutor-panel-sider-list-item" >
                        <Link to='invite-friend' className='tutor-panel-sider-link' >
                            <img src={inviteFriend} alt="" />
                            <p>invite friends</p>
                        </Link>
                    </li>
                    <li className="tutor-panel-sider-list-item" >
                        <Link to='dispute' className='tutor-panel-sider-link' >
                            <img src={dispute} alt="" />
                            <p>dispute</p>
                        </Link>
                    </li>
                    <li className="tutor-panel-sider-list-item" >
                        <Link to='transaction-history' className='tutor-panel-sider-link' >
                            <img src={transactionHistory} alt="" />
                            <p>transaction history</p>
                        </Link>
                    </li>
                </ul>
            </div>

        </>
    )
}