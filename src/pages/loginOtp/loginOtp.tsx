import React from 'react'
import './loginOtp.css'
import { AppBar } from '../../components/abbbar/appbar'
import { Button } from '@mui/material'
import otpIcon from '../../assets/otpIcon.png'


export const LoginOtpScreen = () => {
    return (
        <>
            {/* appbar */}

            <div>
                <AppBar />
            </div>

            {/* body */}

            <div className='login-otp-container' >
                <div className="login-otp-icon" >
                    <img src={otpIcon} alt="" />
                </div>
                <div className='login-otp-text' >
                    <p>
                        Please enter the verification code we sent to
                        your email address <span style={{fontWeight:'bold'}} > davidanderson@gmail.com </span>
                    </p>
                </div>
                <div className='login-otp-digits-container' >
                    <p>
                        0
                    </p>
                    <p>
                        0
                    </p>
                    <p>
                        0
                    </p>
                    <p>
                        0
                    </p>
                </div>
                <div className='login-otp-submit-btn' >
                    <Button variant='text' className="otp-submit-btn" >
                        submit
                    </Button>
                </div>
            </div>

        </>
    )
}