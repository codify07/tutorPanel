import React from 'react'
import './myCourses.css'
import profilePic from '../../../assets/profilePic.png'
import StarIcon from '@mui/icons-material/Star';
import fb from '../../../assets/blackFb.png'
import twitter from '../../../assets/blackTwitter.png'
import whatsApp from '../../../assets/blackWhatsApp.png'
import linkedIn from '../../../assets/blackLinkedIn.png'
import { IconButton, Grid } from '@mui/material'
import plus from '../../../assets/plus.png'
import { SearchByCouseName } from '../../../components/tutorPanelComponents/fields/searchFields'
import { SearchByPrice } from '../../../components/tutorPanelComponents/fields/searchFields'
import { SearchByDate } from '../../../components/tutorPanelComponents/fields/searchFields'
import { CoursesMiniCard } from '../../../components/tutorPanelComponents/cards/cards'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';







export const MyCoursesPage = () => {
    return (
        <>
            <div className="tutor-panel-view-courses-container" >

                {/* header */}

                <div className="tutor-panel-view-courses-header-container" >
                    <div className="tutor-panel-view-courses-header-left-side-container" >
                        <div className="tutor-panel-view-courses-header-left-side-avatar-container" >
                            <img src={profilePic} alt="" />
                        </div>
                        <div className="tutor-panel-view-courses-header-container-profile-pic-text" >
                            <h4>
                                David Anderson
                            </h4>
                            <p>
                                English,mathematics, and science teachers
                            </p>
                            <p>
                                burnside, united state
                            </p>
                            <div className='tutor-my-courses-ratings-container' >
                                <div>
                                    <StarIcon className="star-color-my-courses" />
                                    <StarIcon className="star-color-my-courses" />
                                    <StarIcon className="star-color-my-courses" />
                                    <StarIcon className="star-color-my-courses" />
                                    <StarIcon />

                                </div>
                                <div style={{ marginLeft: '10px' }} >
                                    <p>
                                        4.0 (50)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tutor-panel-view-courses-header-right-side-container" >
                        <p>
                            Share to social media
                        </p>
                        <div className='tutor-panel-view-courses-header-right-side-container-social-icons' >
                            <IconButton>
                                <img src={fb} alt="pic" />
                            </IconButton>
                            <IconButton>
                                <img src={linkedIn} alt="pic" />
                            </IconButton>
                            <IconButton>
                                <img src={twitter} alt="pic" />
                            </IconButton>
                            <IconButton>
                                <img src={whatsApp} alt="pic" />
                            </IconButton>
                        </div>
                    </div>
                </div>


                {/* boddy heading */}

                <div className='tutor-panel-my-courses-body-heading-container' >

                    <h2>
                        My courses
                    </h2>

                    <div className='tutor-panel-my-courses-body-heading-add-btns' >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginRight: '15px' }} >
                            <div>
                                <Link to='add-new-package' style={{ fontSize: '16px', marginRight: '10px', textTransform: 'capitalize', textDecoration: 'none', colorl: 'black' }} >
                                    Add packages
                                </Link>
                            </div>
                            <Link to='add-new-package' >
                                <IconButton>
                                    <AddIcon style={{ color: '#76AC2D' }} />
                                </IconButton>
                            </Link>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginRight: '15px' }} >
                            <div>
                                <Link to='add-new-course' style={{ fontSize: '16px', marginRight: '10px', textTransform: 'capitalize', textDecoration: 'none' }} >
                                    Add New Course
                                </Link>
                            </div>
                            <div>
                                <Link to='add-new-course' className='first-tutor-panel-courses-add-new-course-btn' >
                                    <IconButton>
                                        <AddIcon style={{ color: '#76AC2D' }} />
                                    </IconButton>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

                {/* filters & search boxes */}

                <div className='tutor-panel-my-courses-search-fields-container' >
                    <Grid container spacing={2} columns={18}  >
                        <Grid item xs={18} md={9} lg={5} >
                            <div>
                                <SearchByCouseName />
                            </div>
                        </Grid>
                        <Grid item xs={18} md={9} lg={5} >
                            <div>
                                <SearchByPrice />
                            </div>
                        </Grid>
                        <Grid item xs={18} md={9} lg={5} >
                            <div>
                                <SearchByDate />
                            </div>
                        </Grid>
                        <Grid item xs={18} md={9} lg={3} >
                            <div className='tutor-panel-my-courses-apply-btn-container' >
                                <button className='tutor-panel-my-courses-apply-btn' >
                                    apply
                                </button>
                            </div>
                        </Grid>
                    </Grid>
                </div>


                {/* courses cards */}

                <div className='tutor-panel-mycourses-courses-miini-cards-deck-container' >
                    <Grid container spacing={2} >
                        <Grid item xs={12} md={6} lg={4} >
                            <div className='tutor-panel-my-courses-courses-mini-card-container'>
                                <CoursesMiniCard />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4} >
                            <div className='tutor-panel-my-courses-courses-mini-card-container'>
                                <CoursesMiniCard />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4} >
                            <div className='tutor-panel-my-courses-courses-mini-card-container'>
                                <CoursesMiniCard />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4} >
                            <div className='tutor-panel-my-courses-courses-mini-card-container'>
                                <CoursesMiniCard />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4} >
                            <div className='tutor-panel-my-courses-courses-mini-card-container'>
                                <CoursesMiniCard />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4} >
                            <div className='tutor-panel-my-courses-courses-mini-card-container'>
                                <CoursesMiniCard />
                            </div>
                        </Grid>
                    </Grid>
                </div>

            </div>

        </>
    )
}