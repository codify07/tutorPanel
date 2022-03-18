import React from 'react'
import './myBookings.css'
import { Grid, IconButton, Avatar } from '@mui/material'
import Menu from '@mui/material/Menu';
import { CalendarComponent } from '../../../components/calendar/calendar'
import DateRangeIcon from '@mui/icons-material/DateRange';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import analytics from '../../../assets/analytics.png'
import TablePagination from '@mui/material/TablePagination';
import TableFooter from '@mui/material/TableFooter';
import avatarPic from '../../../assets/avatar2.png'
import {Link} from 'react-router-dom'




export const MyBookings = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorE2, setAnchorE2] = React.useState(null);

    const open = Boolean(anchorEl);
    const openStatus = Boolean(anchorE2);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClickStatus = (event) => {
        setAnchorE2(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleCloseStatus = () => {
        setAnchorE2(null);
    };




    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const myBooking = [
        {
            id: '1',
            createAt: 'JAN 4, 2022',
            student: 'Samantha aryton',
            course: 'Lorem ipsum dolor sit a...',
            country: 'burnside',
            price: '$20',
            status: 'pending',
            analytics: 'analytics',
            avatar: `${avatarPic}`
        },
        {
            id: '2',
            createAt: 'JAN 5, 2022',
            student: 'Johan smith',
            course: 'Lorem ipsum dolor sit a...',
            country: 'burnside',
            price: '$20',
            status: 'pending',
            analytics: 'analytics',
            avatar: `${avatarPic}`
        },
        {
            id: '3',
            createAt: 'JAN 6, 2022',
            student: 'Samantha aryton',
            course: 'Lorem ipsum dolor sit a...',
            country: 'burnside',
            price: '$20',
            status: 'pending',
            analytics: 'analytics',
            avatar: `${avatarPic}`
        },
        {
            id: '4',
            createAt: 'JAN 7, 2022',
            student: 'Samantha aryton',
            course: 'Lorem ipsum dolor sit a...',
            country: 'burnside',
            price: '$20',
            status: 'pending',
            analytics: 'analytics',
            avatar: `${avatarPic}`
        },
        {
            id: '5',
            createAt: 'JAN 8, 2022',
            student: 'Samantha aryton',
            course: 'Lorem ipsum dolor sit a...',
            country: 'burnside',
            price: '$20',
            status: 'pending',
            analytics: 'analytics',
            avatar: `${avatarPic}`
        },
        {
            id: '6',
            createAt: 'JAN 8, 2022',
            student: 'Samantha aryton',
            course: 'Lorem ipsum dolor sit a...',
            country: 'burnside',
            price: '$20',
            status: 'cancelled',
            analytics: 'analytics',
            avatar: `${avatarPic}`
        },
        {
            id: '7',
            createAt: 'JAN 9, 2022',
            student: 'Samantha aryton',
            course: 'Lorem ipsum dolor sit a...',
            country: 'burnside',
            price: '$20',
            status: 'completed',
            analytics: 'analytics',
            avatar: `${avatarPic}`
        },
        {
            id: '8',
            createAt: 'JAN 10, 2022',
            student: 'Samantha aryton',
            course: 'Lorem ipsum dolor sit a...',
            country: 'burnside',
            price: '$20',
            status: 'completed',
            analytics: 'analytics',
            avatar: `${avatarPic}`
        },
        {
            id: '9',
            createAt: 'JAN 11, 2022',
            student: 'Samantha aryton',
            course: 'Lorem ipsum dolor sit a...',
            country: 'burnside',
            price: '$20',
            status: 'pending',
            analytics: 'analytics',
            avatar: `${avatarPic}`
        },
        {
            id: '10',
            createAt: 'JAN 12, 2022',
            student: 'Samantha aryton',
            course: 'Lorem ipsum dolor sit a...',
            country: 'burnside',
            price: '$20',
            status: 'pending',
            analytics: 'analytics',
            avatar: `${avatarPic}`
        },
        {
            id: '11',
            createAt: 'JAN 13, 2022',
            student: 'Samantha aryton',
            course: 'Lorem ipsum dolor sit a...',
            country: 'burnside',
            price: '$20',
            status: 'pending',
            analytics: 'analytics',
            avatar: `${avatarPic}`
        },
        {
            id: '12',
            createAt: 'JAN 12, 2022',
            student: 'Samantha aryton',
            course: 'Lorem ipsum dolor sit a...',
            country: 'burnside',
            price: '$20',
            status: 'completed',
            analytics: 'analytics',
            avatar: `${avatarPic}`
        },
        {
            id: '13',
            createAt: 'JAN 12, 2022',
            student: 'Samantha aryton',
            course: 'Lorem ipsum dolor sit a...',
            country: 'burnside',
            price: '$20',
            status: 'canceled',
            analytics: 'analytics',
            avatar: `${avatarPic}`
        },
        {
            id: '14',
            createAt: 'JAN 12, 2022',
            student: 'Samantha aryton',
            course: 'Lorem ipsum dolor sit a...',
            country: 'burnside',
            price: '$20',
            status: 'pending',
            analytics: 'analytics',
            avatar: `${avatarPic}`
        },
    ];

    return (



        <>

            <div style={{ paddingBottom: '5rem' }} >
                <div className='first-tutor-panel-my-bookings-content-wraper-p' >

                    {/* upper download button */}

                    <Grid container spacing={2} >
                        <Grid item xs={12} >
                            <div className='tutor-my-booking-download-btn-container-p-mb' >
                                <button>
                                    download
                                </button>
                            </div>
                        </Grid>
                    </Grid>

                    {/* search fields container */}
                    <div style={{ marginTop: '20px',marginBottom:'10px' }} >
                        <Grid container spacing={2} >
                            <Grid item xs={12} lg={3} md={4} >
                                <div className='tutor-my-booking-search-field-container' >
                                    <p>
                                        Search by Student name
                                    </p>
                                    <input type='text' />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4} lg={3} >
                                <div className='tutor-my-booking-search-field-container' >
                                    <p>
                                        Search by Price
                                    </p>
                                    <input type='text' />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4} lg={3} >
                                <div className='tutor-my-booking-search-field-container' >
                                    <p>
                                        Search by Course
                                    </p>
                                    <input type='text' />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4} lg={3} >
                                <div className='tutor-my-booking-search-field-container' >
                                    <p>
                                        Search by Country
                                    </p>
                                    <input type='text' />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4} lg={3} >
                                <div className='tutor-my-booking-search-field-container' >
                                    <div className='first-tutor-add-new-course-text-field-with-calendar-contain-two' >
                                        <p>
                                            Seach by date
                                        </p>
                                        <div className='first-tutor-add-new-course-text-field-with-calendar-three' >
                                            <input type='text' />
                                            <IconButton style={{ padding: '6px 5px ' }} id="basic-button"
                                                aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick} >
                                                <DateRangeIcon style={{ fontSize: '16px' }} />
                                            </IconButton>
                                        </div>
                                    </div>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <div onClick={handleClose}>
                                            <CalendarComponent />
                                        </div>

                                    </Menu>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4} lg={3} >
                                <div className='tutor-my-booking-search-field-container' >
                                    <div className='first-tutor-add-new-course-text-field-with-calendar-contain-two' >
                                        <p>
                                            Seach by status
                                        </p>
                                        <div className='first-tutor-add-new-course-text-field-with-calendar-three' >
                                            <input type='text' />
                                            <IconButton style={{ padding: '6px 5px ' }} id="basic-button"
                                                aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClickStatus} >
                                                <KeyboardArrowDownIcon style={{ fontSize: '16px' }} />
                                            </IconButton>
                                        </div>
                                    </div>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorE2}
                                        open={openStatus}
                                        onClose={handleCloseStatus}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <div className='status-filter-dropdown-content-container' >
                                            <div onClick={handleClose} className='status-filter-dropdown-content' >
                                                <p>
                                                    All
                                                </p>
                                            </div>
                                            <div onClick={handleClose} className='status-filter-dropdown-content' >
                                                <p>
                                                    active
                                                </p>
                                            </div>
                                            <div onClick={handleClose} className='status-filter-dropdown-content' >
                                                <p>
                                                    pending
                                                </p>
                                            </div>
                                            <div onClick={handleClose} className='status-filter-dropdown-content' >
                                                <p>
                                                    All
                                                </p>
                                            </div>
                                        </div>

                                    </Menu>
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    <div style={{marginBottom:'30px'}} >
                        <Grid container spacing={2} >
                            <Grid item xs={12} >
                                <div className='first-tutor-my-booking-apply-button-container' style={{display:'flex',alignItems:'center',justifyContent:'flex-start'}} >
                                    <button  >
                                        apply
                                    </button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    {/* table */}

                    <TableContainer component={Paper} sx={{ maxHeight: 440 }} >
                        <Table sx={{ minWidth: 650, }} size="small" stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow className='tutor-my-booking-table-head-container'  >
                                    <TableCell>ID</TableCell>
                                    <TableCell align="left">create at</TableCell>
                                    <TableCell align="left">student</TableCell>
                                    <TableCell align="left">course</TableCell>
                                    <TableCell align="left">country</TableCell>
                                    <TableCell align="center">price</TableCell>
                                    <TableCell align="center">status</TableCell>
                                    <TableCell align="center">analytics</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody  >

                                {
                                    myBooking.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(i => (
                                        (
                                            <>
                                                <TableRow
                                                    key={i.id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        <p>{i.id}</p>
                                                    </TableCell>
                                                    <TableCell align="left"><p> {i.createAt} </p></TableCell>
                                                    <TableCell align="left"  >
                                                        <div className='tutor-mybooking-table-student-container' >
                                                            <Avatar style={{ width: '38px', height: '38px' }} >
                                                                <img src={i.avatar} alt="" width='100%' />
                                                            </Avatar>
                                                            <p>
                                                                {i.student}
                                                            </p>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell align="left"><p> {i.course} </p></TableCell>
                                                    <TableCell align="left"><p> {i.country} </p></TableCell>
                                                    <TableCell align="center"><p> {i.price} </p></TableCell>
                                                    <TableCell align="center"><p style={{ backgroundColor: i.status == 'pending' ? '#FFD1B0' : i.status == 'completed' ? '#D2FFEB' : '#FFB0B0', color: i.status == 'pending' ? '#B84D00' : i.status == 'completed' ? '#098B51' : '#B80000' }} className="tutor-my-booking-table-status-style" > {i.status} </p></TableCell>
                                                    <TableCell align="center"> <Link to='analytics' > <img src={analytics} alt="" /> </Link> </TableCell>
                                                </TableRow>
                                            </>
                                        )
                                    ))
                                }

                            </TableBody>
                        </Table>

                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 50]}
                                    count={myBooking.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    component='div'

                                />
                            </TableRow>
                        </TableFooter>

                    </TableContainer>



                </div>
            </div>
        </>
    )
}