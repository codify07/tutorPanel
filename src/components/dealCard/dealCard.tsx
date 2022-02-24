import { Button } from '@mui/material'
import { createStyled } from '@mui/system'
import React from 'react'
import background1 from '../../assets/untitled-1.png'
import './dealCard.css'




export const DealCard = () => {
    return(
        <>
            <div style={{backgroundImage:`url(${background1})`}} className='deal-card-container' >
                <div className='deal-card-content-wrapper' >
                    <p className='deal-card-secondary-heading' >
                        Great Online Class For Your EDUCATION
                    </p>
                    <p className='deal-card-primary-heading' >
                        up to 30% discount
                    </p>
                    <p className='deal-card-description' >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies finibus ligula. In at convallis magna.
                    </p>
                    <Button variant='contained' size='small' className="deal-card-prshase-btn" >
                        purchase deal
                    </Button> <br />
                    <Button variant='text' className="deal-card-term-btn"  >
                        Term & condition Apply
                    </Button>
                </div>
            </div>
        </>
    )
}