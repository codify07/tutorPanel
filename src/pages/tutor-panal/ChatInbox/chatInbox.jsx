import React from 'react'
import { Grid, IconButton } from '@mui/material'
import DateRangeIcon from '@mui/icons-material/DateRange';
import './chatInbox.css'
import { TutorPanelChatInbox } from '../../../components/tutorPanelComponents/chatInbox/chatInboxComponent'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {CalendarComponent} from '../../../components/calendar/calendar'



export const ChatInbox = () => {
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

            <div className='first-tutor-panel-chat-inbox-page-container' >
                <Grid container spacing={2} >
                    <Grid item xs={12} md={5} >
                        <div>
                            <div className='first-tutor-add-new-course-text-field-with-calendar-contain-two' >
                                <p>
                                    Seach by date
                                </p>
                                <div className='first-tutor-add-new-course-text-field-with-calendar-two' >
                                    <input type='text' />
                                    <IconButton id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick} >
                                        <DateRangeIcon style={{ fontSize: '20px' }} />
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
                    <Grid item xs={12} md={7} >
                        <div>
                            <div className='firt-tutor-panel-chat-inbox-page-apply-btn' >
                                <p>
                                    Seach by date
                                </p>

                                <button>
                                    apply
                                </button>
                            </div>

                        </div>
                    </Grid>
                </Grid>
                {/* chat box */}
                <div className='first-tutor-panel-chat-inbox-page-container-box' >
                    <TutorPanelChatInbox />
                </div>
            </div>

        </>
    )
}