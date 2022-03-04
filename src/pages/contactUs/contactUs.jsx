import { Button, Grid } from '@mui/material'
import React from 'react'
import { AppBar } from '../../components/abbbar/appbar'
import { BodyHeader } from '../../components/bodyheader/bodyheader'
import './contactUs.css'
import locationOffice from '../../assets/contact-us-location.png'
import simpleEmail from '../../assets/email-simple.png'
import simpleCall from '../../assets/call-simple.png'
import { Footer } from '../../components/footer/footer'



export const ContactUs = () => {
    return (
        <>
            {/* appbar */}

            <div>
                <AppBar />
            </div>

            {/* body header */}
            <div>
                <BodyHeader />
            </div>

            {/* main body content */}

            <div className="contact-us-main-body-content-wraper" >
                <Grid container spacing={2} >
                    <Grid item xs={12} >
                        <h1 className='contact-us-body-heading' >
                            Get in touch
                        </h1>
                    </Grid>
                    <Grid item xs={12} >
                        <p className='cotact-us-body-para' >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies finibus ligula. In at convallis magna.
                        </p>
                    </Grid>
                </Grid>

                {/* contact us form */}

                <div className="contact-us-form-container" >
                    <Grid container columnSpacing={3} rowSpacing={2} >
                        <Grid item xs={12} lg={7}  >
                            <Grid container columnSpacing={6} rowSpacing={4} >
                                <Grid item xs={12} md={6} >
                                    <div className='contact-us-field-container' >
                                        <input placeholder='First Name' />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <div className='contact-us-field-container' >
                                        <input placeholder='First Name' />
                                    </div>
                                </Grid>
                                <Grid item xs={12} >
                                    <div className='contact-us-field-container' >
                                        <input placeholder='Email' />
                                    </div>
                                </Grid>
                                <Grid item xs={12} >
                                    <div className='contact-us-field-container' >
                                        <textarea placeholder='Enter your message' />
                                    </div>
                                </Grid>
                                <Grid item xs={12} >
                                    <div className='contact-us-field-container' >
                                        <Button variant='text' className='contact-us-send-msg-btn' >
                                            send your message
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={5} >
                            <div className='contact-us-office-card' >
                                <div className="contact-us-office-card-content" >
                                    <img src={locationOffice} alt="pic"  />
                                    <div className="contact-us-text" >
                                        <h5  >
                                            Home Office
                                        </h5>
                                        <p>
                                            Maypole Crescent 70-80 Upper
                                            St Norwich NR2 1LT
                                        </p>
                                    </div>
                                </div>
                                <div className="contact-us-office-card-content" >
                                    <img src={simpleEmail} alt="pic" />
                                    <div className="contact-us-text" style={{marginLeft:'12px'}} >
                                        <h5>
                                            Email
                                        </h5>
                                        <p style={{wordWrap:'break-word'}}  >
                                            support@amafclasses.com
                                        </p>
                                        <p  >
                                            support@amafclasses.com
                                        </p>
                                    </div>
                                </div>
                                <div className="contact-us-office-card-content"  >
                                    <img src={simpleCall} alt="pic" />
                                    <div className="contact-us-text" style={{marginLeft:'13px'}} >
                                        <h5>
                                            Phone Number
                                        </h5>
                                        <p>
                                            +971 4 2276330
                                        </p>
                                        <p>
                                            +971 6 7442236
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>


            </div>

            {/* footer */}

            <div>
                <Footer/>
            </div>

        </>
    )
}