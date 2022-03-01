import { Grid, Button } from '@mui/material'
import React from 'react'
import certificate from '../../assets/documentpdf.png'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import istock from '../../assets/istock.png'
import './registrationComponents.css'
import { createBrowserHistory } from 'history';

export const TutorCertificates = () => {
    return (
        <>

            <div className='register-body-header-container' style={{ backgroundImage: `url(${istock})`, backgroundRepeat: 'no-repeat', }}  >
                <p>
                    start learning
                </p>
                <h1>
                    Register for Amaf classes
                </h1>
            </div>

            <div className='component-register-certificates-style-container' >
                <Grid container spacing={2} >
                    <Grid item xs={12} >
                        <div className='component-register-certificates-heading' >
                            <p>
                                Add your certificate
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className='component-register-field-container'>
                            <p>
                                Add your Education Certificate
                            </p>
                        </div>

                    </Grid>
                    <Grid item xs={3} >
                        <div style={{ width: '100%', height: "100%" }} >
                            <img src={certificate} alt="certificate" style={{ width: '100%', height: '100%' }} />
                        </div>

                    </Grid>
                    <Grid item xs={3} >
                        <div style={{ width: '100%', height: "100%" }} >
                            <img src={certificate} alt="certificate" style={{ width: '100%', height: '100%' }} />
                        </div>

                    </Grid>
                    <Grid item xs={3} >
                        <div className='component-register-add-certificate-btn-container' >
                            <Button className='component-register-add-certificate-btn' >
                                <AddOutlinedIcon style={{ fontSize: '80px' }} />
                            </Button>
                        </div>
                        <p style={{ color: 'gray', marginTop: '5px' }} >
                            (upload only pnj.jpg.pdf)
                        </p>
                    </Grid>
                </Grid>


                {/* experience */}

                <div style={{ marginTop: '50px' }} >
                    <Grid container spacing={2} >

                        <Grid item xs={12} >
                            <div className='component-register-field-container'>
                                <p>
                                    Add your Experience Certificate
                                </p>
                            </div>

                        </Grid>
                        <Grid item xs={3} >
                            <div style={{ width: '100%', height: "100%" }} >
                                <img src={certificate} alt="certificate" style={{ width: '100%', height: '100%' }} />
                            </div>
                            <p style={{ color: 'gray', marginTop: '5px' }} >
                                (upload only pnj.jpg.pdf)
                            </p>
                        </Grid>
                        <Grid item xs={3} >
                            <div className='component-register-add-certificate-btn-container' >
                                <Button className='component-register-add-certificate-btn' >
                                    <AddOutlinedIcon style={{ fontSize: '80px' }} />
                                </Button>
                            </div>
                            <p style={{ color: 'gray', marginTop: '5px' }} >
                                (upload only pnj.jpg.pdf)
                            </p>
                        </Grid>
                    </Grid>
                </div>


                {/* add your document */}

                <div style={{ marginTop: '50px' }} >
                    <Grid container spacing={2} >

                        <Grid item xs={12} >
                            <div className='component-register-field-container'>
                                <p>
                                    Add your Document
                                </p>
                            </div>

                        </Grid>
                        <Grid item xs={3} >
                            <div style={{ width: '100%', height: "100%" }} >
                                <img src={certificate} alt="certificate" style={{ width: '100%', height: '100%' }} />
                            </div>

                        </Grid>
                        <Grid item xs={3} >
                            <div className='component-register-add-certificate-btn-container' >
                                <Button className='component-register-add-certificate-btn' >
                                    <AddOutlinedIcon style={{ fontSize: '80px' }} />
                                </Button>
                            </div>
                            <p style={{ color: 'gray', marginTop: '5px' }} >
                                (upload only pnj.jpg.pdf)
                            </p>
                        </Grid>
                    </Grid>
                </div>

                {/* save button */}

                <div style={{marginTop:'20px'}} >
                    <Grid container  >
                        <Grid item xs={12} >
                            <div className='component-register-register-btn-container' >
                                <Button variant='text' className='component-register-register-btn' onClick={() => {
                                    createBrowserHistory().push('/tutor-certificates');
                                    window.location.reload();
                                }} >
                                    save & continue
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </div>

            </div>

        </>
    )
}