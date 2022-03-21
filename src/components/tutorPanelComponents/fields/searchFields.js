import React from 'react'
import './fields.css'
import SearchIcon from '@mui/icons-material/Search';
import dateIcon from '../../../assets/startEndDate.png'
import DateRangeIcon from '@mui/icons-material/DateRange';
import { IconButton } from '@mui/material'
import { CalendarComponent } from '../../../components/calendar/calendar';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { WithdrawalMoneyCard } from '../cards/cards'


export const SearchByCouseName = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    Search by cource name
                </p>
                <div  >

                    <input id='' placeholder='search by course name' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}

export const SearchByPrice = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    Search by price
                </p>
                <div  >

                    <input id='' placeholder='search by price' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}

// search by date

export const SearchByDate = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    Search by date
                </p>
                <div  >

                    <input id='' placeholder='search by date' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}

// search field

export const SearchFieldWithIcon = () => {
    return (
        <>

            <div className='tutor-panel-component-search-field-container' >
                <SearchIcon style={{ marginLeft: '12px' }} />
                <input type='text' placeholder='search...' />
            </div>

        </>
    )
}

// search by title

export const SearchByTitle = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    Search by title
                </p>
                <div  >

                    <input id='' placeholder='search by title' type='text' className="tutor-panel-search-field-input" />

                </div>

            </div>

        </>
    )
}

// start date end date 

export const StartEndDate = () => {
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
            <div className="tutor-panel-search-field-container" >
                <p>
                    Search by date
                </p>
                <div className='tutor-panel-search-start-date-end-date-fields-container' id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick} >

                    <input id='' placeholder='start date' type='text' className="sd-ed-start-date-end-date-input-field" />
                    <img src={dateIcon} alt='icon' />
                    <input id='' placeholder='end date' type='text' className="sd-ed-start-date-end-date-input-field-two" />
                    <IconButton style={{ padding: '3px', marginRight: '5px' }}  >
                        <DateRangeIcon style={{ fontSize: '15px' }} />
                    </IconButton>
                </div>
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
                    <div onClick={handleClose} style={{ display: 'flex' }} >
                        <div style={{ width: '300px' }} >
                            <CalendarComponent />
                        </div>
                        <div style={{ marginLeft: '20px', width: '300px' }} >
                            <CalendarComponent />
                        </div>
                    </div>

                </Menu>
            </div>

        </>
    )
}

// start end date for analytics 


export const StartEndDateAnalytics = () => {
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
            <div className="tutor-panel-search-field-container" >
                
                <div className='tutor-panel-search-start-date-end-date-fields-container' id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick} >

                    <input id='' placeholder='start date' type='text' className="sd-ed-start-date-end-date-input-field" />
                    <img src={dateIcon} alt='icon' />
                    <input id='' placeholder='end date' type='text' className="sd-ed-start-date-end-date-input-field-two" />
                    <IconButton style={{ padding: '3px', marginRight: '5px' }}  >
                        <DateRangeIcon style={{ fontSize: '15px' }} />
                    </IconButton>
                </div>
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
                    <div onClick={handleClose} style={{ display: 'flex' }} >
                        <div style={{ width: '300px' }} >
                            <CalendarComponent />
                        </div>
                        <div style={{ marginLeft: '20px', width: '300px' }} >
                            <CalendarComponent />
                        </div>
                    </div>

                </Menu>
            </div>

        </>
    )
}


// promotion type
export const PromotionType = () => {

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

            <div className="tutor-panel-search-field-container" >
                <p>
                    promotion type
                </p>

                <div id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}

                >

                    <button className='promotion-type-select-btn' >
                        <p>

                        </p>
                        <IconButton>
                            <KeyboardArrowDownIcon />
                        </IconButton>

                    </button>

                </div>
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
                    <div style={{ width: '200px' }} >
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style' >
                            type
                        </p>
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style' >
                            type
                        </p>
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style' >
                            type
                        </p>
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style' >
                            type
                        </p>
                    </div>

                </Menu>

            </div>

        </>
    )
}



