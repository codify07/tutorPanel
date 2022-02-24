import { Grid, TextField, Button } from "@mui/material";
import React from "react";
import { AppBar } from '../../components/abbbar/appbar'
import { BodyHeader } from '../../components/bodyheader/bodyheader'
import group64 from '../../assets/Group64.png'
import './homepage.css'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';
import { DealCard } from '../../components/dealCard/dealCard'




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
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


export const HomePage = () => {
    return (
        <div style={{ paddingBottom: '100px' }} >
            {/* _____ APP BAR _____ */}

            <div>
                <AppBar />
            </div>

            {/* ______ BODY HEADER _____ */}


            <div>
                <BodyHeader />
            </div>

            {/* ____ GET ACCESS SECTION ____ */}

            <div className='get-access-container' >
                <Grid container spacing={2} >
                    <Grid item xs={12} md={6} >
                        <div className="getAcess-left-side-div" >
                            <p style={{ fontSize: '35px', fontWeight: '600' }} >
                                GET ACCESS <br />
                                ANYWHERE ANYTIME
                            </p>
                            <p className="get-access-left-side-description" >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies finibus ligula. In at convallis magna.
                            </p>
                            {/* <TextField placeholder="Search tutor, subject" variant='outlined' style={{width:'60%',marginTop:'50px'}} size='small' /> */}
                            <Search className="get-access-left-side-search" >
                                <SearchIconWrapper>
                                    <Button disableRipple variant="contained" size="small" className="search-btn-get-access" >search</Button>
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search tutor, subject"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="get-access-right-img" >
                            <div className="get-access-right-img-setting" >
                                <img src={group64} alt="" width='100%' height='100%' />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>

            {/* _____ TOP DEALS SECTION ____ */}

            <div className="top-deals-contianer" >
                <div className='top-deals-content-wrapper' >
                    <div className="top-deals-left-side-content-container" >
                        <h1 className="home-heading-slyle" >
                            top deals
                        </h1>
                        <p className="home-description-style" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies finibus ligula. In at convallis magna.
                        </p>
                    </div>
                    <div className="top-deals-right-side-content-container" >
                        <Button variant='text' className='top-deals-btn' >
                            <p style={{ marginRight: '30px' }} >
                                view all deals
                            </p>
                            <ArrowRightAltSharpIcon style={{ fontSize: '45px' }} />
                        </Button>
                    </div>
                </div>
            </div>

            {/* ____ DEAL CARD  ____ */}

            <div className="deal-card-wraper" >
                <DealCard />
            </div>

            {/*____ KNOWLEDGE BANK SECTION ____ */}

            <div className="knowledge-bank-section-container" >
                <Grid container spacing={2} >
                    <Grid item xs={12} md={6} >
                        <div>
                            <p>
                                knowledge bank
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies finibus ligula. In at convallis magna.
                            </p>
                            
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <div>

                        </div>
                    </Grid>
                </Grid>

            </div>

        </div>

    )
}