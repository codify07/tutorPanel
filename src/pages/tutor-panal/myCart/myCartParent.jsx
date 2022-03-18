import React from 'react'
import {Outlet} from 'react-router-dom'



export const MyCartParent = () => {
    return(
        <>
        
            <div style={{width:'95%',margin:'auto',paddingTop:'20px',paddingBottom:'40px'}} >
                <Outlet />
            </div>
        
        </>
    )
}