import { Button } from '@mui/material'
import React from 'react'
import './coursesPageTabs.css'



export const All = () => {
    return (
        <>

            <div className='component-courses-tabs-container' >
                <div>
                    <Button variant='text' className="component-courses-tabs-btn"  >
                        all
                    </Button>
                </div>
                
            </div>


        </>
    )

}

// art and disign

export const ArtAndDesign = () => {
    return (
        <>
            <div>
                <Button variant='text' className="component-courses-tabs-btn" >
                    Art & design
                </Button>
            </div>

        </>
    )

}

// data and science

export const DataAndScience = () => {
    return (
        <>
            <div>
                <Button variant='text' className="component-courses-tabs-btn" >
                    data & science
                </Button>
            </div>

        </>
    )

}

// bussiness

export const BusinessTab = () => {
    return (
        <>
            <div>
                <Button variant='text' className="component-courses-tabs-btn" >
                    Business
                </Button>
            </div>

        </>
    )

}

// marketting 

export const Marketing = () => {
    return (
        <>
            <div>
                <Button variant='text' className="component-courses-tabs-btn" >
                    marketing
                </Button>
            </div>

        </>
    )

}