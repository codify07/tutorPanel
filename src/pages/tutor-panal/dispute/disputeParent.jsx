import React from 'react'
import {Outlet} from 'react-router-dom'




export const DisputeParent = () => {
    return(
        <>

            <div style={{paddingTop:'20px',paddingBottom:'40px',width:'95%',margin:'auto'}} >
                <Outlet />
            </div>
        
        </>
    )
}