import React from 'react'
import './bodyHeader.css'



export const BodyHeader = () => {
    const path = window.location.pathname.split('/');
    return (
        <>
            <div className='header-container' >
                <div className='content-wrapper' >
                    <p style={{ fontSize: '30px',textTransform:'capitalize' }} >
                        {path}
                    </p>
                    <p style={{ marginTop: '5px' }} >
                        Home / Deals
                    </p>
                </div>
            </div>
        </>
    )
}