import { Grid, Button } from '@mui/material';
import { createBrowserHistory } from 'history';
import React from 'react'
import './exploreCoursesPopup.css'
import vectorright from '../../assets/vectorright.png'





export const ExploreCoursesPopup = () => {
    return (
        <>

            <div className='explore-courses-header-container'>
                <div className='explore-courses-header-cotent-wrapper' >
                    <Grid container  >
                        <Grid item xs={6} lg={3}  >

                            <Button variant='text' className='courses-popup-btn' >
                                <img src={vectorright} alt="" />
                                <p>
                                    art & design
                                </p>
                            </Button> <br />
                            <Button variant='text' className='courses-popup-btn' >
                                <img src={vectorright} alt="" />
                                <p>
                                    Data & science
                                </p>
                            </Button> <br />
                            <Button variant='text' className='courses-popup-btn' >
                                <img src={vectorright} alt="" />
                                <p>
                                    business
                                </p>
                            </Button>
                            <br />
                            <Button variant='text' className='courses-popup-btn' >
                                <img src={vectorright} alt="" />
                                <p>
                                    Marketing
                                </p>
                            </Button>

                        </Grid>
                        <Grid item xs={6} lg={3} >
                            <Button variant='text' className='courses-popup-btn' >
                                <img src={vectorright} alt="" />
                                <p>
                                    Science and Engineering
                                </p>
                            </Button> <br />
                            <Button variant='text' className='courses-popup-btn' >
                                <img src={vectorright} alt="" />
                                <p>
                                    Construction and Engineering
                                </p>
                            </Button> <br />
                            <Button variant='text' className='courses-popup-btn' onClick={() => {
                                createBrowserHistory().push('/courses');
                                window.location.reload();
                            }} >
                                <img src={vectorright} alt="" />
                                <p>
                                    Education and Teaching
                                </p>
                            </Button>
                            <br />
                            <Button variant='text' className='courses-popup-btn' >
                                <img src={vectorright} alt="" />
                                <p>
                                    Health, Fitness and Medical
                                </p>
                            </Button>
                        </Grid>
                        <Grid item xs={6} lg={3} >
                            <Button variant='text' className='courses-popup-btn' >
                                <img src={vectorright} alt="" />
                                <p>
                                    Data & science
                                </p>
                            </Button> <br />
                            <Button variant='text' className='courses-popup-btn' >
                                <img src={vectorright} alt="" />
                                <p>
                                    Data & science
                                </p>
                            </Button> <br />
                            <Button variant='text' className='courses-popup-btn' >
                                <img src={vectorright} alt="" />
                                <p>
                                    business
                                </p>
                            </Button>
                            <br />
                            <Button variant='text' className='courses-popup-btn' >
                                <img src={vectorright} alt="" />
                                <p>
                                    Marketing
                                </p>
                            </Button>
                        </Grid>
                        <Grid item xs={6} md={6} lg={3} >
                            <Button variant='text' className='courses-popup-btn' >
                                <img src={vectorright} alt="" />
                                <p>
                                    Science and Engineering
                                </p>
                            </Button> <br />
                            <Button variant='text' className='courses-popup-btn' >
                                <img src={vectorright} alt="" />
                                <p>
                                    Construction and Engineering
                                </p>
                            </Button> <br />
                            <Button variant='text' className='courses-popup-btn' >
                                <img src={vectorright} alt="" />
                                <p>
                                    Education and Teaching
                                </p>
                            </Button>
                            <br />
                            <Button variant='text' className='courses-popup-btn' >
                                <img src={vectorright} alt="" />
                                <p>
                                    Marketing
                                </p>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>

        </>
    )
}