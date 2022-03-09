import { Button, Grid, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import footer from '../../assets/footer.png'
import logo from '../../assets/pinkLogo.png'
import fb from '../../assets/fb.png'
import linkedin from '../../assets/linkedin.png'
import twiter from '../../assets/twiter.png'
import './footer.css'
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import googleplay from '../../assets/googlepaly.png'
import appstore from '../../assets/appstore.png'



export const Footer = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            {
                isMatch ?

                    <div style={{marginTop:isMatch ? '30px' : ''}} >
                        <div className="footer-component-container-primary-mobile"  >
                            <div className="footer-component-content-wrapper" >
                                <div className="footer-component-upper-content" >
                                    <Grid container spacing={2} >
                                        <Grid item xs={12} lg={3} >
                                            <div className="footer-component-inner-content-wrapper" style={{ borderBottom: isMatch ? '1px solid white' : '', paddingBottom: isMatch ? '20px' : '' }} >
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
                                        <Grid item xs={12} lg={3} >
                                            <div className="footer-component-inner-content-wrapper" style={{ borderBottom: isMatch ? '1px solid white' : '', paddingBottom: isMatch ? '20px' : '' }} >
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
                                        <Grid item xs={12} lg={3} >
                                            <div className="footer-component-inner-content-wrapper" style={{ borderBottom: isMatch ? '1px solid white' : '', paddingBottom: isMatch ? '20px' : '' }} >
                                                <div className='footer-component-heading-div' >
                                                    <p  >
                                                        download app
                                                    </p>
                                                </div>
                                                <div className='footer-component-list-items-div' >
                                                    <div>
                                                        <Button variant="text" style={{}} >
                                                            <img src={googleplay} alt="" style={{ width: "100%" }} />
                                                        </Button> <br />
                                                        <Button variant="text" style={{ marginTop: '15px' }}>
                                                            <img src={appstore} alt="" style={{ width: "100%" }} />
                                                        </Button><br />
                                                        <div className="footer-social-icons-container"  >
                                                            <img src={fb} alt="pic" style={{ backgroundColor: '#97005E', borderRadius: '60%' }} />
                                                            <img src={linkedin} alt="pic" />
                                                            <img src={twiter} alt="pic" style={{ backgroundColor: '#97005E', borderRadius: '60%' }} />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} lg={3} >
                                            <div className="footer-component-inner-content-wrapper" style={{paddingBottom: isMatch ? '20px' : '' }} >
                                                <div className='footer-component-heading-div' >
                                                    <p>
                                                        contact us
                                                    </p>
                                                </div>
                                                <div className='footer-component-list-items-div' >
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: '20px', flexWrap: 'wrap' }} >
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

                            </div>
                        </div>
                        <div className='footer-component-lower-content' >
                            <Grid container  >
                                <Grid item xs={12}>
                                    <div className="footer-component-lower-content-container" >
                                        <div>
                                            <p style={{fontSize:isMatch ? '14px' :'16px',textAlign:'center',marginBottom: isMatch ? '5px' :'' }} >
                                                ©2022 Amafclasses private ltd. all rights reserved
                                            </p>
                                        </div>


                                        <div className='footer-terms-privacy-btns-contaner' >
                                            <Button variant='text' className='footer-component-privacy-btn' >
                                                terms of service
                                            </Button>
                                            <Button variant='text' className='footer-component-privacy-btn' >
                                                privacy policy
                                            </Button>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>

                    :

                    <div>
                        <div className="footer-component-container" style={{ backgroundImage: `url(${footer})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }} >
                            <div className="footer-component-content-wrapper" >
                                <div className="footer-component-upper-content" >
                                    <Grid container spacing={2} >
                                        <Grid item xs={6} lg={3} >
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
                                        <Grid item xs={6} lg={3} >
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
                                        <Grid item xs={6} lg={3} >
                                            <div className="footer-component-inner-content-wrapper" >
                                                <div className='footer-component-heading-div' >
                                                    <p  >
                                                        download app
                                                    </p>
                                                </div>
                                                <div className='footer-component-list-items-div' >
                                                    <div>
                                                        <Button variant="text" style={{}} >
                                                            <img src={googleplay} alt="" style={{ width: "100%" }} />
                                                        </Button> <br />
                                                        <Button variant="text" style={{ marginTop: '15px' }}>
                                                            <img src={appstore} alt="" style={{ width: "100%" }} />
                                                        </Button><br />
                                                        <div className="footer-social-icons-container"  >
                                                            <img src={fb} alt="pic" style={{ backgroundColor: '#97005E', borderRadius: '60%' }} />
                                                            <img src={linkedin} alt="pic" />
                                                            <img src={twiter} alt="pic" style={{ backgroundColor: '#97005E', borderRadius: '60%' }} />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6} lg={3} >
                                            <div className="footer-component-inner-content-wrapper" >
                                                <div className='footer-component-heading-div' >
                                                    <p>
                                                        contact us
                                                    </p>
                                                </div>
                                                <div className='footer-component-list-items-div' >
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: '20px', flexWrap: 'wrap' }} >
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

                            </div>
                        </div>
                        <div className='footer-component-lower-content' >
                            <Grid container  >
                                <Grid item xs={12}>
                                    <div className="footer-component-lower-content-container" >
                                        <div>
                                            <p>
                                                ©2022 Amafclasses private ltd. all rights reserved
                                            </p>
                                        </div>


                                        <div className='footer-terms-privacy-btns-contaner' >
                                            <Button variant='text' className='footer-component-privacy-btn' >
                                                terms of service
                                            </Button>
                                            <Button variant='text' className='footer-component-privacy-btn' >
                                                privacy policy
                                            </Button>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
            }

        </>
    )
}


export const TutorFooter = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            {
                isMatch ?

                    <div style={{marginTop:isMatch ? '30px' : ''}} >
                        <div className="footer-component-container-mobile"  >
                            <div className="footer-component-content-wrapper" >
                                <div className="footer-component-upper-content" >
                                    <Grid container spacing={2} >
                                        <Grid item xs={12} lg={3} >
                                            <div className="footer-component-inner-content-wrapper" style={{ borderBottom: isMatch ? '1px solid white' : '', paddingBottom: isMatch ? '20px' : '' }} >
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
                                        <Grid item xs={12} lg={3} >
                                            <div className="footer-component-inner-content-wrapper" style={{ borderBottom: isMatch ? '1px solid white' : '', paddingBottom: isMatch ? '20px' : '' }}>
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
                                        <Grid item xs={12} lg={3} >
                                            <div className="footer-component-inner-content-wrapper" style={{ borderBottom: isMatch ? '1px solid white' : '', paddingBottom: isMatch ? '20px' : '' }}  >
                                                <div className='footer-component-heading-div' >
                                                    <p  >
                                                        download app
                                                    </p>
                                                </div>
                                                <div className='footer-component-list-items-div' >
                                                    <div>
                                                        <Button variant="text" style={{}} >
                                                            <img src={googleplay} alt="" style={{ width: "100%" }} />
                                                        </Button> <br />
                                                        <Button variant="text" style={{ marginTop: '15px' }}>
                                                            <img src={appstore} alt="" style={{ width: "100%" }} />
                                                        </Button><br />
                                                        <div className="footer-social-icons-container"  >
                                                            <img src={fb} alt="pic" style={{ backgroundColor: '#97005E', borderRadius: '60%' }} />
                                                            <img src={linkedin} alt="pic" />
                                                            <img src={twiter} alt="pic" style={{ backgroundColor: '#97005E', borderRadius: '60%' }} />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} lg={3} >
                                            <div className="footer-component-inner-content-wrapper" style={{ borderBottom: isMatch ? '1px solid white' : '', paddingBottom: isMatch ? '20px' : '' }} >
                                                <div className='footer-component-heading-div' >
                                                    <p>
                                                        contact us
                                                    </p>
                                                </div>
                                                <div className='footer-component-list-items-div' >
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: '20px', flexWrap: 'wrap' }} >
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

                            </div>
                        </div>
                        <div className='footer-component-lower-content-tutor' >
                            <Grid container  >
                                <Grid item xs={12}>
                                    <div className="footer-component-lower-content-container-tutor" >
                                        <div>
                                            <p style={{fontSize:isMatch ? '12px' :'16px',textAlign:'center',marginBottom: isMatch ? '5px' : '' }} >
                                                ©2022 Amafclasses private ltd. all rights reserved
                                            </p>
                                        </div>


                                        <div className='footer-terms-privacy-btns-contaner' >
                                            <Button variant='text' className='footer-component-privacy-btn' >
                                                terms of service
                                            </Button>
                                            <Button variant='text' className='footer-component-privacy-btn' >
                                                privacy policy
                                            </Button>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>

                    :

                    <div>
                        <div className="footer-component-container" style={{ backgroundImage: `url(${footer})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }} >
                            <div className="footer-component-content-wrapper" >
                                <div className="footer-component-upper-content" >
                                    <Grid container spacing={2} >
                                        <Grid item xs={6} lg={3} >
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
                                        <Grid item xs={6} lg={3} >
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
                                        <Grid item xs={6} lg={3} >
                                            <div className="footer-component-inner-content-wrapper" >
                                                <div className='footer-component-heading-div' >
                                                    <p  >
                                                        download app
                                                    </p>
                                                </div>
                                                <div className='footer-component-list-items-div' >
                                                    <div>
                                                        <Button variant="text" style={{}} >
                                                            <img src={googleplay} alt="" style={{ width: "100%" }} />
                                                        </Button> <br />
                                                        <Button variant="text" style={{ marginTop: '15px' }}>
                                                            <img src={appstore} alt="" style={{ width: "100%" }} />
                                                        </Button><br />
                                                        <div className="footer-social-icons-container"  >
                                                            <img src={fb} alt="pic" style={{ backgroundColor: '#97005E', borderRadius: '60%' }} />
                                                            <img src={linkedin} alt="pic" />
                                                            <img src={twiter} alt="pic" style={{ backgroundColor: '#97005E', borderRadius: '60%' }} />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6} lg={3} >
                                            <div className="footer-component-inner-content-wrapper" >
                                                <div className='footer-component-heading-div' >
                                                    <p>
                                                        contact us
                                                    </p>
                                                </div>
                                                <div className='footer-component-list-items-div' >
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: '20px', flexWrap: 'wrap' }} >
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

                            </div>
                        </div>
                        <div className='footer-component-lower-content-tutor' >
                            <Grid container  >
                                <Grid item xs={12}>
                                    <div className="footer-component-lower-content-container" >
                                        <div>
                                            <p>
                                                ©2022 Amafclasses private ltd. all rights reserved
                                            </p>
                                        </div>


                                        <div className='footer-terms-privacy-btns-contaner' >
                                            <Button variant='text' className='footer-component-privacy-btn' >
                                                terms of service
                                            </Button>
                                            <Button variant='text' className='footer-component-privacy-btn' >
                                                privacy policy
                                            </Button>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
            }

        </>
    )
}