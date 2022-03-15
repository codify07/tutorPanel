import React from 'react'
import {Outlet} from 'react-router-dom'
import './quiz.css'
import {Grid} from '@mui/material'


export const CreateQuizParent = () => {
    return(
        <>

            <div className='tutor-create-quiz-parent-page-container--' >
              <div>
                  <Grid container spacing={2} >
                    <Grid item xs={12} >
                        <div className='tutor-create-quiz-parent-page-create-quiz-btn-contianer--' >
                            <button>
                                create quiz
                            </button>
                        </div>
                    </Grid>
                  </Grid>
              </div>
              <Outlet />  
            </div>
        
        </>
    )
}