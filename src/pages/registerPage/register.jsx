import React, { useState } from 'react'
import './register.css'
import { AppBar } from '../../components/abbbar/appbar'
import istock from '../../assets/istock.png'
import { Button, Grid } from '@mui/material'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import certificate from '../../assets/documentpdf.png'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Footer } from '../../components/footer/footer'
import { createBrowserHistory } from 'history'
import {StudentRegistration} from '../../components/registrationComponents/registrationComponents'
import {TutorRegistration} from '../../components/registrationComponents/registrationComponents'
import {Outlet} from 'react-router-dom'


export const Register = () => {

    return (
        <>
            <div>
                <StudentRegistration />
            </div>
        </>
    )
}


