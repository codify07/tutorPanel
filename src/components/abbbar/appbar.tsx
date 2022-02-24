import { Button, Grid } from '@mui/material'
import React from 'react'
import { createBrowserHistory } from 'history'
import { useTheme,Avatar } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import FmdGoodSharpIcon from '@mui/icons-material/FmdGoodSharp';
import logo from '../../assets/logo.png'
import './apbar.css'



export const AppBar = () => {
    const theme = useTheme();
    const isMatch = theme.breakpoints.down('md');
    return (
        <>
            <div>
                <Grid container >

                    {/* ______ UPPER HEADER _________ */}

                    <Grid item xs={12} >
                        <div className='upper-header-container' >
                            <div className='upper-header-content-wraper' >
                                <div className='support-button-wraper' >
                                    <Button variant='text' className='button-with-icon' style={{ borderRight: '1px solid lightgray', borderRadius: '0px', paddingRight: '20px' }} >
                                        <MailIcon className="icon" />
                                        <p>
                                            support@amafclassis.com
                                        </p>
                                    </Button>
                                    <Button variant='text' className='button-with-icon' >
                                        <PhoneInTalkIcon className="icon" />
                                        <p>
                                            +971 1 2345678
                                        </p>
                                    </Button>
                                </div>
                                <div>

                                    <Button variant='text' className='button-with-icon' >
                                        <FmdGoodSharpIcon className="icon" />
                                        <p>
                                            374 William S Canning Blvd, MA 2721, uae
                                        </p>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Grid>

                    {/* ____ MAIN HEADER */}

                    <Grid item xs={12} >
                        <div className='main-appbar-container' >
                            <div className='main-appbar-content-wraper' >
                                <div className="logo-container" >
                                    <img src={logo} alt="logo" />
                                </div>
                                <div className='nav-links' >
                                    <Button className='nav-links-btn' variant='text'  >
                                        Home 
                                    </Button>
                                    <Button className='nav-links-btn' variant='text'  >
                                        courses 
                                    </Button>
                                    <Button className='nav-links-btn' variant='text'  >
                                        about us
                                    </Button>
                                    <Button className='nav-links-btn' variant='text'  >
                                        contact us
                                    </Button>

                                </div>
                                <div  >
                                    <Button className='sign-up-btn' variant='contained'  >
                                        sign up
                                    </Button>                                    
                                </div>
                            </div>
                        </div>
                    </Grid>

                </Grid>
            </div>
        </>
    )
}