import React from 'react'
import {Grid} from '@mui/material'
import './transactionHistory.css'
import {TransactionHistoryTitle} from '../../../components/tutorPanelComponents/fields/searchFields'
import {StartEndDate} from '../../../components/tutorPanelComponents/fields/searchFields'
import {TransactionHistoryTable} from '../../../components/tutorPanelComponents/tables/tables'


export const TransactionHistory = () => {
    return(
        <>
            <div style={{paddingTop:'20px',width:'95%',margin:'auto',paddingBottom:'40px'}} >
                <Grid container spacing={2} >
                    <Grid item xs={12} >
                        <div className='tutor-panel-transaction-history-page-header-btn-container' >
                            <button>
                                download
                            </button>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} >
                        <div>
                            <TransactionHistoryTitle />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} >
                        <div>
                            <StartEndDate />
                        </div>
                    </Grid>
                    <Grid item xs={12}  lg={4} >
                        <div className='tutor-panel-transaction-history-filter-apl-aply-btn-container' >
                            <button>
                                apply
                            </button>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div>
                            <TransactionHistoryTable />
                        </div>
                    </Grid>
                </Grid>
            </div>
        
        </>
    )
}