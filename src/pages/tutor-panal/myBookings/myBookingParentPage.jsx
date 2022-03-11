import React from 'react'
import {Outlet} from 'react-router-dom'



export const MyBookingParentPage = () => {
    return(
        <>

            <div>
                <Outlet />
            </div>
        
        </>
    )
}