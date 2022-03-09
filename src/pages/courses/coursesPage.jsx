import { Button, Grid } from '@mui/material'
import React from 'react'
import { AppBar } from '../../components/abbbar/appbar'
import coursespic from '../../assets/coursespic.png'
import './courses.css'
import { CoursesMainCard } from '../../components/coursesCard/coursesMainCard'
import { Footer } from '../../components/footer/footer'
// import { CoursesTabs } from '../../components/coursesPageTabs/coursesPageTabs'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import {ArtAndDesign,BusinessTab,DataAndScience,Marketing,All} from '../../components/coursesPageTabs/coursesPageTabs'
import { Swiper, SwiperSlide } from 'swiper/react';




export const CoursesPage = () => {
    return (
        <>
            {/* appbar */}

            <div>
                <AppBar />
            </div>

            {/* body */}

            <div className='courses-header-container' >
                <Grid container >
                    <Grid item xs={12} md={6} >
                        <div className='courses-header-left-div' >
                            <h1>
                                Education and Teaching
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et mi id ex venenatis bibendum ac ut enim. Nulla scelerisque pulvinar dapibus. Aenean malesuada in ante ac lobortis.
                            </p>
                            <Button variant='text' className='courses-header-read-more-btn' >
                                read more
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <div className='courses-img-mask' >
                            <img src={coursespic} alt="pic" />
                        </div>
                    </Grid>
                </Grid>
            </div>

            {/* main content container */}
            <div className="courses-main-content-container" >
                {/* search field  */}


                <div style={{ marginTop: '50px' }}>
                    <Grid container columnSpacing={6} rowSpacing={2} >
                        <Grid item xs={12} md={5} >
                            <div className="courses-field-container" >
                                <p>
                                    search by course name
                                </p>
                                <input type="text" placeholder='search by course name' />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={5} >
                            <div className="courses-field-container" >
                                <p>
                                    search by course name
                                </p>
                                <select id="country" name="country" className="courses-field-container" >
                                    <option value="state">interest</option>

                                </select>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={2} >
                            <Button variant="text" className="courses-filter-apply-button" >
                                Apply
                            </Button>
                        </Grid>
                    </Grid>
                </div>




            </div>


            {/* courses tabs */}

            {/* <div className='page-courses-tabs-container' >
                <CoursesTabs />
            </div> */}

            <div className="courses-tabs-swiper-container" >
                <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={6}
                    navigation
                    centeredSlides={true}
                    hiddenClass='swiper-button-hidden'
                    
                    
                    scrollbar={{ draggable: true }}
                >
                    <SwiperSlide><All /></SwiperSlide>
                    <SwiperSlide><DataAndScience /></SwiperSlide>
                    <SwiperSlide><ArtAndDesign /></SwiperSlide>
                    <SwiperSlide><BusinessTab /></SwiperSlide>
                    <SwiperSlide><Marketing /></SwiperSlide>
                    <SwiperSlide><ArtAndDesign /></SwiperSlide>
                    <SwiperSlide><BusinessTab /></SwiperSlide>
                </Swiper>
            </div>


            {/* courses card */}

            <div className='courses-page-card-container' >
                <CoursesMainCard />
                <CoursesMainCard />
                <CoursesMainCard />
                <CoursesMainCard />


            </div>

            {/* footer */}

            <div>
                <Footer />
            </div>

        </>
    )
}