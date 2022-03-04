import { Button } from '@mui/material'
import React from 'react'
import background1 from '../../assets/untitled-1.png'
import dealcard2 from '../../assets/dealcard2.png'
import dealcard3 from '../../assets/dealcard3.png'
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
                    </Button>
                    <p  className="deal-card-term-btn"  >
                        Term & condition Apply 
                    </p>
                </div>
            </div>

        </>
    )
};

export const TopDeals = () => {
    return(
        <>
           <div style={{backgroundImage:`url(${background1})`}} className='deal-card-container' >
                <div className='deal-card-content-wrapper' >
                    <p className='deal-card-secondary-heading' >
                        Great Online Class For Your EDUCATION
                    </p>
                    <p className='deal-card-primary-heading' >
                        up to 50% discount
                    </p>
                    <p className='deal-card-description' >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies finibus ligula. In at convallis magna.
                    </p>
                    <Button variant='contained' size='small' className="deal-card-prshase-btn" >
                        purchase deal
                    </Button>
                    <p  className="deal-card-term-btn"  >
                        Term & condition Apply 
                    </p>
                </div>
            </div>
            <div style={{backgroundImage:`url(${dealcard2})`,marginTop:'30px'}} className='deal-card-container' >
                <div className='deal-card-content-wrapper' >
                    <p className='deal-card-secondary-heading' >
                        Great Online Class For Your EDUCATION
                    </p>
                    <p className='deal-card-primary-heading' >
                        up to 40% discount
                    </p>
                    <p className='deal-card-description' >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies finibus ligula. In at convallis magna.
                    </p>
                    <Button variant='contained' size='small' className="deal-card-prshase-btn" >
                        purchase deal
                    </Button>
                    <p  className="deal-card-term-btn"  >
                        Term & condition Apply 
                    </p>
                </div>
            </div> 
            <div style={{backgroundImage:`url(${dealcard3})`,marginTop:'30px'}} className='deal-card-container' >
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
                    </Button>
                    <p  className="deal-card-term-btn"  >
                        Term & condition Apply 
                    </p>
                </div>
            </div> 
        </>
    )
}