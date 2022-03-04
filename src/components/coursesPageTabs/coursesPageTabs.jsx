import { Button } from '@mui/material'
import React from 'react'
import './coursesPageTabs.css'



export const CoursesTabs = () => {
    return (
        <>

            <div className='component-courses-tabs-container' >
                <div>
                    <Button variant='text' className="component-courses-tabs-btn"  >
                        all
                    </Button>
                </div>
                <div>
                    <Button variant='text' className="component-courses-tabs-btn" >
                        Art & design
                    </Button>
                </div>
                <div>
                    <Button variant='text' className="component-courses-tabs-btn" >
                        Data & science
                    </Button>
                </div>
                <div>
                    <Button variant='text' className="component-courses-tabs-btn" >
                        business
                    </Button>
                </div>
                <div>
                    <Button variant='text' className="component-courses-tabs-btn" >
                        marketing
                    </Button>
                </div>
                <div>
                    <Button variant='text' className="component-courses-tabs-btn" >
                        Art & design
                    </Button>
                </div>
                <div>
                    <Button variant='text' className="component-courses-tabs-btn" >
                        Data & science
                    </Button>
                </div>
                <div>
                    <Button variant='text' className="component-courses-tabs-btn" >
                        business
                    </Button>
                </div>
            </div>


        </>
    )
}