import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import { createBrowserHistory } from 'history'
import { useTheme, Avatar, Theme, IconButton } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import FmdGoodSharpIcon from '@mui/icons-material/FmdGoodSharp';
import logo from '../../assets/pinkLogo.png'
import './apbar.css'
import droparrow from '../../assets/dropdownarrow.png'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import vectorright from '../../assets/vectorright.png'
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'
import logoTutor from '../../assets/logo.png'



export const AppBar = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);


    const [open, setOpen] = React.useState(false);

    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleDrawerClose = () => {
        setIsDrawerOpen(false)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            {
                isMatch ?

                    <div>
                        <Grid container >

                            {/* ____ MAIN HEADER */}

                            <Grid item xs={12} >
                                <div className='main-appbar-container' >
                                    <div className='main-appbar-content-wraper' >
                                        <div className="logo-container" >
                                            <img src={logo} alt="logo" />
                                        </div>

                                        <div className='app-bar-component-drawer-bar-icons-container' >
                                            {
                                                isDrawerOpen ?
                                                    <CloseIcon onClick={() => {
                                                        setIsDrawerOpen(false);
                                                    }} />
                                                    :
                                                    <MenuIcon className='app-bar-component-menu-icon' onClick={() => {
                                                        setIsDrawerOpen(true)
                                                    }} />


                                            }
                                        </div>
                                    </div>
                                </div>
                            </Grid>

                        </Grid>

                        {/* drawer */}

                        <Drawer anchor='right' open={isDrawerOpen} onClose={handleDrawerClose}  >
                            <div className='app-bar-component-drawer-content-container' >
                                <div className='app-bar-component-drawer-header-container' >
                                    <IconButton className='app-bar-component-drawer-close-btn' >
                                        <CloseIcon style={{ color: 'white' }}  onClick={() => {
                                                        setIsDrawerOpen(false);
                                                    }}/>
                                    </IconButton>

                                </div>
                                <div className="app-bar-component-drawer-nav-links-container" >
                                    <Link to='/home' className='app-bar-component-drawer-nav-link' onClick={() => {
                                        handleDrawerClose();
                                    }} >
                                        <p>
                                            HOME
                                        </p>
                                    </Link>
                                    <Link to='/our-courses' className='app-bar-component-drawer-nav-link' onClick={() => {
                                        handleDrawerClose();
                                    }} >
                                        <p>
                                            COURSES
                                        </p>
                                    </Link>
                                    <Link to='/about-us' className='app-bar-component-drawer-nav-link' onClick={() => {
                                        handleDrawerClose();
                                    }} >
                                        <p>
                                            ABOUT US
                                        </p>
                                    </Link>
                                    <Link to='/contact-us' className='app-bar-component-drawer-nav-link' onClick={() => {
                                        handleDrawerClose();
                                    }} >
                                        <p>
                                            CONTACT US
                                        </p>
                                    </Link>
                                    <Link to='/login' className='app-bar-component-drawer-nav-link' onClick={() => {
                                        handleDrawerClose();
                                    }} >
                                        <button>
                                            login
                                        </button>
                                    </Link>
                                    <Link to='/register' className='app-bar-component-drawer-nav-link' onClick={() => {
                                        handleDrawerClose();
                                    }} >
                                        <button>
                                            register
                                        </button>
                                    </Link>
                                </div>

                            </div>
                        </Drawer>

                        <div>

                            <Dialog
                                fullScreen={fullScreen}
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="responsive-dialog-title"
                                maxWidth='xl'
                                fullWidth
                                PaperProps={{ sx: { position: "fixed", top: 120, m: 0, maxWidth: 'xl' } }}
                            >

                                <DialogContent>
                                    <Grid container  >
                                        <Grid item xs={6} lg={3} >

                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    art & design
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Data & science
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    business
                                                </p>
                                            </Button>
                                            <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Marketing
                                                </p>
                                            </Button>

                                        </Grid>
                                        <Grid item xs={6} lg={3} >
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Science and Engineering
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Construction and Engineering
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' onClick={() => {
                                                createBrowserHistory().push('/courses');
                                                window.location.reload();
                                            }} >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Education and Teaching
                                                </p>
                                            </Button>
                                            <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Health, Fitness and Medical
                                                </p>
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6} lg={3} >
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Data & science
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Data & science
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    business
                                                </p>
                                            </Button>
                                            <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Marketing
                                                </p>
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6} md={6} lg={3} >
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Science and Engineering
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Construction and Engineering
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Education and Teaching
                                                </p>
                                            </Button>
                                            <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Marketing
                                                </p>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </DialogContent>
                                <DialogActions>

                                    <Button onClick={handleClose} style={{ color: '#97005E' }} autoFocus>
                                        Close
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </div>

                    :

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
                                            <Button className='nav-links-btn' variant='text' onClick={() => {
                                                createBrowserHistory().push('/home');
                                                window.location.reload();
                                            }}  >
                                                Home
                                            </Button>
                                            <Button className='nav-links-btn' variant='text' onClick={() => {
                                                handleClickOpen();
                                            }}  >
                                                <p> courses </p>
                                                <img src={droparrow} alt="arrow" style={{ marginLeft: '10px' }} />
                                            </Button>
                                            <Button className='nav-links-btn' variant='text' onClick={() => {
                                                createBrowserHistory().push('/about-us');
                                                window.location.reload();
                                            }} >
                                                about us
                                            </Button>
                                            <Button className='nav-links-btn' variant='text' onClick={() => {
                                                createBrowserHistory().push('/contact-us');
                                                window.location.reload();
                                            }} >
                                                contact us
                                            </Button>

                                        </div>
                                        <div className='appbar-login-section-container' >
                                            <Button variant='text' className='sign-up-btn' onClick={() => {
                                                createBrowserHistory().push('/login');
                                                window.location.reload()
                                            }} >
                                                login
                                            </Button>
                                            <Button className='sign-up-btn' variant='text' onClick={() => {
                                                createBrowserHistory().push('/register');
                                                window.location.reload()
                                            }}  >
                                                register
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Grid>

                        </Grid>


                        <div>

                            <Dialog
                                fullScreen={fullScreen}
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="responsive-dialog-title"
                                maxWidth='xl'
                                fullWidth
                                PaperProps={{ sx: { position: "fixed", top: 120, m: 0, maxWidth: 'xl' } }}
                            >

                                <DialogContent>
                                    <Grid container  >
                                        <Grid item xs={6} lg={3} >

                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    art & design
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Data & science
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    business
                                                </p>
                                            </Button>
                                            <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Marketing
                                                </p>
                                            </Button>

                                        </Grid>
                                        <Grid item xs={6} lg={3} >
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Science and Engineering
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Construction and Engineering
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' onClick={() => {
                                                createBrowserHistory().push('/courses');
                                                window.location.reload();
                                            }} >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Education and Teaching
                                                </p>
                                            </Button>
                                            <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Health, Fitness and Medical
                                                </p>
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6} lg={3} >
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Data & science
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Data & science
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    business
                                                </p>
                                            </Button>
                                            <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Marketing
                                                </p>
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6} md={6} lg={3} >
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Science and Engineering
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Construction and Engineering
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Education and Teaching
                                                </p>
                                            </Button>
                                            <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Marketing
                                                </p>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </DialogContent>
                                <DialogActions>

                                    <Button onClick={handleClose} style={{ color: '#97005E' }} autoFocus>
                                        Close
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </div>

            }


        </>
    )
}

