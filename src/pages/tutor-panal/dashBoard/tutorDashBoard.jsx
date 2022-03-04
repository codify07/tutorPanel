import React from 'react'
import { Grid } from '@mui/material'
import './tutorDashboard.css'
import { TotalEarningCard } from '../../../components/tutorPanelComponents/cards/cards'
import { TotalBooking } from '../../../components/tutorPanelComponents/cards/cards'
import EarningChart from '../../../components/charts/earningChart/earningChart'
import ProgressChart from '../../../components/charts/progressChart/progressChart'
import droparrow from '../../../assets/blackDropDown.png'
import { CalendarComponent } from '../../../components/calendar/calendar'
import arrowRight from '../../../assets/arrow.png'
import { EnglishClassCard } from '../../../components/tutorPanelComponents/cards/cards'
import { MathsClassCard } from '../../../components/tutorPanelComponents/cards/cards'
import { ScienceClassCard } from '../../../components/tutorPanelComponents/cards/cards'



export const Dashboard = () => {
    return (
        <>

            <div className='tutor-dashboard-body-container' >
                <Grid container columnSpacing={4} >
                    <Grid item xs={12} lg={8} >
                        <div className='tutor-dashboard-body-left-side-container' >
                            <h2>
                                Hello, David Anderson
                            </h2>
                            <div className='tutor-dashboard-body-left-side-map-container' >

                            </div>
                            <div className='tutor-dashboard-body-left-side-cards-container' >
                                <div className='tutor-dashboard-body-left-side-card-left' >
                                    <TotalEarningCard />
                                </div>
                                <div className='tutor-dashboard-body-left-side-card-right' >
                                    <TotalBooking />
                                </div>
                            </div>
                            <div className='tutor-dashboard-body-left-side-earning-chart' >
                                <div>
                                    <div className='tutor-dashboard-body-left-side-earning-chart-header' >
                                        <p>
                                            earnings
                                        </p>
                                        <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', width: '120px', padding: '8px', border: '1px solid lightgray', borderRadius: '4px' }} >
                                            <p  >
                                                Weakly
                                            </p>
                                            <img src={droparrow} alt="" />
                                        </button>
                                    </div>
                                    <EarningChart />
                                </div>
                            </div>
                            <div className='tutor-dashboard-body-left-side-progress-chart' >
                                <div>
                                    <div className='tutor-dashboard-body-left-side-earning-chart-header' >
                                        <p>
                                            your prorgress
                                        </p>

                                    </div>
                                    <ProgressChart />
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={4} >
                        <div className='tutor-dashboard-body-right-side-container' >
                            <div style={{ borderBottom: '1px solid #E0E0E0', paddingBottom: '15px' }} >
                                <CalendarComponent />
                            </div>
                            <div className='tutor-dashboard-body-right-side-upcomming-div' >
                                <p>
                                    Upcomming
                                </p>
                                <button>
                                    <p style={{ marginRight: '12px' }} > see all </p>
                                    <img src={arrowRight} alt="arrow" width='24px' />
                                </button>
                            </div>
                            <div>
                                <EnglishClassCard />
                                <MathsClassCard />
                                <ScienceClassCard />
                                <MathsClassCard />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>

        </>
    )
}