export const PromotionTitle = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    title
                </p>
                <div  >

                    <input id='' placeholder='your Promotin Title' type='text' style={{ paddingTop: '10px', paddingBottom: '10px' }} className="tutor-panel-search-field-input" />

                </div>

            </div>

        </>
    )
}

// price before field

export const PriceBefore = () => {

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
            <div className='tutor-create-promotion-prive-before-container--' >
                <p>
                    price before
                </p>
                <div className='tutor-create-promotion-price-before-field-container--' >
                    <button id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}  >
                        <p>
                            $
                        </p>
                        <IconButton >
                            <KeyboardArrowDownIcon />
                        </IconButton>
                    </button>
                    <input id="" type='text' />
                </div>
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
                    <div style={{ width: '60px' }} >
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            $
                        </p>
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            $
                        </p>
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            $
                        </p>
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            $
                        </p>
                    </div>

                </Menu>
            </div>

        </>
    )
}



// price after field

export const PriceAfter = () => {

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
            <div className='tutor-create-promotion-prive-before-container--' >
                <p>
                    price after
                </p>
                <div className='tutor-create-promotion-price-before-field-container--' >
                    <button id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}  >
                        <p>
                            $
                        </p>
                        <IconButton >
                            <KeyboardArrowDownIcon />
                        </IconButton>
                    </button>
                    <input id="" type='text' />
                </div>
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
                    <div style={{ width: '60px' }} >
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            $
                        </p>
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            $
                        </p>
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            $
                        </p>
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            $
                        </p>
                    </div>

                </Menu>
            </div>

        </>
    )
}

// create promotion discount

export const DiscountCreate = () => {


    return (
        <>
            <div className='tutor-create-promotion-prive-before-container--' >
                <p>
                    price after
                </p>
                <div className='tutor-create-promotion-price-before-field-container--' >
                    <p style={{ paddingLeft: '12px', paddingRight: '12px', paddingTop: '10px', paddingBottom: '10px', backgroundColor: '#E5E5E5', borderRight: '1px solid lightgray' }} >
                        %
                    </p>
                    <input id="" type='text' />
                </div>

            </div>

        </>
    )
}


// start date


export const StartDate = () => {
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
            <div className="tutor-panel-search-field-container" >
                <p>
                    Start Date
                </p>
                <div className='tutor-panel-search-start-date-end-date-fields-container' id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick} >

                    <input id='' placeholder='start date' type='text' className="sd-ed-start-date-end-date-input-field" />
                    <IconButton style={{ padding: '12px', marginRight: '5px' }}  >
                        <DateRangeIcon style={{ fontSize: '15px' }} />
                    </IconButton>
                </div>
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
                    <div onClick={handleClose}  >
                        <div style={{ height: '200px' }} >
                            <CalendarComponent />
                        </div>

                    </div>

                </Menu>
            </div>

        </>
    )
}


// end date 

export const EndDate = () => {
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
            <div className="tutor-panel-search-field-container" >
                <p>
                    End Date
                </p>
                <div className='tutor-panel-search-start-date-end-date-fields-container' id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick} >

                    <input id='' placeholder='end date' type='text' className="sd-ed-start-date-end-date-input-field" />
                    <IconButton style={{ padding: '12px', marginRight: '5px' }}  >
                        <DateRangeIcon style={{ fontSize: '15px' }} />
                    </IconButton>
                </div>
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
                    <div onClick={handleClose}  >
                        <div style={{ height: '200px' }} >
                            <CalendarComponent />
                        </div>

                    </div>

                </Menu>
            </div>

        </>
    )
}


// text Area


export const TextAreaForCreatePromotion = () => {
    return (
        <>
            <div className='text-area-container-style--' >
                <p>
                    Course Description
                </p>
                <textarea placeholder='Enter Your Course Description...' />
            </div>

        </>
    )
}

// search ny student name

export const SearchByStudentName = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    Search by student Name
                </p>
                <div>

                    <input id='' type='text' className="tutor-panel-search-field-input" />

                </div>

            </div>

        </>
    )
}

// notification

