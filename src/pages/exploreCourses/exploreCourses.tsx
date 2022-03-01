import React from 'react'
import { AppBar } from '../../components/abbbar/appbar'
import { TopDeals } from '../../components/dealCard/dealCard'
import { ExploreCoursesPopup } from '../../components/exploreCourses/exploreCoursesPopup'
import { Footer } from '../../components/footer/footer'
import './exploreCoursesPage.css'




export const ExploreCoursesPage = () => {
    return (
        <>
            {/* appbar */}

            <div>
                <AppBar />
            </div>

            {/* body */}

            <div>
                <ExploreCoursesPopup />
            </div>

            <div className='explore-courses-body-cards-container' >
                <TopDeals />
            </div>
            {/* footer */}

            <div className='explore-courses-page-footer-container' >
                <Footer />
            </div>


        </>
    )
}