import React from 'react'
import avatar2 from '../../../assets/avatar2.png'
import './myBookings.css'
import { Avatar, Grid } from '@mui/material'
import PurchaseCourseChart from '../../../components/charts/analyticsPurshaseCourse/purchaseCourseChart'
import TotalEarningChart from '../../../components/charts/analyticsTotalEarningChart/analyticsTotalEarningChart'
import {StartEndDateAnalytics,AnalyticsMonthly} from '../../../components/tutorPanelComponents/fields/searchFields'


export const Analytics = () => {
    return (
        <>

            <div className="tutor-analytics-page-container" >

                {/* header */}

                <div className='tutor-mybooking-analytics-page-header-cont' >
                    <Avatar style={{ width: '55px', height: '55px' }} >
                        <img src={avatar2} alt="pic" width='100%' />
                    </Avatar>
                    <div className='tutor-mybooking-analytics-page-header-text' >
                        <h2>
                            Samantha aryton
                        </h2>
                        <p>
                            Refer by david anderson from facebook
                        </p>
                    </div>
                </div>

                {/* body */}

                <div style={{ marginTop: '30px' }} >
                    <Grid container spacing={2} >
                        <Grid xs={12} >
                            <div>
                                <PurchaseCourseChart />
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div style={{ marginTop: '30px' }} >
                    <Grid container spacing={2} >
                        <Grid item xs={12} >
                            <div style={{paddingBottom:'20px'}} >
                                <Grid container spacing={2} >
                                    <Grid item xs={12} md={7} >
                                        <p style={{fontSize:'18px',fontWeight:'500'}} >
                                            Total Earning
                                        </p>
                                    </Grid>
                                    <Grid item xs={12} md={3} >
                                        <div>
                                            <StartEndDateAnalytics />
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} md={2} >
                                        <div>
                                            <AnalyticsMonthly />
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                            <div>
                                <TotalEarningChart />
                            </div>
                        </Grid>
                    </Grid>
                </div>


            </div>

        </>
    )
}