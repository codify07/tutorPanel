import React from 'react'
import { AppBar } from '../../components/abbbar/appbar'
import { Footer } from '../../components/footer/footer'
import { TutorCertificates } from '../../components/registrationComponents/registrationComponents'





export const TutorCertificatesPage = () => {
    return (
        <>

            {/* appbar */}

            <div>
                <AppBar />
            </div>

            {/* body */}

            <div>
                <TutorCertificates />
            </div>

            {/* footer */}

            <div>
                <Footer />
            </div>
        </>
    )
}