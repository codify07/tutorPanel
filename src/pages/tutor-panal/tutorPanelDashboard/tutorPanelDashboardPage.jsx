import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TutotPanelSidBar } from '../../../components/tuutorPanelSider/tutorPanelSider'
import { Grid, Avatar, Badge, IconButton } from '@mui/material'
import { Outlet } from 'react-router-dom'
import './tutorPanelDashboardPage.css'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import avatar from '../../../assets/profile_user1.png'
import NotificationsIcon from '@mui/icons-material/Notifications';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



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
    border: '1px solid #A6A6A6',
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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div style={{ backgroundColor: '#F9F9F9' }} >
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
                                        <div style={{ marginRight: '12px' }} >
                                            <IconButton id="basic-button"
                                                aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick} >
                                                <Badge badgeContent={4} overlap="circular" color="success" >

                                                    <NotificationsIcon style={{ color: '#76AC2D', fontSize: '30px' }} />

                                                </Badge>
                                            </IconButton>
                                            <Menu
                                                id="basic-menu"
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                MenuListProps={{
                                                    'aria-labelledby': 'basic-button',
                                                }}

                                            >
                                                <div className='first-tutor-doashboard-notification-wraper' >
                                                    <Link to='chat-inbox' className='first-tutor-dashboard-notification-msg-link' onClick={handleClose} >
                                                        <div className='first-tutor-dashboard-notification-content-container' >
                                                            <h2>
                                                                johan smith <span className='first-tutor-dashboard-notification-time-span' >9:30 pm</span>
                                                            </h2>
                                                            <p>
                                                                Donec enim lectus, venenatis nec aliquam a, varius sed ex. Ut laoreet augue velit, vel malesuada elit euismod ut.
                                                            </p>
                                                        </div>
                                                    </Link>
                                                    <Link to='chat-inbox' className='first-tutor-dashboard-notification-msg-link' onClick={handleClose} >
                                                        <div className='first-tutor-dashboard-notification-content-container' >
                                                            <h2>
                                                                johan smith <span className='first-tutor-dashboard-notification-time-span' >9:30 pm</span>
                                                            </h2>
                                                            <p>
                                                                Donec enim lectus, venenatis nec aliquam a, varius sed ex. Ut laoreet augue velit, vel malesuada elit euismod ut.
                                                            </p>
                                                        </div>
                                                    </Link>
                                                    <Link to='chat-inbox' className='first-tutor-dashboard-notification-msg-link' onClick={handleClose} >
                                                        <div className='first-tutor-dashboard-notification-content-container' >
                                                            <h2>
                                                                johan smith <span className='first-tutor-dashboard-notification-time-span' >9:30 pm</span>
                                                            </h2>
                                                            <p>
                                                                Donec enim lectus, venenatis nec aliquam a, varius sed ex. Ut laoreet augue velit, vel malesuada elit euismod ut.
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </div>

                                            </Menu>
                                        </div>
                                        <p>
                                            david anderson
                                        </p>
                                        <Avatar style={{ width: '40px', height: '40px' }} >
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