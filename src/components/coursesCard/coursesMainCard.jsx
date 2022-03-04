import { Button, Grid } from '@mui/material'
import React from 'react'
import './coursesMainCard.css'
import coursespic from '../../assets/courses2.png'
import locationicon from '../../assets/locationicon.png'





export const CoursesMainCard = () => {
    return (
        <>

            <div className='courses-main-card-container' >
                <div className='courses-main-card-content-wraper' >
                    <Grid container spacing={2}  >
                        <Grid item xs={12} md={3} >
                            <img src={coursespic} alt="pic" className='courses-main-card-img' />
                        </Grid>
                        <Grid item xs={12} md={7} >
                            <div className='courses-main-card-text-container' >
                                <h1>
                                    Etiam aliquam, metus et fermentum fringilla
                                </h1>
                                <div className='courses-main-card-location' >
                                    <img src={locationicon} alt="" />
                                    <p>burnside</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et mi id ex venenatis bibendum ac ut enim. Nulla scelerisque pulvinar dapibus. Aenean malesuada in ante ac lobortis. </p>
                                <Button variant='text' className="courses-main-card-view-course-btn" >
                                    View Course
                                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={2} >
                            <div className='courses-main-card-career-outcomes' >
                                <h1>
                                    Career Outcome
                                </h1>
                                <p>Professional Development for:</p>
                                <ul>
                                    <li className="courses-main-card-career-outcome-li" >
                                        Teachers / Teachers Aids
                                    </li>
                                    <li className="courses-main-card-career-outcome-li">
                                        Community service workers
                                    </li>
                                    <li className="courses-main-card-career-outcome-li">
                                        Lifestyle Workers
                                    </li>
                                    <li className="courses-main-card-career-outcome-li" >
                                        Speech pathologist assistants
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>

        </>
    )
}
