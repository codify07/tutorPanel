import React from 'react'
import './cards.css'
import totalEarning from '../../../assets/totalEarning.png'
import totalBookings from '../../../assets/colorMyBooking.png'
import arrow from '../../../assets/arrow.png'
import courses2 from '../../../assets/courses2.png'
import locationIcon from '../../../assets/locationicon.png'
import {Button} from '@mui/material'



export const TotalEarningCard = () => {
    return (
        <>

            <div className='tutor-total-earing-card-container' >
                <div className='tutor-total-earing-card-icon-container' >
                    <img src={totalEarning} alt="" />
                </div>
                <div className='tutor-total-earing-card-text-container' >
                    <h4>
                        Total Earnings
                    </h4>
                    <p>
                        $3,65,000
                    </p>
                </div>
            </div>

        </>
    )
}


// total booking 

export const TotalBooking = () => {
    return (
        <>

            <div className='tutor-total-booking-card-container' >
                <div className='tutor-total-booking-card-icon-container' >
                    <img src={totalBookings} alt="" />
                </div>
                <div className='tutor-total-booking-card-text-container' >
                    <h4>
                        Total bookings
                    </h4>
                    <p>
                        1032
                    </p>
                </div>
            </div>

        </>
    )
}


// upcomming cords 


export const EnglishClassCard = () => {
    return (
        <>

            <div className='tutor-upcomming-card-container' >
                <div className='tutor-upcomming-card-left-container' >
                    <h4>
                        English Class
                    </h4>
                    <p>
                        3rd Lesson
                    </p>
                </div>
                <div className='tutor-upcomming-card-text-container' >
                    <p>
                        18:00 - 19:30
                    </p>
                </div>
            </div>

        </>
    )
}

// math class card

export const MathsClassCard = () => {
    return (
        <>

            <div className='tutor-upcomming-math-card-container' >
                <div className='tutor-upcomming-math-card-left-container' >
                    <h4>
                        Maths Class
                    </h4>
                    <p>
                        2rd Lesson
                    </p>
                </div>
                <div className='tutor-upcomming-card-math-text-container' >
                    <p>
                        16:00 - 19:30
                    </p>
                </div>
            </div>

        </>
    )
}

// science class 

export const ScienceClassCard = () => {
    return (
        <>

            <div className='tutor-upcomming-math-card-container' >
                <div className='tutor-upcomming-math-card-left-container' >
                    <h4>
                        science Class
                    </h4>
                    <p>
                        4rd Lesson
                    </p>
                </div>
                <div className='tutor-upcomming-card-math-text-container' >
                    <p>
                        16:00 - 17:30
                    </p>
                </div>
            </div>

        </>
    )
}



// courses mini card 

export const CoursesMiniCard = () => {
    return (
        <>

            <div className="tutor-courses-card-container" >
                <div>
                    <img src={courses2} alt="pic" className="tutor-courses-card-img" />
                </div>
                <div>
                    <p className="tutor-courses-card-title" >
                        Lorem ipsum dolor sit a...
                    </p>
                </div>
                <div className="tutor-courses-card-description" >
                    <img src={locationIcon} alt="icn" />
                    <p>
                        Burnside
                    </p>
                </div>
                <div className="tutor-courses-card-actions-container" >
                    <Button size="large" variant='contained' className="tutor-courses-card-price-btrn" >
                        $20.00
                    </Button>
                    <Button variant='text' className="tutor-courses-card-know-more-btn" >
                        <p>
                            know more
                        </p>
                        <img src={arrow} alt="arrow" />
                    </Button>
                </div>
            </div>

        </>
    )
}