export const NotificationField = () => {
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
            <div className="tutor-panel-search-field-container" >
                <p>
                    Notification
                </p>
                <div className='tutor-panel-search-start-date-end-date-fields-container' id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick} >

                    <input id='' placeholder='All' type='text' className="sd-ed-start-date-end-date-input-field" />
                    <IconButton style={{ padding: '4px', marginRight: '5px' }}  >
                        <KeyboardArrowDownIcon style={{ fontSize: '15px' }} />
                    </IconButton>
                </div>
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
                    <div style={{ width: '250px' }} >
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            All
                        </p>
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            Monthly
                        </p>
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            $
                        </p>
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            Yearly
                        </p>
                    </div>

                </Menu>
            </div>

        </>
    )
}

// add amount for wallet page 


export const AddAmount = () => {

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
            <div className='tutor-create-promotion-prive-before-container--' >
                <p>
                    Add Ammount
                </p>
                <div className='tutor-create-promotion-price-before-field-container--' >
                    <button id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}  >
                        <p>
                            $
                        </p>
                        <IconButton >
                            <KeyboardArrowDownIcon />
                        </IconButton>
                    </button>
                    <input id="" type='text' />
                </div>
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
                    <div style={{ width: '60px' }} >
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            $
                        </p>
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            $
                        </p>
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            $
                        </p>
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            $
                        </p>
                    </div>

                </Menu>
            </div>

        </>
    )
}


// select account

export const SelectAccountField = () => {
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
            <div className="tutor-panel-search-field-container" >
                <p>
                    Select Account
                </p>
                <div className='tutor-panel-search-start-date-end-date-fields-container' id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick} >

                    <input id='' placeholder='select account' type='text' className="sd-ed-start-date-end-date-input-field" />
                    <IconButton style={{ padding: '12px', marginRight: '5px' }}  >
                        <KeyboardArrowDownIcon style={{ fontSize: '15px' }} />
                    </IconButton>
                </div>
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
                    <div onClick={handleClose}  >
                        <div style={{ height: '200px' }} >
                            <WithdrawalMoneyCard />
                        </div>

                    </div>

                </Menu>
            </div>

        </>
    )
}

// card holder name 

export const MyWalletCardHolderName = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    Card Holder SearchByCouseName
                </p>
                <div  >

                    <input id='' placeholder='card holder name' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}

// account number 


export const MyWalletAccountNumber = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    Account Number
                </p>
                <div  >

                    <input id='' placeholder='xxxx xxxx xxxx xxxx' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}

// my wallet card expiry date 

export const MyWalletExpiryDate = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    Expiry date
                </p>
                <div  >

                    <input id='' placeholder='dd/mm' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}

// my wallet cw

export const MyWalletCw = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    CW
                </p>
                <div  >

                    <input id='' placeholder='xxx' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}


// quiz title 


export const Quiztitle = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    Search by quiz title
                </p>
                <div  >

                    <input id='' placeholder='search by quiz title' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}

// quiz status filter 

export const QuizStatus = () => {
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

            <div className="tutor-panel-search-field-container" >
                <p>
                    Status
                </p>
                <div  >

                    <div className='tutor-panel-search-start-date-end-date-fields-container' id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick} >

                        <input id='' placeholder='All' type='text' className="sd-ed-start-date-end-date-input-field" />
                        <IconButton style={{ padding: '6px', marginRight: '2px' }}  >
                            <KeyboardArrowDownIcon style={{ fontSize: '18px' }} />
                        </IconButton>
                    </div>
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
                            <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                                All
                            </p>
                            <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                                Pending
                            </p>
                            <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                                Active
                            </p>
                            <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                                Deactive
                            </p>
                        </div>

                    </Menu>
                </div>
            </div>

        </>
    )
}

// quiz & question title

export const EditQuiztitle = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    Quiz Title
                </p>
                <div  >

                    <input id='' placeholder='' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}

// purchase product 


export const PurchaseProductSearchByName = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    Search By Name
                </p>
                <div  >

                    <input id='' placeholder='' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}

// search by price 

