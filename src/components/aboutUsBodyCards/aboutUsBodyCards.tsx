import React from 'react'
import './aboutUsBodyCards.css'
import achieve from '../../assets/achieve.png'
import tick from '../../assets/tick.png'
import mask2 from '../../assets/aboutmaske2.png'
import mask3 from '../../assets/aboutmask3.png'
import whitetick from '../../assets/whitetick.png'

import { Grid } from '@mui/material'


export const AchieveYourGoals = () => {
    return (
        <>

            <div className='achieve-your-goal-container' >
                <div className='acieve-your-goal-content-wrapper' >
                    <div className='achieve-your-goal-left-div-upper' >
                        <img src={achieve} alt="pic" width='528px' height='528px' />
                    </div>
                    <div className='achieve-your-goal-right-div' >
                        <h1>
                            Achieve Your <br />
                            Goals With Amaf classes
                        </h1>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies finibus ligula. In at convallis magna.
                        </p>
                        <div className='achieve-ticks-section-container' >
                            <div className='achieve-ticke-section-content-wrapper' >
                                <img src={tick} alt="tic" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                            <div className='achieve-ticke-section-content-wrapper' >
                                <img src={tick} alt="tic" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                            <div className='achieve-ticke-section-content-wrapper' >
                                <img src={tick} alt="tic" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                            <div className='achieve-ticke-section-content-wrapper' >
                                <img src={tick} alt="tic" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


// why choese me

export const WhyChoseMe = () => {
    return (
        <>

            <div className='achieve-your-goal-container' style={{ backgroundColor: '#F9F9F9', paddingTop: '30px', paddingBottom: '30px' }} >
                <div className='why-chose-me-content-wrapper'  >
                    <div className='achieve-your-goal-left-div' >
                        <img src={mask2} alt="pic" width='528px' height='528px' />
                    </div>
                    <div className='achieve-your-goal-right-div' >
                        <h3 style={{ color: '#97005E', letterSpacing: '1px', textTransform: 'uppercase', lineHeight: '25px', marginTop: '20px', marginBottom: '20px' }} >
                            Why choose me
                        </h3>
                        <h1 >
                            Tools For Teachers
                            And Learners
                        </h1>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies finibus ligula. In at convallis magna.
                        </p>
                        <div className='achieve-ticks-section-container' >
                            <div className='achieve-ticke-section-content-wrapper' >
                                <img src={tick} alt="tic" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                            <div className='achieve-ticke-section-content-wrapper' >
                                <img src={tick} alt="tic" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                            <div className='achieve-ticke-section-content-wrapper' >
                                <img src={tick} alt="tic" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                            <div className='achieve-ticke-section-content-wrapper' >
                                <img src={tick} alt="tic" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

// over vision


export const OurVision = () => {
    return (
        <>

            <div className='achieve-your-goal-container' style={{marginTop:'80px'}}  >
                <div className='why-chose-me-content-wrapper'  >
                    <Grid container rowSpacing={4}  >
                        <Grid item xs={12} md={6} >
                            <div className='over-vision-left-div' >
                                <img src={mask3} alt="pic" width='519px' height='418px' />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <div className='over-vision-right-div-container'  >
                                <div className='over-vision-right-div' >
                                    <h3>
                                        Our Vission
                                    </h3>
                                    <h1 >
                                        Integer sit amet justo in
                                        eros commodo lobortis.
                                    </h1>

                                    <p  >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies finibus ligula. In at convallis magna.
                                    </p>
                                    <div className='our-vision-tick-section-container' >
                                        <div className='our-vision-tick-section-content-wrapper' >
                                            <img src={whitetick} alt="tic" />
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </p>
                                        </div>
                                        <div className='our-vision-tick-section-content-wrapper' >
                                            <img src={whitetick} alt="tic" />
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </p>
                                        </div>
                                        <div className='our-vision-tick-section-content-wrapper' >
                                            <img src={whitetick} alt="tic" />
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </p>
                                        </div>
                                        <div className='our-vision-tick-section-content-wrapper' >
                                            <img src={whitetick} alt="tic" />
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>

        </>
    )
}


// our mision


export const OurMission = () => {
    return (
        <>


            <div className='our-mission-container' >
                <div className='about-us-over-mission-heading' >
                    <h1>
                        Our mission
                    </h1>
                    <p>
                        Maecenas bibendum ultrices velit convallis pharetra. Morbi sed leo enim. Mauris sagittis quam non consectetur fringilla. Ut tempor mattis sapien, at posuere dui faucibus in. Fusce mollis ipsum ac viverra congue.
                    </p>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <div className='about-us-our-mission-card-container' >
                            <Grid container  >
                                <Grid item xs={12} md={5} >
                                    <div className="abou-us-ouver-mission-inner-heading" >
                                        <p>
                                            Integer sit amet justo in
                                            eros commod.
                                        </p>

                                    </div>
                                </Grid>
                                <Grid item xs={12} md={7} >
                                    <div className="abou-us-ouver-mission-inner-description">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies finibus ligula. In at convallis magna.
                                        </p>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>

                    </Grid>
                    <Grid item xs={12} >
                        <div className='about-us-our-mission-card-container' >
                            <Grid container  >
                                <Grid item xs={12} md={5} >
                                    <div className="abou-us-ouver-mission-inner-heading" >
                                        <p>
                                            Integer sit amet justo in
                                            eros commod.
                                        </p>

                                    </div>
                                </Grid>
                                <Grid item xs={12} md={7} >
                                    <div className="abou-us-ouver-mission-inner-description">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies finibus ligula. In at convallis magna.
                                        </p>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>

                    </Grid>
                    <Grid item xs={12} >
                        <div className='about-us-our-mission-card-container' >
                            <Grid container  >
                                <Grid item xs={12} md={5} >
                                    <div className="abou-us-ouver-mission-inner-heading" >
                                        <p>
                                            Integer sit amet justo in
                                            eros commod.
                                        </p>

                                    </div>
                                </Grid>
                                <Grid item xs={12} md={7} >
                                    <div className="abou-us-ouver-mission-inner-description">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies finibus ligula. In at convallis magna.
                                        </p>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>

                    </Grid>

                </Grid>
            </div>

        </>
    )
}