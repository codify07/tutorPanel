import React from 'react'
import {Outlet} from 'react-router-dom'



export const ViewQuizParent = () => {
    return(
        <>
            <div>
                <Outlet />
            </div>
        
        </>
    )
}