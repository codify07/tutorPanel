import { Button, Grid } from '@mui/material'
import React from 'react'
import footer from '../../assets/footer.png'
import logo from '../../assets/logo.png'
import './footer.css'
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';



export const Footer = () => {
    return (
        <>
            <div className="footer-component-container" style={{ backgroundImage: `url(${footer})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }} >
                <div className="footer-component-content-wrapper" >
                    <div className="footer-component-upper-content" >
                        <Grid container spacing={2} >
                            <Grid item xs={12} md-={6} lg={3} >
                                <div className="footer-component-inner-content-wrapper" >
                                    <div className='footer-component-heading-div' >
                                        <img src={logo} alt="" />
                                    </div>
                                    <div className='footer-component-list-items-div' >
                                        <div>
                                            <p style={{ width: '90%' }} >
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla velit sed diam vestibulum, quis finibus elit rutrum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md-={6} lg={3} >
                                <div className="footer-component-inner-content-wrapper" >
                                    <div className='footer-component-heading-div' >
                                        <p>
                                            quick link
                                        </p>
                                    </div>
                                    <div className='footer-component-list-items-div' >
                                        <div>
                                            <Button variant="text" className='footer-links' >
                                                home
                                            </Button> <br />
                                            <Button variant="text" className='footer-links' >
                                                courses
                                            </Button><br />
                                            <Button variant="text" className='footer-links' >
                                                about us
                                            </Button><br />
                                            <Button variant="text" className='footer-links' >
                                                contact us
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md-={6} lg={3} >
                                <div className="footer-component-inner-content-wrapper" >
                                    <div className='footer-component-heading-div' >
                                        <p  >
                                            download app
                                        </p>
                                    </div>
                                    <div className='footer-component-list-items-div' >
                                        <div>
                                            <Button variant="contained" style={{ backgroundColor: 'black', color: 'white', padding: '11px 30px',  }} >
                                                google play
                                            </Button> <br />
                                            <Button variant="text" style={{ backgroundColor: 'black', color: 'white', padding: '11px 30px', marginTop: '15px' }}>
                                                App store
                                            </Button><br />

                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md-={6} lg={3} >
                                <div className="footer-component-inner-content-wrapper" >
                                    <div className='footer-component-heading-div' >
                                        <p>
                                            contact us
                                        </p>
                                    </div>
                                    <div className='footer-component-list-items-div' >
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: '20px' }} >
                                            <EmailIcon style={{ marginRight: '15px' }} />
                                            <p>
                                                Support@amafclasses.com
                                            </p>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: '15px' }} >
                                            <PhoneInTalkIcon style={{ marginRight: '15px' }} />
                                            <p>
                                                +971 1 2345678
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <div className='footer-component-lower-content' >
                        <Grid container  >
                            <Grid item xs={12} lg={4} >

                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </>
    )
}