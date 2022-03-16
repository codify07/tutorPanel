import React from 'react'
import {Outlet} from 'react-router-dom'
import './quiz.css'
import {Grid} from '@mui/material'


export const CreateQuizParent = () => {
    return(
        <>

            <div className='tutor-create-quiz-parent-page-container--' >
              
              <Outlet />  
            </div>
        
        </>
    )
}