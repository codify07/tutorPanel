import { Grid, TextField, Button, Avatar } from "@mui/material";
import React from "react";
import { AppBar } from '../../components/abbbar/appbar'
import { BodyHeader } from '../../components/bodyheader/bodyheader'
import group64 from '../../assets/Group64.png'
import knowledge from '../../assets/knowledge.png'
import './homepage.css'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';
import { DealCard } from '../../components/dealCard/dealCard'
import rect from '../../assets/Rct.png'
import vector from '../../assets/Vector.png'
import laptopman from '../../assets/Group.png'
import group3 from '../../assets/Group-3.png'
import group56 from '../../assets/group56.png'
import group57 from '../../assets/group57.png'
import arrow from '../../assets/arrow.png'
import courses2 from '../../assets/courses2.png'
import locationIcon from '../../assets/location-icon.png'
import group9 from '../../assets/group9.png'
import student1 from '../../assets/student1.png'
import {Footer} from '../../components/footer/footer'
import { createBrowserHistory } from "history";










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


export const HomePage = () => {
    return (
        <div style={{ paddingBottom: '100px' }} >
            {/* _____ APP BAR _____ */}

            <div>
                <AppBar />
            </div>

            {/* ____________________________ BODY  _____________________________ */}


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
                        <h1 className="home-heading-style" >
                            top deals
                        </h1>
                        <p className="home-description-style" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies finibus ligula. In at convallis magna.
                        </p>
                    </div>
                    <div className="top-deals-right-side-content-container" >
                        <Button variant='text' className='top-deals-btn' onClick={()=>{
                            createBrowserHistory().push('/deals');
                            window.location.reload();
                        }} >
                            <p style={{ marginRight: '30px'  }} >
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
                        <div className="knowledge-bank-section-left-side-wraper" >
                            <p className="home-heading-style" >
                                knowledge bank
                            </p>
                            <p className="home-description-style" style={{ width: '89%' }} >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies finibus ligula. In at convallis magna.
                            </p>
                            <Button variant='contained' className="home-primary-btn" >
                                let's do it
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <div className="knowledge-bank-section-right-side-wraper" >
                            <img src={knowledge} alt="img2" />
                        </div>
                    </Grid>
                </Grid>

            </div>

            {/* _____ EXPLOE TOP CATEGORY */}

            <div className="explore-top-category-container" style={{ backgroundImage: `url(${rect})`, }} >
                <div className="explore-top-content-wrapper" >
                    <Grid container spacing={2} >
                        <Grid item xs={12} md={9} >
                            <div className="explore-top-category-left-side-content-wraper" >
                                <p className="home-heading-style" >
                                    Explore Top Category
                                </p>
                                <p className="home-description-style" >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies finibus ligula. In at convallis magna.
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3} >
                            <div className="view-all-category-btn" >
                                <Button variant='text' className='home-arrow-btn'  >
                                    <p>
                                        view all category
                                    </p>
                                    <ArrowRightAltSharpIcon style={{ fontSize: '30px' }} />
                                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}  >
                            <div className="expolore-card-style" >
                                <div>
                                    <img src={vector} alt="pic" className="explore-card-pic" />
                                </div>
                                <div>
                                    <p className="explore-card-text" >
                                        data & science
                                    </p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <div className="expolore-card-style" >
                                <div>
                                    <img src={vector} alt="pic" className="explore-card-pic" />
                                </div>
                                <div>
                                    <p className="explore-card-text" >
                                        data & science
                                    </p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <div className="expolore-card-style" >
                                <div>
                                    <img src={vector} alt="pic" className="explore-card-pic" />
                                </div>
                                <div>
                                    <p className="explore-card-text" >
                                        data & science
                                    </p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <div className="expolore-card-style" >
                                <div>
                                    <img src={vector} alt="pic" className="explore-card-pic" />
                                </div>
                                <div>
                                    <p className="explore-card-text" >
                                        data & science
                                    </p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>

            {/* secondary cords section */}

            <div className='home-secondary-card-container' >
                <div className='home-secondary-card-content-wrapper' >
                    <div>
                        <p className="home-heading-style" >
                            Become a tutor
                        </p>
                        <p className="home-description-style">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies finibus ligula. In at convallis magna.
                        </p>
                        <Button variant='contained' className="home-primary-btn" >
                            apply now
                        </Button>
                    </div>
                    <div className="homw-secondary-card-img" >
                        <img src={laptopman} alt="img" style={{ width: '' }} />
                    </div>
                </div>
                <div className='home-secondary-card-content-wrapper' >
                    <div>
                        <p className="home-heading-style" >
                            Become a Student
                        </p>
                        <p className="home-description-style">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies finibus ligula. In at convallis magna.
                        </p>
                        <Button variant='contained' className="home-primary-btn" >
                            apply now
                        </Button>
                    </div>
                    <div className="homw-secondary-card-img" >
                        <img src={group3} alt="img" style={{ width: '' }} />
                    </div>
                </div>
                <div className='home-secondary-card-content-wrapper' >
                    <div>
                        <p className="home-heading-style" >
                            Become a institute
                        </p>
                        <p className="home-description-style">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies finibus ligula. In at convallis magna.
                        </p>
                        <Button variant='contained' className="home-primary-btn" >
                            apply now
                        </Button>
                    </div>
                    <div className="homw-secondary-card-img" >
                        <img src={group56} alt="img" />
                    </div>
                </div>
                <div className='home-secondary-card-content-wrapper' >
                    <div>
                        <p className="home-heading-style" >
                            child progress for parants
                        </p>
                        <p className="home-description-style">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies finibus ligula. In at convallis magna.
                        </p>
                        <Button variant='contained' className="home-primary-btn" >
                            apply now
                        </Button>
                    </div>
                    <div className="homw-secondary-card-img" >
                        <img src={group57} alt="img" />
                    </div>
                </div>
            </div>

            {/* ___________ EXPLORE OUR COURSES SECTION ____________ */}


            <div className="our-courses-container" >
                <div className="our-courses-content-wrapper" >
                    {/* header */}
                    <div className="our-courses-header-container" >
                        <div className="courses-inner-heading" >
                            <p className="home-heading-style" >
                                Explore our Courses
                            </p>
                            <p className="home-description-style" >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies finibus ligula. In at convallis magna.
                            </p>
                        </div>

                        <div className="view-all-category-btn" >
                            <Button variant='text' className='home-arrow-btn'  >
                                <p>
                                    view all courses
                                </p>
                                <img src={arrow} alt="arrow" />
                            </Button>
                        </div>
                    </div>
                    {/* tabs */}
                    <div className="courses-tabs-container" >
                        <Button variant="text" className="courses-tabs-btn" >
                            all
                        </Button>
                        <Button variant="text" className="courses-tabs-btn" >
                            art & design
                        </Button>
                        <Button variant="text" className="courses-tabs-btn" >
                            data & science
                        </Button>
                        <Button variant="text" className="courses-tabs-btn" >
                            business
                        </Button>
                        <Button variant="text" className="courses-tabs-btn" >
                            marketing
                        </Button>
                    </div>
                    {/* cards-deck */}
                    <div className="courses-card-deck" >
                        <Grid container spacing={4} >
                            <Grid item xs={12} md={6} lg={4} >
                                <div className="courses-card-container" >
                                    <div>
                                        <img src={courses2} alt="pic" className="courses-card-img" />
                                    </div>
                                    <div>
                                        <p className="courses-card-title" >
                                            Lorem ipsum dolor sit a...
                                        </p>
                                    </div>
                                    <div className="courses-card-description" >
                                        <img src={locationIcon} alt="icn" />
                                        <p>
                                            Burnside
                                        </p>
                                    </div>
                                    <div className="courses-card-actions-container" >
                                        <Button size="large" variant='contained' className="courses-card-price-btrn" >
                                            $20.00
                                        </Button>
                                        <Button variant='text' className="courses-card-know-more-btn" >
                                            <p>
                                                know more
                                            </p>
                                            <img src={arrow} alt="arrow" />
                                        </Button>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} >
                                <div className="courses-card-container" >
                                    <div>
                                        <img src={courses2} alt="pic" className="courses-card-img" />
                                    </div>
                                    <div>
                                        <p className="courses-card-title" >
                                            Lorem ipsum dolor sit a...
                                        </p>
                                    </div>
                                    <div className="courses-card-description" >
                                        <img src={locationIcon} alt="icn" />
                                        <p>
                                            Burnside
                                        </p>
                                    </div>
                                    <div className="courses-card-actions-container" >
                                        <Button size="large" variant='contained' className="courses-card-price-btrn" >
                                            $20.00
                                        </Button>
                                        <Button variant='text' className="courses-card-know-more-btn" >
                                            <p>
                                                know more
                                            </p>
                                            <img src={arrow} alt="arrow" />
                                        </Button>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} >
                                <div className="courses-card-container" >
                                    <div>
                                        <img src={courses2} alt="pic" className="courses-card-img" />
                                    </div>
                                    <div>
                                        <p className="courses-card-title" >
                                            Lorem ipsum dolor sit a...
                                        </p>
                                    </div>
                                    <div className="courses-card-description" >
                                        <img src={locationIcon} alt="icn" />
                                        <p>
                                            Burnside
                                        </p>
                                    </div>
                                    <div className="courses-card-actions-container" >
                                        <Button size="large" variant='contained' className="courses-card-price-btrn" >
                                            $20.00
                                        </Button>
                                        <Button variant='text' className="courses-card-know-more-btn" >
                                            <p>
                                                know more
                                            </p>
                                            <img src={arrow} alt="arrow" />
                                        </Button>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} >
                                <div className="courses-card-container" >
                                    <div>
                                        <img src={courses2} alt="pic" className="courses-card-img" />
                                    </div>
                                    <div>
                                        <p className="courses-card-title" >
                                            Lorem ipsum dolor sit a...
                                        </p>
                                    </div>
                                    <div className="courses-card-description" >
                                        <img src={locationIcon} alt="icn" />
                                        <p>
                                            Burnside
                                        </p>
                                    </div>
                                    <div className="courses-card-actions-container" >
                                        <Button size="large" variant='contained' className="courses-card-price-btrn" >
                                            $20.00
                                        </Button>
                                        <Button variant='text' className="courses-card-know-more-btn" >
                                            <p>
                                                know more
                                            </p>
                                            <img src={arrow} alt="arrow" />
                                        </Button>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} >
                                <div className="courses-card-container" >
                                    <div>
                                        <img src={courses2} alt="pic" className="courses-card-img" />
                                    </div>
                                    <div>
                                        <p className="courses-card-title" >
                                            Lorem ipsum dolor sit a...
                                        </p>
                                    </div>
                                    <div className="courses-card-description" >
                                        <img src={locationIcon} alt="icn" />
                                        <p>
                                            Burnside
                                        </p>
                                    </div>
                                    <div className="courses-card-actions-container" >
                                        <Button size="large" variant='contained' className="courses-card-price-btrn" >
                                            $20.00
                                        </Button>
                                        <Button variant='text' className="courses-card-know-more-btn" >
                                            <p>
                                                know more
                                            </p>
                                            <img src={arrow} alt="arrow" />
                                        </Button>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} >
                                <div className="courses-card-container" >
                                    <div>
                                        <img src={courses2} alt="pic" className="courses-card-img" />
                                    </div>
                                    <div>
                                        <p className="courses-card-title" >
                                            Lorem ipsum dolor sit a...
                                        </p>
                                    </div>
                                    <div className="courses-card-description" >
                                        <img src={locationIcon} alt="icn" />
                                        <p>
                                            Burnside
                                        </p>
                                    </div>
                                    <div className="courses-card-actions-container" >
                                        <Button size="large" variant='contained' className="courses-card-price-btrn" >
                                            $20.00
                                        </Button>
                                        <Button variant='text' className="courses-card-know-more-btn" >
                                            <p>
                                                know more
                                            </p>
                                            <img src={arrow} alt="arrow" />
                                        </Button>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>

            {/* _______ EASILY MANAGE YOUR SCEDULE SECTION _______ */}

            <div className="knowledge-bank-section-container" style={{ marginTop: '50px' }} >
                <Grid container spacing={2} >
                    <Grid item xs={12} md={5} >
                        <div className="knowledge-bank-section-left-side-wraper" style={{ paddingLeft: '30px' }} >
                            <p className="home-heading-style" >
                                Easily manage your
                                schedule
                            </p>
                            <p className="home-description-style" style={{ width: '89%', fontSize: '18px' }}  >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies finibus ligula. In at convallis magna.
                            </p>

                        </div>
                    </Grid>
                    <Grid item xs={12} md={7} >
                        <div className="knowledge-bank-section-right-side-wraper" >
                            <img src={group9} alt="img2" />
                        </div>
                    </Grid>
                </Grid>

            </div>

            {/* ________ OUR STUDENT SAYS _______ */}

            <div className="our-student-says" >
                <div className="our-student-says-content-wrapper" >
                    <div className='our-student-says-heading-container' >

                        <h1>
                            Our Student says
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies finibus ligula. In at convallis magna.
                        </p>
                        <div className="our-student-says-cards-container" >
                            <Grid container spacing={2} >
                                <Grid item xs={12} md={6} lg={4} >
                                    <div className="our-student-says-card-container" >
                                        <Avatar className="our-student-says-card-avatar" >
                                            <img src={student1} alt="pic" />
                                        </Avatar>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla velit sed diam vestibulum, quis finibus elit rutrum.
                                        </p>
                                        <h5>
                                            samantha aryton
                                        </h5>
                                        <h6>
                                            student
                                        </h6>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6} lg={4} >
                                    <div className="our-student-says-card-container" >
                                        <Avatar className="our-student-says-card-avatar" >
                                            <img src={student1} alt="pic" />
                                        </Avatar>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla velit sed diam vestibulum, quis finibus elit rutrum.
                                        </p>
                                        <h5>
                                            samantha aryton
                                        </h5>
                                        <h6>
                                            student
                                        </h6>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6} lg={4} >
                                    <div className="our-student-says-card-container" >
                                        <Avatar className="our-student-says-card-avatar" >
                                            <img src={student1} alt="pic" />
                                        </Avatar>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla velit sed diam vestibulum, quis finibus elit rutrum.
                                        </p>
                                        <h5>
                                            samantha aryton
                                        </h5>
                                        <h6>
                                            student
                                        </h6>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>

            {/* __________ Subscribe for  get update every new courses ________ */}


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

            {/* ____________ F O O T E R _______ */}

            <div className="footer-container" >
                <Footer/>
            </div>


            {/*  ****************** last div ******************* */}
        </div>

    )
}