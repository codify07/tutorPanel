import React from 'react'
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
                    <p style={{fontWeight:'550'}} >
                        Withdraw History
                    </p>
                </div>
                <Table sx={{ minWidth: 650, }} size="small" stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow style={{height:'3rem',}}  >
                            <TableCell align='left' style={{fontWeight:'700,',width:'20%'}} >Date</TableCell>
                            <TableCell align='center' style={{fontWeight:'700'}}  >Mathod</TableCell>
                            <TableCell align='center' style={{fontWeight:'700'}} >Amount</TableCell>
                            <TableCell align='center' style={{fontWeight:'700'}} >Status</TableCell>


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
                                            style={{height:'3rem',}}
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

                                            <TableCell align="center"  > <p className="tutor-my-booking-table-status-style" style={{ textTransform: 'capitalize', backgroundColor: i.status == 'pending' ? '#FFD1B0' : i.status == 'accept' ? '#D2FFEB' : '#FFB0B0', color: i.status == 'pending' ? '#B84D00' : i.status == 'accept' ? '#098B51' : '#B80000',width:'30%',margin:'auto' }} >{i.status} </p> </TableCell>

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
           name:'Willow Anderson',
           discription:'Lorem ipsum dolor sit a...',
           country:'burnside',
           amount:'$2000',

        },
        {
            id: '2',
            date: 'JAN 4, 2022, 10:04 am',
           name:'Willow Anderson',
           discription:'Lorem ipsum dolor sit a...',
           country:'burnside',
           amount:'$2000',

        },
        {
            id: '3',
            date: 'JAN 4, 2022, 10:04 am',
           name:'Willow Anderson',
           discription:'Lorem ipsum dolor sit a...',
           country:'burnside',
           amount:'$2000',

        },
        {
            id: '4',
            date: 'JAN 4, 2022, 10:04 am',
           name:'Willow Anderson',
           discription:'Lorem ipsum dolor sit a...',
           country:'burnside',
           amount:'$2000',

        },
        




    ];
    return (
        <>

            <TableContainer component={Paper} sx={{ maxHeight: 440 }} >
                <div style={{ borderBottom: '2px solid #E5E5E5', padding: '8px 10px' }} >
                    <p style={{fontWeight:'550'}} >
                        Wallet Earning History
                    </p>
                </div>
                <Table sx={{ minWidth: 650, }} size="small" stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow style={{height:'3rem',}}  >
                            <TableCell style={{fontWeight:'700'}} >Date</TableCell>
                            <TableCell align='center' style={{fontWeight:'700'}}  >Name</TableCell>
                            <TableCell align='center' style={{fontWeight:'700'}} >Description</TableCell>
                            <TableCell align='center' style={{fontWeight:'700'}} >Country</TableCell>
                            <TableCell align='center' style={{fontWeight:'700'}} >Amount</TableCell>


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
                                            style={{height:'3rem'}}
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
