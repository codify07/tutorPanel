import React from 'react'
import { AppBar } from '../../components/abbbar/appbar'
import { BodyHeader } from '../../components/bodyheader/bodyheader'
import './topDeal.css'
import {TopDeals} from '../../components/dealCard/dealCard'
import { Footer } from '../../components/footer/footer'



export const TopDeal = () => {
    return(
        <>
            {/* appbar */}

            <div>
                <AppBar/>
            </div>

            {/* ________ body _____ */}

            <div>
                <BodyHeader/>
            </div>

            <div className='top-deals-card-container' >
                <TopDeals/>
            </div>

            {/* footer  */}

            <div>
                <Footer/>
            </div>

        </>
    )
}