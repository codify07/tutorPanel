import { Grid, Avatar } from '@mui/material'
import React from 'react'
import student1 from '../../assets/student1.png'
import './ourStudentSays.css'



export const OurStudentSays = () => {
    return (
        <>

            <div className="our-student-says" >
                <div className="our-student-says-content-wrapper" >
                    <div className='our-student-says-heading-container' >

                        <h1>
                            Our Student says
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies finibus ligula. In at convallis magna.
                        </p>
                        <div className="our-student-says-cards-container" >
                            <Grid container spacing={2} >
                                <Grid item xs={12} md={6} lg={4} >
                                    <div className="our-student-says-card-container" >
                                        <Avatar className="our-student-says-card-avatar" >
                                            <img src={student1} alt="pic" />
                                        </Avatar>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla velit sed diam vestibulum, quis finibus elit rutrum.
                                        </p>
                                        <h5>
                                            samantha aryton
                                        </h5>
                                        <h6>
                                            student
                                        </h6>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6} lg={4} >
                                    <div className="our-student-says-card-container" >
                                        <Avatar className="our-student-says-card-avatar" >
                                            <img src={student1} alt="pic" />
                                        </Avatar>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla velit sed diam vestibulum, quis finibus elit rutrum.
                                        </p>
                                        <h5>
                                            samantha aryton
                                        </h5>
                                        <h6>
                                            student
                                        </h6>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6} lg={4} >
                                    <div className="our-student-says-card-container" >
                                        <Avatar className="our-student-says-card-avatar" >
                                            <img src={student1} alt="pic" />
                                        </Avatar>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla velit sed diam vestibulum, quis finibus elit rutrum.
                                        </p>
                                        <h5>
                                            samantha aryton
                                        </h5>
                                        <h6>
                                            student
                                        </h6>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}