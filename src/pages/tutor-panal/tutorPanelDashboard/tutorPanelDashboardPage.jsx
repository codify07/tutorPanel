import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Dashboard } from '../dashBoard/tutorDashBoard'
import { TutotPanelSidBar } from '../../../components/tuutorPanelSider/tutorPanelSider'
import { Profile } from '../profile/profile'
import { Grid,Avatar } from '@mui/material'
import { Outlet } from 'react-router-dom'
import './tutorPanelDashboardPage.css'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import avatar from '../../../assets/profile_user1.png'



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    border:'1px solid #A6A6A6',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '500px',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '450px',
        },
    },
}));



export const DashboardPage = () => {
    return (
        <>
            <div style={{backgroundColor:'#F9F9F9'}} >
                <Grid container  >
                    <Grid item xs={12} md={2} >
                        <TutotPanelSidBar />
                    </Grid>
                    <Grid item xs={12} md={10} >
                        <div className='tutot-right-side-container' >
                            <div className='tutor-dashboard-page-header-container' >
                                <div className='tutor-dashboard-page-header-content-wrapper' >
                                    <div>
                                        <Search>
                                            <SearchIconWrapper>
                                                <SearchIcon />
                                            </SearchIconWrapper>
                                            <StyledInputBase
                                                placeholder="Search…"
                                                inputProps={{ 'aria-label': 'search' }}
                                            />
                                        </Search>
                                    </div>
                                    <div className="tutor-dashboard-page-header-content-wrapper-profile-logo" >
                                        <p>
                                            david anderson
                                        </p>
                                        <Avatar style={{width:'40px',height:'40px'}} >
                                            <img src={avatar} alt="avatar" />
                                        </Avatar>
                                    </div>
                                </div>
                            </div>
                            
                            <Outlet />
                        </div>
                    </Grid>
                </Grid>
            </div>

        </>
    )
}