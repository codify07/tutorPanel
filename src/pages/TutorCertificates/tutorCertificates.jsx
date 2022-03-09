import React from 'react'
import { TutorAppBar } from '../../components/abbbar/appbar'
import { Footer } from '../../components/footer/footer'
import { TutorCertificates } from '../../components/registrationComponents/registrationComponents'
import {TutorFooter} from '../../components/footer/footer'





export const TutorCertificatesPage = () => {
    return (
        <>

            {/* appbar */}

            <div>
                <TutorAppBar />
            </div>

            {/* body */}

            <div>
                <TutorCertificates />
            </div>

            {/* footer */}

            <div>
                <TutorFooter />
            </div>
        </>
    )
}