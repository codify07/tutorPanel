import React from 'react'
import {Outlet} from 'react-router-dom'


export const MyCoursesMainPage = () => {
    return(
        <>
        
            <div>
                <Outlet />
            </div>
        
        </>
    )
}