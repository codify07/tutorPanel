import React, { useState } from 'react'
import './fields.css'
import SearchIcon from '@mui/icons-material/Search';
import dateIcon from '../../../assets/startEndDate.png'
import DateRangeIcon from '@mui/icons-material/DateRange';
import { IconButton } from '@mui/material'
import { CalendarComponent } from '../../../components/calendar/calendar';
import Menu from '@mui/material/Menu';
import { width } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {WithdrawalMoneyCard} from '../cards/cards'


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
                            <WithdrawalMoneyCard />
                        </div>

                    </div>

                </Menu>
            </div>

        </>
    )
}