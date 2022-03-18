import React from 'react'
import { Outlet } from 'react-router-dom'
import { Grid, } from '@mui/material'
import './dispute.css'
import { DisputeSearchByAdmin } from '../../../components/tutorPanelComponents/fields/searchFields'
import { DisputeSearchByBooking } from '../../../components/tutorPanelComponents/fields/searchFields'
import { DisputeStatus } from '../../../components/tutorPanelComponents/fields/searchFields'
import { StartEndDate } from '../../../components/tutorPanelComponents/fields/searchFields'
import { DisputeTable } from '../../../components/tutorPanelComponents/tables/tables'
import {Link} from 'react-router-dom'




export const Dispute = () => {
    return (
        <>

            <div>
                <Grid container spacing={2} >
                    <Grid item xs={12} >
                        <div className='tutor-panel-dispute-page-header-container' >
                            <button style={{marginTop:'25px'}} >
                                download
                            </button>
                            <Link to='create-dispute' style={{textDecoration:'none'}}  >
                                <button className='tutor-panel-dispute-page-header-create-dispute--btn' >
                                    create
                                </button>
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}  >
                        <div>
                            <DisputeSearchByBooking />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} lg={2}  >
                        <div>
                            <DisputeSearchByAdmin />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} lg={2}  >
                        <div>
                            <DisputeStatus />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}  >
                        <div>
                            <StartEndDate />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} lg={2}  >
                        <div className='tutor-panel-dispute-page-apply-btn-container'  >
                            <button>
                                apply
                            </button>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div>
                            <DisputeTable />
                        </div>
                    </Grid>
                </Grid>
            </div>

        </>
    )
}