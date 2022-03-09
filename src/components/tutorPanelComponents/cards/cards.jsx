import React, { useState } from 'react'
import './cards.css'
import totalEarning from '../../../assets/totalEarning.png'
import totalBookings from '../../../assets/colorMyBooking.png'
import arrow from '../../../assets/arrow.png'
import courses2 from '../../../assets/courses2.png'
import locationIcon from '../../../assets/locationicon.png'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import RemoveIcon from '@mui/icons-material/Remove';
import Collapse from '@mui/material/Collapse';



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
                    <Link to='course-detail' className="tutor-courses-card-know-more-btn" >
                        <p>
                            know more
                        </p>
                        <img src={arrow} alt="arrow" />
                    </Link>
                </div>
            </div>

        </>
    )
}


// course module card 

export const CourseModuleCard = () => {
    const [isDateAndTimeOpen, setIsDateAndTimeOpen] = useState(true);

    const handleTimeExpandClick = () => {
        setIsDateAndTimeOpen(isDateAndTimeOpen);
    };
    return (
        <>

            <div className='first-tutor-panel-course-module-card-container' >
                <div className='first-tutor-panel-course-module-card-expended-btn-container' >
                    <button expand={isDateAndTimeOpen}
                        onClick={handleTimeExpandClick} >
                        <RemoveIcon />
                        <p style={{ marginLeft: '15px' }} >
                            Educational institution
                        </p>
                    </button>
                </div>
                <div style={{ paddingLeft: '5%' }} >
                    <Collapse in={isDateAndTimeOpen} timeout="auto" unmountOnExit >
                        <div  >
                            <ul className='first-tutor-panel-course-maodule-card-modules-container' >
                                <li>
                                    Introduction
                                </li>
                                <li>
                                    Lorem Impusum
                                </li>
                                <li>
                                    Lorem Impusum
                                </li>
                                <li>
                                    Lorem Impusum
                                </li>
                                <li>
                                    Lorem Impusum
                                </li>
                            </ul>
                        </div>
                    </Collapse>
                </div>
            </div>


        </>
    )
}

// course module course date & time 


export const CourseModuleDateTime = () => {
    const [expanded, setExpanded] = useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <>

            <div className='first-tutor-panel-course-module-card-container' >
                <div className='first-tutor-panel-course-module-card-expended-btn-container' >
                    <button expand={expanded}
                        onClick={handleExpandClick} >
                        <RemoveIcon />
                        <p style={{ marginLeft: '15px' }} >
                            Date
                        </p>
                    </button>
                </div>
                <div style={{ paddingLeft: '5%' }} >
                    <Collapse in={expanded} timeout="auto" unmountOnExit >
                        <div  >
                            <ul className='first-tutor-panel-course-maodule-card-modules-container' >
                                <li>
                                    Start Date: 02 march 2022
                                </li>
                                <li>
                                    End date: 02 april 2022
                                </li>

                            </ul>
                        </div>
                    </Collapse>
                </div>
            </div>


        </>
    )
}

// course module course date & time 


export const CourseModuleTime = () => {
    const [expanded, setExpanded] = useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <>

            <div className='first-tutor-panel-course-module-card-container' >
                <div className='first-tutor-panel-course-module-card-expended-btn-container' >
                    <button expand={expanded}
                        onClick={handleExpandClick} >
                        <RemoveIcon />
                        <p style={{ marginLeft: '15px' }} >
                            Time
                        </p>
                    </button>
                </div>
                <div style={{ paddingLeft: '5%' }} >
                    <Collapse in={expanded} timeout="auto" unmountOnExit >
                        <div className='first-tutor-panel-course-module-time-container' >
                            <p>
                                9:00 am - 10:30 am
                            </p>
                            <p>
                                11:00 am - 12:30 pm
                            </p>
                            <p>
                                01:00 pm - 01:30 pm
                            </p>
                        </div>
                    </Collapse>
                </div>
            </div>


        </>
    )
}

// packages cards 


export const MyCoursesDetialPackageOne = () => {
    return (
        <>
            <div className="MyCoursesDetialPackageOne-container" >
                <div style={{ paddingBottom: '12px', paddingLeft: '14px' }} >
                    <p style={{ fontSize: '17px', textTransform: 'uppercase', fontWeight: '500' }} >
                        Packege 1
                    </p>
                </div>
                <div className='first-tutor-panel-courses-detail-package-card-container' >

                    <div className='first-tutor-panel-courses-detail-package-card-upper-heading-container' >
                        <div className='first-tutor-panel-courses-detail-package-card-upper-heading-left-side-div' >
                            <h4>
                                Pack of 5 classes
                            </h4>
                            <p>
                                Save by booking 5 classes
                            </p>
                        </div>
                        <div className='first-tutor-panel-courses-detail-package-card-upper-heading-right-side-div' >
                            <p>
                                $18/lesson
                            </p>
                            <button>
                                Select
                            </button>
                        </div>

                    </div>
                    <div className='first-tutor-panel-courses-detail-package-card-package-description-container' >
                        <p>
                            Buy the 5 lessons pack, you will save money and you will be able <br /> to do those lessons whenever it fits you best. <br />
                            You will have 6 months to use them.
                        </p>
                    </div>
                    <div className='first-tutor-panel-courses-detail-package-card-package-terms-conditions-container' >
                        <Link  to='' className='first-tutor-courses-detail-package-card-terms-btn' >
                            Terms & Conditions Apply
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

// package 2

export const MyCoursesDetialPackagetwo = () => {
    return (
        <>
            <div className="MyCoursesDetialPackageOne-container" >
                <div style={{ paddingBottom: '12px', paddingLeft: '14px' }} >
                    <p style={{ fontSize: '17px', textTransform: 'uppercase', fontWeight: '500' }} >
                        Packege 2
                    </p>
                </div>
                <div className='first-tutor-panel-courses-detail-package-card-container' >

                    <div className='first-tutor-panel-courses-detail-package-card-upper-heading-container' >
                        <div className='first-tutor-panel-courses-detail-package-card-upper-heading-left-side-div' >
                            <h4>
                                Pack of 10 classes
                            </h4>
                            <p>
                                Save by booking 5 classes
                            </p>
                        </div>
                        <div className='first-tutor-panel-courses-detail-package-card-upper-heading-right-side-div' >
                            <p>
                                $18/lesson
                            </p>
                            <button>
                                Select
                            </button>
                        </div>

                    </div>
                    <div className='first-tutor-panel-courses-detail-package-card-package-description-container' >
                        <p>
                            Buy the 5 lessons pack, you will save money and you will be able <br /> to do those lessons whenever it fits you best. <br />
                            You will have 6 months to use them.
                        </p>
                    </div>
                    <div className='first-tutor-panel-courses-detail-package-card-package-terms-conditions-container' >
                        <Link  to='' className='first-tutor-courses-detail-package-card-terms-btn' >
                            Terms & Conditions Apply
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}