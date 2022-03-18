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
import { useTheme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../../assets/logo.png'
import logoutArrow from '../../../assets/siderLogoutArrow.png'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import BookIcon from '@mui/icons-material/Book';
import ForumIcon from '@mui/icons-material/Forum';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CampaignIcon from '@mui/icons-material/Campaign';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import GroupIcon from '@mui/icons-material/Group';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import QuizIcon from '@mui/icons-material/Quiz';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';




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
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);


    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false)
    }

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('lg'));
    const isMobileView = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <>
            <div style={{ backgroundColor: '#F9F9F9' }} >
                <Grid container  >
                    <Grid item xs={12} md={2} >
                        <TutotPanelSidBar />
                    </Grid>
                    <Grid item xs={12} lg={10} >
                        <div className='tutot-right-side-container' >
                            <div className='tutor-dashboard-page-header-container' >
                                <div className='tutor-dashboard-page-header-content-wrapper' >
                                    <div>
                                        {
                                            isMatch ?
                                                <div>
                                                    <IconButton onClick={() => {
                                                        setIsDrawerOpen(true)
                                                    }} >
                                                        <MenuIcon />
                                                    </IconButton>
                                                </div>
                                                :
                                                <div> </div>
                                        }

                                        <Drawer anchor='left' open={isDrawerOpen} onClose={handleDrawerClose}  >
                                            <div>
                                                <div className='tutor-panel-sider-content-wraper' >
                                                    <div className="tutor-panel-sider-logo-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }} >
                                                        <IconButton onClick={() => {
                                                            handleDrawerClose();
                                                        }} >
                                                            <CloseIcon />
                                                        </IconButton>
                                                        <img src={logo} alt="logo" width='120px' />
                                                    </div>
                                                    <ul style={{ paddingTop: '10px' }} >
                                                        <li className="tutor-panel-sider-list-item" >

                                                            <Link to='dashboard' className='tutor-panel-sider-link' onClick={handleDrawerClose} >
                                                                <DashboardIcon />
                                                                <p>dashboard</p>
                                                            </Link>

                                                        </li>

                                                        <li className="tutor-panel-sider-list-item" onClick={handleDrawerClose} >
                                                            <Link to='profile' className='tutor-panel-sider-link' >
                                                                <PersonIcon />
                                                                <p>profile</p>
                                                            </Link>
                                                        </li>
                                                        <li className="tutor-panel-sider-list-item" onClick={handleDrawerClose} >
                                                            <Link to='my-courses' className='tutor-panel-sider-link' >
                                                                <BookIcon />
                                                                <p>my courses</p>
                                                            </Link>
                                                        </li>
                                                        <li className="tutor-panel-sider-list-item" onClick={handleDrawerClose} >
                                                            <Link to='chat-inbox' className='tutor-panel-sider-link' >
                                                                <ForumIcon />
                                                                <p>chat inbox</p>
                                                            </Link>
                                                        </li>
                                                        <li className="tutor-panel-sider-list-item" onClick={handleDrawerClose} >
                                                            <Link to='ratings' className='tutor-panel-sider-link' >
                                                                <StarHalfIcon />
                                                                <p>ratings</p>
                                                            </Link>
                                                        </li>
                                                        <li className="tutor-panel-sider-list-item" onClick={handleDrawerClose} >
                                                            <Link to='my-booking' className='tutor-panel-sider-link' >
                                                                <CalendarTodayIcon />
                                                                <p>my booking</p>
                                                            </Link>
                                                        </li>
                                                        <li className="tutor-panel-sider-list-item" onClick={handleDrawerClose} >
                                                            <Link to='my-promotions' className='tutor-panel-sider-link' >
                                                                <CampaignIcon />
                                                                <p>my promotions</p>
                                                            </Link>
                                                        </li>
                                                        <li className="tutor-panel-sider-list-item" onClick={handleDrawerClose} >
                                                            <Link to='notifications' className='tutor-panel-sider-link' >
                                                                <NotificationsActiveIcon />
                                                                <p>notifications</p>
                                                            </Link>
                                                        </li>
                                                        <li className="tutor-panel-sider-list-item" onClick={handleDrawerClose} >
                                                            <Link to='my-wallet' className='tutor-panel-sider-link' >
                                                                <AccountBalanceWalletIcon />
                                                                <p>my wallet</p>
                                                            </Link>
                                                        </li>
                                                        <li className="tutor-panel-sider-list-item" onClick={handleDrawerClose} >
                                                            <Link to='create-quiz' className='tutor-panel-sider-link' >
                                                                <QuizIcon />
                                                                <p>create quiz</p>
                                                            </Link>
                                                        </li>
                                                        <li className="tutor-panel-sider-list-item" onClick={handleDrawerClose} >
                                                            <Link to='purchase-product' className='tutor-panel-sider-link' >
                                                                <StoreIcon />
                                                                <p>purchase product</p>
                                                            </Link>
                                                        </li>
                                                        <li className="tutor-panel-sider-list-item" onClick={handleDrawerClose} >
                                                            <Link to='my-cart' className='tutor-panel-sider-link' >
                                                                <ShoppingBasketIcon />
                                                                <p>My Cart</p>
                                                            </Link>
                                                        </li>
                                                        <li className="tutor-panel-sider-list-item" onClick={handleDrawerClose} >
                                                            <Link to='invite-friends' className='tutor-panel-sider-link' >
                                                                <GroupIcon />
                                                                <p>invite friends</p>
                                                            </Link>
                                                        </li>

                                                        <li className="tutor-panel-sider-list-item" onClick={handleDrawerClose} >
                                                            <Link to='dispute' className='tutor-panel-sider-link' >
                                                                <PsychologyIcon />
                                                                <p>dispute</p>
                                                            </Link>
                                                        </li>
                                                        <li className="tutor-panel-sider-list-item" onClick={handleDrawerClose} >
                                                            <Link to='transaction-history' className='tutor-panel-sider-link' >
                                                                <PointOfSaleIcon />
                                                                <p>transaction history</p>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <div className='first-tutor-panel-sider-log-out-container' onClick={handleDrawerClose}  >
                                                        <div  >
                                                            <p>
                                                                logout
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <img src={logoutArrow} alt="arrow" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Drawer>

                                    </div>
                                    <div>
                                        {
                                            isMobileView ?
                                                <div> </div>
                                                :
                                                <Search>
                                                    <SearchIconWrapper>
                                                        <SearchIcon />
                                                    </SearchIconWrapper>
                                                    <StyledInputBase
                                                        placeholder="Search…"
                                                        inputProps={{ 'aria-label': 'search' }}
                                                    />
                                                </Search>
                                        }


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