import React, { useState } from 'react'
import TablePagination from '@mui/material/TablePagination';
import TableFooter from '@mui/material/TableFooter';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import promotionPic from '../../../assets/promotionImg.png'
import quizPic from '../../../assets/quiz.png'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { Menu } from '@mui/material'
import './tables.css'
import { Link } from 'react-router-dom'
import avatar from '../../../assets/avatar2.png'
import {Avatar} from '@mui/material'




export const PromotionTable = () => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



    const myPromotion = [

        {
            id: '1',
            img: `${promotionPic}`,
            title: 'posuere nulla pharetra',
            discount: '20%',
            country: 'burnside',
            location: 'Lorem ipsum dolor sit a...',
            adminStatus: 'read',
            status: 'accept',
            action: 'active',

        },
        {
            id: '2',
            img: `${promotionPic}`,
            title: 'posuere nulla pharetra',
            discount: '20%',
            country: 'burnside',
            location: 'Lorem ipsum dolor sit a...',
            adminStatus: 'read',
            status: 'pending',
            action: 'active',

        },
        {
            id: '3',
            img: `${promotionPic}`,
            title: 'posuere nulla pharetra',
            discount: '20%',
            country: 'burnside',
            location: 'Lorem ipsum dolor sit a...',
            adminStatus: 'read',
            status: 'accept',
            action: 'inactive',

        },
        {
            id: '4',
            img: `${promotionPic}`,
            title: 'posuere nulla pharetra',
            discount: '20%',
            country: 'burnside',
            location: 'Lorem ipsum dolor sit a...',
            adminStatus: 'unread',
            status: 'accept',
            action: 'inactive',

        },
        {
            id: '5',
            img: `${promotionPic}`,
            title: 'posuere nulla pharetra',
            discount: '20%',
            country: 'burnside',
            location: 'Lorem ipsum dolor sit a...',
            adminStatus: 'read',
            status: 'accept',
            action: 'active',

        },
        {
            id: '6',
            img: `${promotionPic}`,
            title: 'posuere nulla pharetra',
            discount: '20%',
            country: 'burnside',
            location: 'Lorem ipsum dolor sit a...',
            adminStatus: 'read',
            status: 'reject',
            action: 'completed',

        },
        {
            id: '7',
            img: `${promotionPic}`,
            title: 'posuere nulla pharetra',
            discount: '20%',
            country: 'burnside',
            location: 'Lorem ipsum dolor sit a...',
            adminStatus: 'read',
            status: 'accept',
            action: 'inactive',

        },
        {
            id: '8',
            img: `${promotionPic}`,
            title: 'posuere nulla pharetra',
            discount: '20%',
            country: 'burnside',
            location: 'Lorem ipsum dolor sit a...',
            adminStatus: 'unread',
            status: 'pending',
            action: 'inactive',

        },
        {
            id: '9',
            img: `${promotionPic}`,
            title: 'posuere nulla pharetra',
            discount: '20%',
            country: 'burnside',
            location: 'Lorem ipsum dolor sit a...',
            adminStatus: 'read',
            status: 'accept',
            action: 'inactive',

        },
        {
            id: '10',
            img: `${promotionPic}`,
            title: 'posuere nulla pharetra',
            discount: '20%',
            country: 'burnside',
            location: 'Lorem ipsum dolor sit a...',
            adminStatus: 'read',
            status: 'accept',
            action: 'active',

        },


    ];
    return (
        <>

            <TableContainer component={Paper} sx={{ maxHeight: 440 }} >
                <Table sx={{ minWidth: 650, }} size="small" stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow className='tutor-my-booking-table-head-container'  >
                            <TableCell>ID</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell align="left">posuere nulla pharetra</TableCell>
                            <TableCell align="center">Discount</TableCell>
                            <TableCell align="center">Country</TableCell>
                            <TableCell align="left">Location</TableCell>
                            <TableCell align="center">Admin Status</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody  >

                        {
                            myPromotion.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(i => (
                                (
                                    <>
                                        <TableRow
                                            key={i.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                <p>{i.id}</p>
                                            </TableCell>
                                            <TableCell align="left"><img src={i.img} alt="" width='45px' /></TableCell>
                                            <TableCell align="left"  >
                                                <p>
                                                    {i.title}
                                                </p>
                                            </TableCell>
                                            <TableCell align="center"><p> {i.discount} </p></TableCell>
                                            <TableCell align="center"><p> {i.country} </p></TableCell>
                                            <TableCell align="left"><p> {i.location} </p></TableCell>
                                            <TableCell align="center"><p style={{ backgroundColor: i.adminStatus == 'read' ? '#FAD7FF' : '#E2E2E2', color: i.adminStatus == 'read' ? '#5E006A' : '#4F4F4F', textTransform: 'capitalize' }} className="tutor-my-booking-table-status-style" > {i.adminStatus} </p></TableCell>
                                            <TableCell align="center"  > <p className="tutor-my-booking-table-status-style" style={{ textTransform: 'capitalize', backgroundColor: i.status == 'pending' ? '#FFD1B0' : i.status == 'accept' ? '#D2FFEB' : '#FFB0B0', color: i.status == 'pending' ? '#B84D00' : i.status == 'accept' ? '#098B51' : '#B80000' }} >{i.status} </p> </TableCell>
                                            <TableCell align="center"> <p className="tutor-my-booking-table-status-style" style={{ textTransform: 'capitalize', backgroundColor: i.action == 'active' ? '#76AC2D' : i.action == 'inactive' ? '#303030' : '#76AC2D', color: 'white' }} >{i.action} </p> </TableCell>

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
                            count={myPromotion.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            component='div'

                        />
                    </TableRow>
                </TableFooter>

            </TableContainer>

        </>
    )
}



// withdraw history table

export const WithDrawHistoryTable = () => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



    const withdrawHistory = [

        {
            id: '1',
            date: 'JAN 4, 2022, 10:04 am',
            mathod: 'mastercard',
            amount: '$2000',
            status: 'pending'

        },
        {
            id: '2',
            date: 'JAN 5, 2022, 10:04 am',
            mathod: 'mastercard',
            amount: '$2000',
            status: 'pending'

        },
        {
            id: '3',
            date: 'JAN 6, 2022, 10:04 am',
            mathod: 'mastercard',
            amount: '$2050',
            status: 'pending'

        },
        {
            id: '4',
            date: 'JAN 4, 2022, 10:04 am',
            mathod: 'mastercard',
            amount: '$2000',
            status: 'pending'

        },




    ];
    return (
        <>

            <TableContainer component={Paper} sx={{ maxHeight: 440 }} >
                <div style={{ borderBottom: '2px solid #E5E5E5', padding: '8px 10px' }} >
                    <p style={{ fontWeight: '550' }} >
                        Withdraw History
                    </p>
                </div>
                <Table sx={{ minWidth: 650, }} size="small" stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow style={{ height: '3rem', }}  >
                            <TableCell align='left' style={{ fontWeight: '700,', width: '20%' }} >Date</TableCell>
                            <TableCell align='center' style={{ fontWeight: '700' }}  >Mathod</TableCell>
                            <TableCell align='center' style={{ fontWeight: '700' }} >Amount</TableCell>
                            <TableCell align='center' style={{ fontWeight: '700' }} >Status</TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody  >

                        {
                            withdrawHistory.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(i => (
                                (
                                    <>
                                        <TableRow
                                            key={i.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            style={{ height: '3rem', }}
                                        >
                                            <TableCell   >
                                                <p>{i.date}</p>
                                            </TableCell>
                                            <TableCell align='center' >
                                                <p>{i.mathod}</p>
                                            </TableCell>
                                            <TableCell align='center' >
                                                <p>{i.amount}</p>
                                            </TableCell>

                                            <TableCell align="center"  > <p className="tutor-my-booking-table-status-style" style={{ textTransform: 'capitalize', backgroundColor: i.status == 'pending' ? '#FFD1B0' : i.status == 'accept' ? '#D2FFEB' : '#FFB0B0', color: i.status == 'pending' ? '#B84D00' : i.status == 'accept' ? '#098B51' : '#B80000', width: '30%', margin: 'auto' }} >{i.status} </p> </TableCell>

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
                            count={withdrawHistory.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            component='div'

                        />
                    </TableRow>
                </TableFooter>

            </TableContainer>

        </>
    )
}



// wallet earning history


export const WalletEarnongHistoryTable = () => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



    const earningHistory = [

        {
            id: '1',
            date: 'JAN 4, 2022, 10:04 am',
            name: 'Willow Anderson',
            discription: 'Lorem ipsum dolor sit a...',
            country: 'burnside',
            amount: '$2000',

        },
        {
            id: '2',
            date: 'JAN 4, 2022, 10:04 am',
            name: 'Willow Anderson',
            discription: 'Lorem ipsum dolor sit a...',
            country: 'burnside',
            amount: '$2000',

        },
        {
            id: '3',
            date: 'JAN 4, 2022, 10:04 am',
            name: 'Willow Anderson',
            discription: 'Lorem ipsum dolor sit a...',
            country: 'burnside',
            amount: '$2000',

        },
        {
            id: '4',
            date: 'JAN 4, 2022, 10:04 am',
            name: 'Willow Anderson',
            discription: 'Lorem ipsum dolor sit a...',
            country: 'burnside',
            amount: '$2000',

        },





    ];
    return (
        <>

            <TableContainer component={Paper} sx={{ maxHeight: 440 }} >
                <div style={{ borderBottom: '2px solid #E5E5E5', padding: '8px 10px' }} >
                    <p style={{ fontWeight: '550' }} >
                        Wallet Earning History
                    </p>
                </div>
                <Table sx={{ minWidth: 650, }} size="small" stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow style={{ height: '3rem', }}  >
                            <TableCell style={{ fontWeight: '700' }} >Date</TableCell>
                            <TableCell align='center' style={{ fontWeight: '700' }}  >Name</TableCell>
                            <TableCell align='center' style={{ fontWeight: '700' }} >Description</TableCell>
                            <TableCell align='center' style={{ fontWeight: '700' }} >Country</TableCell>
                            <TableCell align='center' style={{ fontWeight: '700' }} >Amount</TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody  >

                        {
                            earningHistory.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(i => (
                                (
                                    <>
                                        <TableRow
                                            key={i.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            style={{ height: '3rem' }}
                                        >
                                            <TableCell scope="row">
                                                <p>{i.date}</p>
                                            </TableCell>
                                            <TableCell align='center' >
                                                <p>{i.name}</p>
                                            </TableCell>
                                            <TableCell align='center' >
                                                <p>{i.discription}</p>
                                            </TableCell>
                                            <TableCell align='center' >
                                                <p>{i.country}</p>
                                            </TableCell>
                                            <TableCell align='center' >
                                                <p>{i.amount}</p>
                                            </TableCell>


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
                            count={earningHistory.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            component='div'

                        />
                    </TableRow>
                </TableFooter>

            </TableContainer>

        </>
    )
}


// create quiz table 


export const QuizTable = () => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [isAudioTrue, setIsAudioTrue] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorElm, setAnchorElm] = React.useState(null);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleAudioClick = () => {
        setIsAudioTrue(!isAudioTrue)
    }


    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const openTwo = Boolean(anchorElm);
    const handleClickTwo = (event) => {
        setAnchorElm(event.currentTarget);
    };
    const handleCloseTwo = () => {
        setAnchorElm(null);
    };

    const createQuiz = [

        {
            id: '1',
            date: 'JAN 4, 2022, 10:04 am',
            img: `${quizPic}`,
            audio: '',
            quizTitle: 'Pellentesque et purus pharetra, venenatis...',
            NoOfQuest: '50',


        },
        {
            id: '2',
            date: 'JAN 4, 2022, 10:04 am',
            img: `${quizPic}`,
            audio: '',
            quizTitle: 'Pellentesque et purus pharetra, venenatis...',
            NoOfQuest: '50',


        },
        {
            id: '3',
            date: 'JAN 4, 2022, 10:04 am',
            img: `${quizPic}`,
            audio: '',
            quizTitle: 'Pellentesque et purus pharetra, venenatis...',
            NoOfQuest: '50',


        },
        {
            id: '4',
            date: 'JAN 4, 2022, 10:04 am',
            img: `${quizPic}`,
            audio: '',
            quizTitle: 'Pellentesque et purus pharetra, venenatis...',
            NoOfQuest: '50',


        },
        {
            id: '5',
            date: 'JAN 4, 2022, 10:04 am',
            img: `${quizPic}`,
            audio: '',
            quizTitle: 'Pellentesque et purus pharetra, venenatis...',
            NoOfQuest: '50',


        },






    ];
    return (
        <>

            <TableContainer component={Paper} sx={{ maxHeight: 440 }} >
                <Table sx={{ minWidth: 650, }} size="small" stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow style={{ height: '3rem', }}  >
                            <TableCell style={{ fontWeight: '700' }} >Date</TableCell>
                            <TableCell align='center' style={{ fontWeight: '700' }}  >Image</TableCell>
                            <TableCell align='center' style={{ fontWeight: '700' }} >Audio</TableCell>
                            <TableCell align='left' style={{ fontWeight: '700' }} >Quiz Title</TableCell>
                            <TableCell align='center' style={{ fontWeight: '700' }} >No Of Questions</TableCell>
                            <TableCell align='center' style={{ fontWeight: '700' }} >Status</TableCell>
                            <TableCell align='center' style={{ fontWeight: '700' }} >Admin Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody  >

                        {
                            createQuiz.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(i => (
                                (
                                    <>
                                        <TableRow
                                            key={i.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            style={{ height: '3rem' }}
                                        >
                                            <TableCell scope="row">
                                                <p>{i.date}</p>
                                            </TableCell>
                                            <TableCell align='center' >
                                                <img src={i.img} alt="pic" />
                                            </TableCell>
                                            <TableCell align='center' >
                                                <button onClick={handleAudioClick} style={{ border: 'none', padding: '7px 9px', backgroundColor: '#76AC2D', borderRadius: '10px' }} >
                                                    {
                                                        isAudioTrue ?
                                                            <PauseIcon style={{ color: 'white' }} />
                                                            :

                                                            <PlayArrowIcon style={{ color: 'white' }} />

                                                    }
                                                </button>
                                            </TableCell>
                                            <TableCell align='left' style={{ width: '200px', overflow: 'hidden' }} >
                                                <p>{i.quizTitle}</p>
                                            </TableCell>
                                            <TableCell align='center' >
                                                <p>{i.NoOfQuest}</p>
                                            </TableCell>
                                            <TableCell align='center' >
                                                <div>
                                                    <p id="demo-positioned-button"
                                                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                                                        aria-haspopup="true"
                                                        aria-expanded={open ? 'true' : undefined}
                                                        onClick={handleClickTwo} className='tutor-p-status-cell-hover' style={{ backgroundColor: '#FFD1B0', padding: '5px', color: '#B84D00', borderRadius: '4px', width: '80px', margin: 'auto' }} >
                                                        pending
                                                    </p>
                                                    <Menu

                                                        anchorEl={anchorElm}
                                                        open={openTwo}
                                                        onClose={handleCloseTwo}
                                                        id="demo-positioned-menu"
                                                        aria-labelledby="demo-positioned-button"
                                                        anchorOrigin={{
                                                            vertical: 'bottom',
                                                            horizontal: 'left',

                                                        }}

                                                    >
                                                        <div style={{ width: 'auto', padding: '10px 0px' }} >
                                                            <div>
                                                                <Link to='view' onClick={handleClose} style={{ textDecoration: 'none', color: 'black' }}  >
                                                                    <p className='create-promotion-drop-down-items-style'  > Active </p>
                                                                </Link>
                                                            </div>
                                                            <div style={{ marginTop: '5px' }} >
                                                                <Link to='edit' onClick={handleClose} style={{ textDecoration: 'none', color: 'black' }} >
                                                                    <p className='create-promotion-drop-down-items-style'  >  Pending </p>
                                                                </Link>
                                                            </div>
                                                            <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                                                                Deactive
                                                            </p>

                                                        </div>

                                                    </Menu>
                                                </div>
                                            </TableCell>

                                            <TableCell align='center' >
                                                <div>
                                                    <p id="demo-positioned-button"
                                                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                                                        aria-haspopup="true"
                                                        aria-expanded={open ? 'true' : undefined}
                                                        onClick={handleClick} className='tutor-create-quiz-action-p-btn-' style={{ backgroundColor: 'black', padding: '5px', color: 'white', borderRadius: '4px', width: '80px', margin: 'auto' }} >
                                                        Action
                                                    </p>
                                                    <Menu

                                                        anchorEl={anchorEl}
                                                        open={open}
                                                        onClose={handleClose}
                                                        id="demo-positioned-menu"
                                                        aria-labelledby="demo-positioned-button"
                                                        anchorOrigin={{
                                                            vertical: 'bottom',
                                                            horizontal: 'left',

                                                        }}

                                                    >
                                                        <div style={{ width: 'auto', padding: '10px 0px' }} >
                                                            <div>
                                                                <Link to='view' onClick={handleClose} style={{ textDecoration: 'none', color: 'black' }}  >
                                                                    <p className='create-promotion-drop-down-items-style'  > View </p>
                                                                </Link>
                                                            </div>
                                                            <div style={{ marginTop: '5px' }} >
                                                                <Link to='edit' onClick={handleClose} style={{ textDecoration: 'none', color: 'black' }} >
                                                                    <p className='create-promotion-drop-down-items-style'  >  Edit </p>
                                                                </Link>
                                                            </div>
                                                            <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                                                                Delete
                                                            </p>

                                                        </div>

                                                    </Menu>
                                                </div>
                                            </TableCell>


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
                            count={createQuiz.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            component='div'

                        />
                    </TableRow>
                </TableFooter>

            </TableContainer>

        </>
    )
}


// search student invite friends


export const InviteFriendStudentSearchTable = () => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



    const students = [

        {
            id: '1',
            date: 'JAN 4, 2022, 10:04 am',
            profilePic: `${avatar}`,
            name:'Samantha aryton',
            socialMedia: 'whatsapp',
            country: 'burnside',
            status: 'active'

        },
        {
            id: '2',
            date: 'JAN 4, 2022, 10:04 am',
            profilePic: `${avatar}`,
            name: 'Johan smith',
            socialMedia: 'whatsapp',
            country: 'burnside',
            status: 'active'

        },
        {
            id: '3',
            date: 'JAN 4, 2022, 10:04 am',
            profilePic: `${avatar}`,
            name: 'Nataliya law',
            socialMedia: 'LinkedIn',
            country: 'burnside',
            status: 'inactive'

        },
        {
            id: '4',
            date: 'JAN 4, 2022, 10:04 am',
            profilePic: `${avatar}`,
            name: 'Samantha aryton',
            socialMedia: 'twitter',
            country: 'burnside',
            status: 'active'

        },
        {
            id: '5',
            date: 'JAN 4, 2022, 10:04 am',
            profilePic: `${avatar}`,
            name: 'Samantha aryton',
            socialMedia: 'facebook',
            country: 'burnside',
            status: 'active'

        },

    ];
    return (
        <>

            <TableContainer component={Paper} sx={{ maxHeight: 440 }} >
                <Table sx={{ minWidth: 650, }} size="small" stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow style={{ height: '3rem', }}  >
                            <TableCell align='left' style={{ fontWeight: '700' }} > ID </TableCell>
                            <TableCell align='left' style={{ fontWeight: '700,',  }} >Date</TableCell>
                            <TableCell align='left' style={{ fontWeight: '700' }}  >Name</TableCell>
                            <TableCell align='center' style={{ fontWeight: '700' }} >Social Media</TableCell>
                            <TableCell align='center' style={{ fontWeight: '700' }} >Country</TableCell>
                            <TableCell align='center' style={{ fontWeight: '700' }} >Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody  >

                        {
                            students.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(i => (
                                (
                                    <>
                                        <TableRow
                                            key={i.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            style={{ height: '3rem', }}
                                        >
                                            <TableCell   >
                                                <p>{i.id}</p>
                                            </TableCell>
                                            <TableCell align='left' > <p> {i.date} </p> </TableCell>
                                            <TableCell align='center' >
                                                <div style={{display:'flex',alignItems:'center'}} >
                                                    <Avatar style={{width:'45px',height:'45px',marginRight:'12px'}} >
                                                        <img src={i.profilePic} alt="" width='100%' />
                                                    </Avatar>
                                                    <div>
                                                        <p>
                                                            {i.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell align='center' >
                                                <p>{i.socialMedia}</p>
                                            </TableCell>
                                            <TableCell align='center' >
                                                <p>{i.country}</p>
                                            </TableCell>
                                            <TableCell align="center"  > <p className="tutor-my-booking-table-status-style" style={{ textTransform: 'capitalize', backgroundColor: i.status == 'active' ? '#D2FFEB' : '#FFB0B0', color: i.status == 'active' ? '#098B51' : '#B80000', }} >{i.status} </p> </TableCell>

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
                            count={students.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            component='div'

                        />
                    </TableRow>
                </TableFooter>

            </TableContainer>

        </>
    )
}

// dispute table


// search student invite friends


export const DisputeTable = () => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



    const dispute = [

        {
            id: '1',
            booking: 'posuere nulla pharetra',
            creation: 'JAN 4, 2022',
            statistics:'Lorem ipsum dolor sit a...',
            adminStatus: 'read',
            disputeStatus: 'pending'

        },
        {
            id: '2',
            booking: 'posuere nulla pharetra',
            creation: 'JAN 5, 2022',
            statistics:'Lorem ipsum dolor sit a...',
            adminStatus: 'read',
            disputeStatus: 'resoloved'

        },
        {
            id: '3',
            booking: 'posuere nulla pharetra',
            creation: 'JAN 6, 2022',
            statistics:'Lorem ipsum dolor sit a...',
            adminStatus: 'unread',
            disputeStatus: 'pending'

        },
        {
            id: '4',
            booking: 'posuere nulla pharetra',
            creation: 'JAN 7, 2022',
            statistics:'Lorem ipsum dolor sit a...',
            adminStatus: 'read',
            disputeStatus: 'resolved'

        },
        {
            id: '5',
            booking: 'posuere nulla pharetra',
            creation: 'JAN 8 2022',
            statistics:'Lorem ipsum dolor sit a...',
            adminStatus: 'read',
            disputeStatus: 'pending'

        },
        {
            id: '6',
            booking: 'posuere nulla pharetra',
            creation: 'JAN 9, 2022',
            statistics:'Lorem ipsum dolor sit a...',
            adminStatus: 'read',
            disputeStatus: 'pending'

        },

    ];
    return (
        <>

            <TableContainer component={Paper} sx={{ maxHeight: 440 }} >
                <Table sx={{ minWidth: 650, }} size="small" stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow style={{ height: '3rem', }}  >
                            <TableCell align='left' style={{ fontWeight: '700' }} > ID </TableCell>
                            <TableCell align='left' style={{ fontWeight: '700,',  }} >Booking</TableCell>
                            <TableCell align='left' style={{ fontWeight: '700' }}  >Creation</TableCell>
                            <TableCell align='left' style={{ fontWeight: '700' }} >statistics</TableCell>
                            <TableCell align='center' style={{ fontWeight: '700' }} >Admin Status</TableCell>
                            <TableCell align='center' style={{ fontWeight: '700' }} >Dispute Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody  >

                        {
                            dispute.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(i => (
                                (
                                    <>
                                        <TableRow
                                            key={i.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            style={{ height: '3rem', }}
                                        >
                                            <TableCell   >
                                                <p>{i.id}</p>
                                            </TableCell>
                                            <TableCell align='left' > <p> {i.booking} </p> </TableCell>
                                            <TableCell align='left' >
                                                <p>
                                                    {i.creation}
                                                </p>
                                            </TableCell>
                                            <TableCell align='left' >
                                                <p>{i.statistics}</p>
                                            </TableCell>
                                            <TableCell align='center' >
                                            <p className="tutor-my-booking-table-status-style" style={{ textTransform: 'capitalize', backgroundColor: i.adminStatus == 'read' ? '#FAD7FF' : '#E2E2E2', color: i.adminStatus == 'read' ? '#5E006A' : '#4F4F4F', }} >{i.adminStatus} </p> 
                                            </TableCell>
                                            <TableCell align="center"  > <p className="tutor-my-booking-table-status-style" style={{ textTransform: 'capitalize', backgroundColor: i.disputeStatus == 'pending' ? '#FFD1B0' : i.disputeStatus == 'resolved' ? '#D2FFEB' :'#FFB0B0' , color: i.disputeStatus == 'pending' ? '#B84D00' : i.disputeStatus == 'resolved' ? '#098B51' :  '#B80000', }} >{i.disputeStatus} </p> </TableCell>

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
                            count={dispute.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            component='div'

                        />
                    </TableRow>
                </TableFooter>

            </TableContainer>

        </>
    )
}

// transaction history table


export const TransactionHistoryTable = () => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



    const transactionHistory = [

        {
            id: '1',
            date: 'Jan 04, 2022',
            bankName: 'HDFC bank',
            description:'Lorem ipsum dolor sit a...',
            CourceName: 'Lorem ipsum dolor sit a...',
            studentName: 'Willow Anderson',
            Country:'burnside',
            amount:'$2,000',


        },
        {
            id: '2',
            date: 'Jan 02, 2022',
            bankName: 'HDFC bank',
            description:'Lorem ipsum dolor sit a...',
            CourceName: 'Lorem ipsum dolor sit a...',
            studentName: "Henry O'Brien",
            Country:'burnside',
            amount:'$2,000',


        },
        {
            id: '3',
            date: 'Jan 01, 2022',
            bankName: 'HDFC bank',
            description:'Lorem ipsum dolor sit a...',
            CourceName: 'Lorem ipsum dolor sit a...',
            studentName: 'Adam Hughes',
            Country:'burnside',
            amount:'$2,000',


        },
        {
            id: '4',
            date: 'Dec 29, 2021',
            bankName: 'HDFC bank',
            description:'Lorem ipsum dolor sit a...',
            CourceName: 'Lorem ipsum dolor sit a...',
            studentName: 'Mason Murray',
            Country:'burnside',
            amount:'$2,000',


        },
        {
            id: '5',
            date: 'Dec 14, 2021',
            bankName: 'HDFC bank',
            description:'Lorem ipsum dolor sit a...',
            CourceName: 'Lorem ipsum dolor sit a...',
            studentName: "Elijah O'Brien",
            Country:'burnside',
            amount:'$2,000',


        },
        {
            id: '6',
            date: 'Dec 12, 2021',
            bankName: 'HDFC bank',
            description:'Lorem ipsum dolor sit a...',
            CourceName: 'Lorem ipsum dolor sit a...',
            studentName: 'Willow Anderson',
            Country:'burnside',
            amount:'$2,000',


        },
       

    ];
    return (
        <>

            <TableContainer component={Paper} sx={{ maxHeight: 440 }} >
                <Table sx={{ minWidth: 650, }} size="small" stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow style={{ height: '3rem', }}  >
                            <TableCell align='left' style={{ fontWeight: '700' }} > ID </TableCell>
                            <TableCell align='left' style={{ fontWeight: '700,',  }} >Date</TableCell>
                            <TableCell align='left' style={{ fontWeight: '700' }}  >Bank Name</TableCell>
                            <TableCell align='left' style={{ fontWeight: '700' }} >Discription</TableCell>
                            <TableCell align='left' style={{ fontWeight: '700' }} >Course Name</TableCell>
                            <TableCell align='center' style={{ fontWeight: '700' }} >Student  Name</TableCell>
                            <TableCell align='center' style={{ fontWeight: '700' }} >Country</TableCell>
                            <TableCell align='center' style={{ fontWeight: '700' }} >Amount</TableCell>
                            <TableCell align='center' style={{ fontWeight: '700' }} ></TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody  >

                        {
                            transactionHistory.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(i => (
                                (
                                    <>
                                        <TableRow
                                            key={i.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            style={{ height: '3rem', }}
                                        >
                                            <TableCell   >
                                                <p>{i.id}</p>
                                            </TableCell>
                                            <TableCell align='left' > <p> {i.date} </p> </TableCell>
                                            <TableCell align='left' >
                                                <p>
                                                    {i.bankName}
                                                </p>
                                            </TableCell>
                                            <TableCell align='left' >
                                                <p>{i.description}</p>
                                            </TableCell>
                                            <TableCell align='left' >
                                                <p>{i.CourceName}</p>
                                            </TableCell>
                                            <TableCell align='center' >
                                                <p>{i.studentName}</p>
                                            </TableCell><TableCell align='left' >
                                                <p>{i.Country}</p>
                                            </TableCell>
                                            <TableCell align='center' >
                                                <p>{i.amount}</p>
                                            </TableCell>
                                            <TableCell align="center"  > 
                                                <p className='transaction-history--table--paid--btn' >
                                                    paid
                                                </p>
                                             </TableCell>

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
                            count={transactionHistory.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            component='div'

                        />
                    </TableRow>
                </TableFooter>

            </TableContainer>

        </>
    )
}