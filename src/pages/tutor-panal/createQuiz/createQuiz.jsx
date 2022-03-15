import React from 'react'
import {Grid} from '@mui/material'
import {QuizTable} from '../../../components/tutorPanelComponents/tables/tables'
import {Quiztitle,QuizStatus,StartEndDate} from '../../../components/tutorPanelComponents/fields/searchFields'



export const CreateQuizTable = () => {
    return(
        <>

            <div style={{marginTop:'20px'}} >
                <Grid container spacing={2} >
                    <Grid item xs={12} lg={4} >
                        <div>
                            <Quiztitle />
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={1} >
                        <div>
                            <QuizStatus />
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={4} >
                        <div>
                            <StartEndDate />
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={3} >
                        <div className='createQuiz-filter-apply-btn-container-' >
                            
                            <button>
                                Apply
                            </button>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div style={{marginTop:'20px'}} >
                            <QuizTable />
                        </div>
                    </Grid>
                </Grid>
            </div>
        
        </>
    )
}