export const PurchaseProductSearchByPrice = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    Search By Price
                </p>
                <div  >

                    <input id='' placeholder='' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}

// invite friend 

export const InviteFriendSByStuName = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    Search By Student Name
                </p>
                <div  >

                    <input id='' placeholder='' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}

// invite friend search by country


export const InviteFriendSByCountry = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    Search by Country
                </p>
                <div  >

                    <input id='' placeholder='' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}

// search by booking


export const DisputeSearchByBooking = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    Search by booking
                </p>
                <div  >

                    <input id='' placeholder='' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}

// dispute adming status

export const DisputeSearchByAdmin = () => {
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

            <div className="tutor-panel-search-field-container" >
                <p>
                    Admin Status
                </p>
                <div  >

                    <div className='tutor-panel-search-start-date-end-date-fields-container' id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick} >

                        <input id='' placeholder='All' type='text' className="sd-ed-start-date-end-date-input-field" />
                        <IconButton style={{ padding: '6px', marginRight: '2px' }}  >
                            <KeyboardArrowDownIcon style={{ fontSize: '18px' }} />
                        </IconButton>
                    </div>
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
                        <div style={{ width: 'auto', padding: '10px 0px', width: '120px' }} >
                            <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                                All
                            </p>
                            <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                                Read
                            </p>
                            <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                                Unread
                            </p>

                        </div>

                    </Menu>
                </div>
            </div>

        </>
    )
}

// dispute status



export const DisputeStatus = () => {
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

            <div className="tutor-panel-search-field-container" >
                <p>
                    dispute Status
                </p>
                <div  >

                    <div className='tutor-panel-search-start-date-end-date-fields-container' id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick} >

                        <input id='' placeholder='All' type='text' className="sd-ed-start-date-end-date-input-field" />
                        <IconButton style={{ padding: '6px', marginRight: '2px' }}  >
                            <KeyboardArrowDownIcon style={{ fontSize: '18px' }} />
                        </IconButton>
                    </div>
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
                        <div style={{ width: 'auto', padding: '10px 0px', width: '120px' }} >
                            <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                                All
                            </p>
                            <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                                Pending
                            </p>
                            <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                                Resolved
                            </p>
                            <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                                Terminated
                            </p>
                        </div>

                    </Menu>
                </div>
            </div>

        </>
    )
}

// create dispute title

export const CreateDisputeTitle = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    Title
                </p>
                <div  >

                    <input id='' placeholder='' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}

// create dispute textarea 

export const CreateDisputeTextArea = () => {
    return (
        <>
            <div className='text-area-container-style--' >
                <p>
                    Dispute Descriptiion
                </p>
                <textarea placeholder='Enter Your Dispute Description...' />
            </div>

        </>
    )
}

// transaction history 


export const TransactionHistoryTitle = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    Search by title
                </p>
                <div  >

                    <input id='' placeholder='' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}

// course start date 

// start date


export const CourseStartDate = () => {
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
            <div className="tutor-panel-search-field-container" >
                <p>
                    Course Start Date
                </p>
                <div className='tutor-panel-search-start-date-end-date-fields-container' id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick} >

                    <input id='' placeholder='start date' type='text' className="sd-ed-start-date-end-date-input-field" />
                    <IconButton style={{ padding: '12px', marginRight: '5px' }}  >
                        <DateRangeIcon style={{ fontSize: '15px' }} />
                    </IconButton>
                </div>
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
                    <div onClick={handleClose}  >
                        <div style={{ height: '200px' }} >
                            <CalendarComponent />
                        </div>

                    </div>

                </Menu>
            </div>

        </>
    )
}


// course end date 

export const CourseEndDate = () => {
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
            <div className="tutor-panel-search-field-container" >
                <p>
                    Course End Date
                </p>
                <div className='tutor-panel-search-start-date-end-date-fields-container' id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick} >

                    <input id='' placeholder='end date' type='text' className="sd-ed-start-date-end-date-input-field" />
                    <IconButton style={{ padding: '12px', marginRight: '5px' }}  >
                        <DateRangeIcon style={{ fontSize: '15px' }} />
                    </IconButton>
                </div>
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
                    <div onClick={handleClose}  >
                        <div style={{ height: '200px' }} >
                            <CalendarComponent />
                        </div>

                    </div>

                </Menu>
            </div>

        </>
    )
}

