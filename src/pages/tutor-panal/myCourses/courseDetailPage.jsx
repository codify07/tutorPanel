import React from 'react'
import { Grid, } from '@mui/material'
import locationIcon from '../../../assets/location-icon.png'
import courseMask from '../../../assets/courseDetailMask.png'
import './myCourses.css'
import { CourseModuleCard } from '../../../components/tutorPanelComponents/cards/cards'
import { CourseModuleDateTime } from '../../../components/tutorPanelComponents/cards/cards'
import { CourseModuleTime } from '../../../components/tutorPanelComponents/cards/cards'
import { MyCoursesDetialPackageOne } from '../../../components/tutorPanelComponents/cards/cards'
import { MyCoursesDetialPackagetwo } from '../../../components/tutorPanelComponents/cards/cards'
import AddIcon from '@mui/icons-material/Add';


export const CourseDetailPage = () => {
    return (
        <>

            <div className="first-tutor-panel-course-detail-page-container" >
                <Grid container spacing={2} alignItems='center'>
                    <Grid item xs={12} md={7} lg={9} >
                        <div className="first-tutor-panel-course-detail-page-heading-text-container" >
                            <h2>
                                Lorem ipsum dolor sit amet
                            </h2>
                            <div className='first-tutor-panel-course-detail-page-hading-location-div-container' >
                                <img src={locationIcon} alt="" />
                                <p>
                                    burnside
                                </p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={5} lg={3}>
                        <div className="first-tutor-panel-curse-detail-page-edit-course-btn" >
                            <button>
                                edit course
                            </button>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className='first-tutor-panel-curse-detail-page-mask-img-container' >
                            <img src={courseMask} alt="mask" />
                        </div>
                    </Grid>
                    <Grid xs={12} >
                        <div className='first-tutor-panel-curse-detail-page-description' >
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                            </p>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className='first-tutor-panel-curse-detail-page-course-module-heading-container'>
                            <div className='first-tutor-panel-curse-detail-page-course-module-heading' >
                                <p>
                                    course module
                                </p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <CourseModuleCard />
                    </Grid>
                    <Grid item xs={12} >
                        <div className='first-tutor-panel-course-detail-page-assessment-container' >
                            <AddIcon className='first-tutor-panel-course-detail-page-assessment-add-btn' />
                            <p>Assessment</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className="first-tutor-panel-course-detail-page-component-double-heading-container" >
                            <p>
                                Course Language
                            </p>
                            <p>
                                English
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className="first-tutor-panel-course-detail-page-component-double-heading-container" >
                            <p>
                                Course Duration
                            </p>
                            <p>
                                30hr 30 min
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className="first-tutor-panel-course-detail-page-component-double-heading-container" >
                            <p>
                                Course Date & time
                            </p>
                            <p>
                                30hr 30 min
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div>
                            <CourseModuleDateTime />
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div>
                            <CourseModuleTime />
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className="first-tutor-panel-course-detail-page-component-double-heading-container" >
                            <p>
                                Packages
                            </p>

                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div>
                            <MyCoursesDetialPackageOne />
                        </div>
                        <div>
                            <MyCoursesDetialPackagetwo/>
                        </div>
                    </Grid>
                </Grid>
            </div>


        </>
    )
}