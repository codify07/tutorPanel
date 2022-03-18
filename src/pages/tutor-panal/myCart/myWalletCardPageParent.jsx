import React from 'react'
import {Outlet} from 'react-router-dom'


export const CheckWalletParent = () => {
    return(
        <>
            <div>
                <Outlet />
            </div>
        </>
    )
}