// add new course price per lesson

export const AddPricePerLesson = () => {

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
            <div className='tutor-create-promotion-prive-before-container--' style={{ borderBottom: '1px solid #E5E5E5', paddingBottom: '20px' }}  >
                <p>
                    Add Price Per Lesson
                </p>
                <div className='tutor-create-promotion-price-before-field-container--' >
                    <button id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}  >
                        <p>
                            $
                        </p>
                        <IconButton >
                            <KeyboardArrowDownIcon />
                        </IconButton>
                    </button>
                    <input id="" type='text' placeholder='20' />
                </div>
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
                    <div style={{ width: '60px' }} >
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            $
                        </p>
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            $
                        </p>
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            $
                        </p>
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            $
                        </p>
                    </div>

                </Menu>
            </div>

        </>
    )
}

// add new course package in add new course

export const AddNewCoursePackageTitle = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    title
                </p>
                <div  >

                    <input id='' placeholder='' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}

// add new course package subtitle in add new course


export const AddNewCoursePackageSubTitle = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    subtitle
                </p>
                <div  >

                    <input id='' placeholder='' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}

// add new course price  

export const AddNewPackagePrice = () => {

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
            <div className='tutor-create-promotion-prive-before-container--' style={{ borderBottom: '1px solid #E5E5E5', paddingBottom: '20px' }}  >
                <p>
                    Price
                </p>
                <div className='tutor-create-promotion-price-before-field-container--' >
                    <button id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}  >
                        <p>
                            $
                        </p>
                        <IconButton >
                            <KeyboardArrowDownIcon style={{fontSize:'15px',padding:'1px'}} />
                        </IconButton>
                    </button>
                    <input id="" type='text' placeholder='20' />
                </div>
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
                    <div style={{ width: '60px' }} >
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            $
                        </p>
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            $
                        </p>
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            $
                        </p>
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            $
                        </p>
                    </div>

                </Menu>
            </div>

        </>
    )
}

// add new course package description in add new course


export const AddNewCoursePackageDescription = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    description
                </p>
                <div  >

                    <input id='' placeholder='' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}

// add new package no

export const AddNewCoursePackagePackageNO = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    Package NO
                </p>
                <div  >

                    <input id='' placeholder='' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}

// add new section in add new course

export const AddNewCourseAddNewSectionSectionNO = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    Section NO
                </p>
                <div  >

                    <input id='' placeholder='' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}

export const AddNewCourseAddNewSectionSectionName = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    Section Name
                </p>
                <div  >

                    <input id='' placeholder='' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}

export const AddNewCourseAddNewSectionLectureName = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    Lacture Name
                </p>
                <div  >

                    <input id='' placeholder='' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}

// what you will teach

export const AddNewCourseAddWhatYouWillTeach = () => {
    return (

        <>

            <div className="tutor-panel-search-field-container" >
                <p>
                    What You Will Teach
                </p>
                <div  >

                    <input id='' placeholder='' type='text' className="tutor-panel-search-field-input" />

                </div>
            </div>

        </>
    )
}

// analytics

export const AnalyticsMonthly = () => {
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
            <div className="tutor-panel-search-field-container" >
                
                <div className='tutor-panel-search-start-date-end-date-fields-container' id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick} >

                    <input id='' placeholder='All' type='text' className="sd-ed-start-date-end-date-input-field" />
                    <IconButton style={{ padding: '4px', marginRight: '5px' }}  >
                        <KeyboardArrowDownIcon style={{ fontSize: '15px' }} />
                    </IconButton>
                </div>
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
                    <div style={{ width: '200px' }} >
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            All
                        </p>
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            Monthly
                        </p>
                        <p onClick={handleClose} className='create-promotion-drop-down-items-style'  >
                            Yearly
                        </p>
                    </div>

                </Menu>
            </div>

        </>
    )
}