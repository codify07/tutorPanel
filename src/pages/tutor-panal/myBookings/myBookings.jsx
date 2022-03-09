import React from 'react'
import './myBookings.css'
import { Grid, IconButton } from '@mui/material'
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



    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('id', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];



    return (
        <>

            <div>
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
                    <div style={{ marginTop: '20px',marginBottom:'30px' }} >
                        <Grid container spacing={2} >
                            <Grid item xs={12} md={2} >
                                <div className='tutor-my-booking-search-field-container' >
                                    <p>
                                        Search by Student name
                                    </p>
                                    <input type='text' />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={2} >
                                <div className='tutor-my-booking-search-field-container' >
                                    <p>
                                        Search by Price
                                    </p>
                                    <input type='text' />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={2} >
                                <div className='tutor-my-booking-search-field-container' >
                                    <p>
                                        Search by Course
                                    </p>
                                    <input type='text' />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={2} >
                                <div className='tutor-my-booking-search-field-container' >
                                    <p>
                                        Search by Country
                                    </p>
                                    <input type='text' />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={2} >
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
                            <Grid item xs={12} md={2} >
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

                    {/* table */}
                    <div style={{marginTop:'30px'}} >
                        <div style={{ width: '98%', margin: 'auto' }} >
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>id</TableCell>
                                            <TableCell align="right">create at</TableCell>
                                            <TableCell align="right">student</TableCell>
                                            <TableCell align="right">course</TableCell>
                                            <TableCell align="right">country</TableCell>
                                            <TableCell align="right">price</TableCell>
                                            <TableCell align="right">status</TableCell>
                                            <TableCell align="right">analytics</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        
                                            <TableRow
                                                
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    <p>1</p>
                                                </TableCell>
                                                <TableCell align="right"><p>JAN 4, 2022</p></TableCell>
                                                <TableCell align="right"><p>Samantha aryton</p></TableCell>
                                                <TableCell align="right"><p>Lorem ipsum dolor sit a...</p></TableCell>
                                                <TableCell align="right"><p>burnside</p></TableCell>
                                                <TableCell align="right"><p>$20</p></TableCell>
                                                <TableCell align="right"><p>Panding</p></TableCell>
                                                <TableCell align="right"><img src={analytics} alt="" /></TableCell>
                                            </TableRow>
                                        
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}