// tutor appbar 


export const TutorAppBar = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);


    const [open, setOpen] = React.useState(false);

    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleDrawerClose = () => {
        setIsDrawerOpen(false)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            {
                isMatch ?

                    <div>
                        <Grid container >

                            {/* ____ MAIN HEADER */}

                            <Grid item xs={12} >
                                <div className='main-appbar-container' >
                                    <div className='main-appbar-content-wraper' >
                                        <div className="logo-container" >
                                            <img src={logo} alt="logo" />
                                        </div>

                                        <div className='app-bar-component-drawer-bar-icons-container' >
                                            {
                                                isDrawerOpen ?
                                                    <CloseIcon />
                                                    :
                                                    <MenuIcon className='app-bar-component-menu-icon' onClick={() => {
                                                        setIsDrawerOpen(true)
                                                    }} />


                                            }
                                        </div>
                                    </div>
                                </div>
                            </Grid>

                        </Grid>

                        {/* drawer */}

                        <Drawer anchor='right' open={isDrawerOpen} onClose={handleDrawerClose}  >
                            <div className='app-bar-component-drawer-content-container' >
                                <div className='app-bar-component-drawer-header-container-tutor' >
                                    <IconButton className='app-bar-component-drawer-close-btn' >
                                        <CloseIcon style={{ color: 'white' }} onClick={()=>{
                                            handleDrawerClose();
                                        }} />
                                    </IconButton>

                                </div>
                                <div className="app-bar-component-drawer-nav-links-container" >
                                    <Link to='/home' className='app-bar-component-drawer-nav-link-tutor' onClick={() => {
                                        handleDrawerClose();
                                    }} >
                                        <p>
                                            HOME
                                        </p>
                                    </Link>
                                    <Link to='/our-courses' className='app-bar-component-drawer-nav-link-tutor' onClick={() => {
                                        handleDrawerClose();
                                    }} >
                                        <p>
                                            COURSES
                                        </p>
                                    </Link>
                                    <Link to='/about-us' className='app-bar-component-drawer-nav-link-tutor' onClick={() => {
                                        handleDrawerClose();
                                    }} >
                                        <p>
                                            ABOUT US
                                        </p>
                                    </Link>
                                    <Link to='/contact-us' className='app-bar-component-drawer-nav-link-tutor' onClick={() => {
                                        handleDrawerClose();
                                    }} >
                                        <p>
                                            CONTACT US
                                        </p>
                                    </Link>
                                    <Link to='/login' className='app-bar-component-drawer-nav-link-tutor' onClick={() => {
                                        handleDrawerClose();
                                    }} >
                                        <button>
                                            login
                                        </button>
                                    </Link>
                                    <Link to='/register' className='app-bar-component-drawer-nav-link-tutor' onClick={() => {
                                        handleDrawerClose();
                                    }} >
                                        <button>
                                            register
                                        </button>
                                    </Link>
                                </div>

                            </div>
                        </Drawer>

                        <div>

                            <Dialog
                                fullScreen={fullScreen}
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="responsive-dialog-title"
                                maxWidth='xl'
                                fullWidth
                                PaperProps={{ sx: { position: "fixed", top: 120, m: 0, maxWidth: 'xl' } }}
                            >

                                <DialogContent>
                                    <Grid container  >
                                        <Grid item xs={6} lg={3} >

                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    art & design
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Data & science
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    business
                                                </p>
                                            </Button>
                                            <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Marketing
                                                </p>
                                            </Button>

                                        </Grid>
                                        <Grid item xs={6} lg={3} >
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Science and Engineering
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Construction and Engineering
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' onClick={() => {
                                                createBrowserHistory().push('/courses');
                                                window.location.reload();
                                            }} >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Education and Teaching
                                                </p>
                                            </Button>
                                            <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Health, Fitness and Medical
                                                </p>
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6} lg={3} >
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Data & science
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Data & science
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    business
                                                </p>
                                            </Button>
                                            <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Marketing
                                                </p>
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6} md={6} lg={3} >
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Science and Engineering
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Construction and Engineering
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Education and Teaching
                                                </p>
                                            </Button>
                                            <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Marketing
                                                </p>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </DialogContent>
                                <DialogActions>

                                    <Button onClick={handleClose} style={{ color: '#97005E' }} autoFocus>
                                        Close
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </div>

                    :

                    <div>
                        <Grid container >

                            {/* ______ UPPER HEADER _________ */}

                            <Grid item xs={12} >
                                <div className='upper-header-container-tutor' >
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
                                            <img src={logoTutor} alt="logo" />
                                        </div>
                                        <div className='nav-links' >
                                            <Button className='nav-links-btn' variant='text' onClick={() => {
                                                createBrowserHistory().push('/home');
                                                window.location.reload();
                                            }}  >
                                                Home
                                            </Button>
                                            <Button className='nav-links-btn' variant='text' onClick={() => {
                                                handleClickOpen();
                                            }}  >
                                                <p> courses </p>
                                                <img src={droparrow} alt="arrow" style={{ marginLeft: '10px' }} />
                                            </Button>
                                            <Button className='nav-links-btn' variant='text' onClick={() => {
                                                createBrowserHistory().push('/about-us');
                                                window.location.reload();
                                            }} >
                                                about us
                                            </Button>
                                            <Button className='nav-links-btn' variant='text' onClick={() => {
                                                createBrowserHistory().push('/contact-us');
                                                window.location.reload();
                                            }} >
                                                contact us
                                            </Button>

                                        </div>
                                        <div>
                                            <Button variant='text' className='sign-up-btn-tutor' onClick={() => {
                                                createBrowserHistory().push('/login');
                                                window.location.reload()
                                            }} >
                                                login
                                            </Button>
                                            <Button className='sign-up-btn-tutor' variant='text' onClick={() => {
                                                createBrowserHistory().push('/register');
                                                window.location.reload()
                                            }}  >
                                                register
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Grid>

                        </Grid>


                        <div>

                            <Dialog
                                fullScreen={fullScreen}
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="responsive-dialog-title"
                                maxWidth='xl'
                                fullWidth
                                PaperProps={{ sx: { position: "fixed", top: 120, m: 0, maxWidth: 'xl' } }}
                            >

                                <DialogContent>
                                    <Grid container  >
                                        <Grid item xs={6} lg={3} >

                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    art & design
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Data & science
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    business
                                                </p>
                                            </Button>
                                            <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Marketing
                                                </p>
                                            </Button>

                                        </Grid>
                                        <Grid item xs={6} lg={3} >
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Science and Engineering
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Construction and Engineering
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' onClick={() => {
                                                createBrowserHistory().push('/courses');
                                                window.location.reload();
                                            }} >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Education and Teaching
                                                </p>
                                            </Button>
                                            <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Health, Fitness and Medical
                                                </p>
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6} lg={3} >
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Data & science
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Data & science
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    business
                                                </p>
                                            </Button>
                                            <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Marketing
                                                </p>
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6} md={6} lg={3} >
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Science and Engineering
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Construction and Engineering
                                                </p>
                                            </Button> <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Education and Teaching
                                                </p>
                                            </Button>
                                            <br />
                                            <Button variant='text' className='courses-popup-btn' >
                                                <img src={vectorright} alt="" />
                                                <p>
                                                    Marketing
                                                </p>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </DialogContent>
                                <DialogActions>

                                    <Button onClick={handleClose} style={{ color: '#97005E' }} autoFocus>
                                        Close
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </div>

            }


        </>
    )
}