import { Button, Grid } from '@mui/material'
import React from 'react'
import { AppBar } from '../../components/abbbar/appbar'
import './login.css'
import loginpic from '../../assets/loginpic.png'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';
import { Footer } from '../../components/footer/footer'
import { createBrowserHistory } from 'history'



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    right: '-10px',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(0)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '200px',
            '&:focus': {
                width: '300px',
            },
        },
    },
}));



export const LoginPage = () => {
    return (
        <>
            {/* app bar */}

            <div>
                <AppBar />
            </div>

            {/* body */}

            <div className='login-body-container' >
                <div className='login-content-wrapper' >
                    <div className='login-content-container' >
                        <Grid container spacing={0} >
                            <Grid item xs={12} md={6} >
                                <div style={{ width: '100%',disply:'flex',alignItems:'center',justifyContent:'center'  }} >
                                    <img src={loginpic} alt="loginpic" width='100%' />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <div className='login-right-side-div-container'>
                                    <h1>
                                        login
                                    </h1>
                                    <p>
                                        good to see you again!
                                    </p>
                                    <div className='login-field-container' >
                                        <p>
                                            Username / Email
                                        </p>
                                        <input placeholder='Email or Username' />
                                    </div>
                                    <div className='login-field-container' >
                                        <p>
                                            password
                                        </p>
                                        <input type='password' placeholder='password' />
                                    </div>
                                    <div className="login-radio-btn-container" >
                                        <div>
                                            <input type='checkbox' style={{ marginRight: '20px' }} />
                                            <label htmlFor="">remember me</label>
                                        </div>
                                        <div>
                                            <Button variant='text' className='login-forgot-password' >
                                                forgot password?
                                            </Button>
                                        </div>
                                    </div>
                                    <div className='login-login-btn-container' >
                                        <Button variant='text' className='login-login-btn' >
                                            login
                                        </Button>
                                    </div>
                                    <div className='login-login-create-account-container' >
                                        <Button variant='text' className='login-create-accountbtn' onClick={() => {
                                            createBrowserHistory().push('/register');
                                            window.location.reload();
                                        }} >
                                            create account
                                        </Button>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>


                    </div>

                    <div style={{ marginBottom: '20px' }} >
                        <div className="subscribe-footer-container" >
                            <div className="subscribe-footer-content-wrapper" >
                                <h1>
                                    Subscribe for  get update every new courses
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla velit sed diam vestibulum, quis finibus elit rutrum.
                                </p>
                                <div className="subscriber-footer-search-bar" >
                                    <Search className="get-access-left-side-search" >
                                        <SearchIconWrapper>
                                            <Button disableRipple variant="contained" size="small" className="search-btn-get-access" >search</Button>
                                        </SearchIconWrapper>
                                        <StyledInputBase
                                            placeholder="Enter your email"
                                            inputProps={{ 'aria-label': 'search' }}
                                        />
                                    </Search>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>




                {/* footer */}
                <div>
                    <Footer/>
                </div>


            </div>





        </>
    )
}

