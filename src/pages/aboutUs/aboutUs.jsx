import React from 'react'
import { AppBar } from '../../components/abbbar/appbar'
import { AchieveYourGoals, OurMission, OurVision, WhyChoseMe } from '../../components/aboutUsBodyCards/aboutUsBodyCards'
import { BodyHeaderAboutUs } from '../../components/bodyheader/bodyheader'
import { Footer } from '../../components/footer/footer'
import { OurStudentSays } from '../../components/ouStudentSays/ourStudentSays'
import './aboutUs.css'




export const AboutUs = () => {
    return(
        <>
            {/* appbar */}

            <div>
                <AppBar/>
            </div>

            {/* body header */}

            <div>
                <BodyHeaderAboutUs/>
            </div>

            {/* body main content */}

            <div>
                <AchieveYourGoals />
                <WhyChoseMe />
                <OurVision  />
                <OurMission />
                <OurStudentSays />
            </div>

            {/* footer */}

            <div style={{marginTop:'50px'}} >
                <Footer />
            </div>
        
        </>
    )
}