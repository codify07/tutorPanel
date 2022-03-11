import React, { useState } from 'react'
import './chatInboxComponent.css'
import chatGroup from '../../../assets/chatGroup.png'
import { Grid, Avatar, Badge, Dialog, IconButton } from '@mui/material'
import avatar1 from '../../../assets/avatar2.png'
import { SearchFieldWithIcon } from '../../../components/tutorPanelComponents/fields/searchFields'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { AddNewGroupChat } from '../../tutorPanelComponents/dialogs/tutorDialogs'
import { AddNewGroupChatNextDialog } from '../../tutorPanelComponents/dialogs/tutorDialogs'
import CloseIcon from '@mui/icons-material/Close';


export const TutorPanelChatInbox = () => {
    const [isAddGroupOpen, setIsAddGroupOpen] = useState(false)
    const [isNextOpen, setIsNextOpen] = useState(false)

    const handleAddGroupClose = () => {
        setIsAddGroupOpen(false)
    }

    const handleNextClose = () => {
        setIsNextOpen(false)
    }

    return (
        <>

            <div>
                <Grid container >
                    <Grid item xs={12} md={4} >
                        <div className="first-tutor-p-chat-inbox-left-panel-container" >
                            <div className='first-tutor-p-chat-inbox-left-heading-container' >
                                <h2>
                                    Chat inbox
                                </h2>
                                <div className='first-tutor-chat-inbox-add-group-container' onClick={() => {
                                    setIsAddGroupOpen(true)
                                }} >
                                    <img src={chatGroup} alt="icon" />
                                    <p>
                                        New Group
                                    </p>
                                </div>
                            </div>
                            <div style={{ height: '2rem' }} >
                                <SearchFieldWithIcon />
                            </div>
                            <div className='first-tutor-chat-inbox-content-wrapper' >
                                <div className='first-tutor-chat-inbox-user-profile-container' style={{ backgroundColor: '#E5E5E5', borderLeft: '2px solid #76AC2D' }} >

                                    <div>
                                        <Badge color="success" overlap="circular" badgeContent=" " variant="dot" anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }} >
                                            <Avatar style={{ width: '55px', height: '55px' }} >
                                                <img src={avatar1} alt="avatar" width='100%' />
                                            </Avatar>
                                        </Badge>
                                    </div>
                                    <div className='first-tutor-panel-chat-inbox-user-profile-title-container' >
                                        <h2>
                                            Johan smith
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing
                                        </p>

                                    </div>
                                </div>
                                <div className='first-tutor-chat-inbox-user-profile-container'  >

                                    <div>
                                        <Badge color="success" overlap="circular" variant="dot" anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }} >
                                            <Avatar style={{ width: '55px', height: '55px' }} >
                                                <img src={avatar1} alt="avatar" width='100%' />
                                            </Avatar>
                                        </Badge>
                                    </div>
                                    <div className='first-tutor-panel-chat-inbox-user-profile-title-container' >
                                        <h2>
                                            Johan smith
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing
                                        </p>

                                    </div>
                                </div>
                                <div className='first-tutor-chat-inbox-user-profile-container'  >

                                    <div>
                                        <Badge color="success" overlap="circular" variant="dot" anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }} >
                                            <Avatar style={{ width: '55px', height: '55px' }} >
                                                <img src={avatar1} alt="avatar" width='100%' />
                                            </Avatar>
                                        </Badge>
                                    </div>
                                    <div className='first-tutor-panel-chat-inbox-user-profile-title-container' >
                                        <h2>
                                            Johan smith
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing
                                        </p>

                                    </div>
                                </div>
                                <div className='first-tutor-chat-inbox-user-profile-container'  >

                                    <div>
                                        <Badge color="success" overlap="circular" variant="dot" anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }} >
                                            <Avatar style={{ width: '55px', height: '55px' }} >
                                                <img src={avatar1} alt="avatar" width='100%' />
                                            </Avatar>
                                        </Badge>
                                    </div>
                                    <div className='first-tutor-panel-chat-inbox-user-profile-title-container' >
                                        <h2>
                                            Johan smith
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing
                                        </p>

                                    </div>
                                </div>
                                <div className='first-tutor-chat-inbox-user-profile-container'  >

                                    <div>
                                        <Badge color="success" overlap="circular" variant="dot" anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }} >
                                            <Avatar style={{ width: '55px', height: '55px' }} >
                                                <img src={avatar1} alt="avatar" width='100%' />
                                            </Avatar>
                                        </Badge>
                                    </div>
                                    <div className='first-tutor-panel-chat-inbox-user-profile-title-container' >
                                        <h2>
                                            Johan smith
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing
                                        </p>

                                    </div>
                                </div>
                                <div className='first-tutor-chat-inbox-user-profile-container'  >

                                    <div>
                                        <Badge color="success" overlap="circular" variant="dot" anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }} >
                                            <Avatar style={{ width: '55px', height: '55px' }} >
                                                <img src={avatar1} alt="avatar" width='100%' />
                                            </Avatar>
                                        </Badge>
                                    </div>
                                    <div className='first-tutor-panel-chat-inbox-user-profile-title-container' >
                                        <h2>
                                            Johan smith
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing
                                        </p>

                                    </div>
                                </div>
                                <div className='first-tutor-chat-inbox-user-profile-container'  >

                                    <div>
                                        <Badge color="success" overlap="circular" variant="dot" anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }} >
                                            <Avatar style={{ width: '55px', height: '55px' }} >
                                                <img src={avatar1} alt="avatar" width='100%' />
                                            </Avatar>
                                        </Badge>
                                    </div>
                                    <div className='first-tutor-panel-chat-inbox-user-profile-title-container' >
                                        <h2>
                                            Johan smith
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing
                                        </p>

                                    </div>
                                </div>
                                <div className='first-tutor-chat-inbox-user-profile-container'  >

                                    <div>
                                        <Badge color="success" overlap="circular" variant="dot" anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }} >
                                            <Avatar style={{ width: '55px', height: '55px' }} >
                                                <img src={avatar1} alt="avatar" width='100%' />
                                            </Avatar>
                                        </Badge>
                                    </div>
                                    <div className='first-tutor-panel-chat-inbox-user-profile-title-container' >
                                        <h2>
                                            Johan smith
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing
                                        </p>

                                    </div>
                                </div>
                                <div className='first-tutor-chat-inbox-user-profile-container'  >

                                    <div>
                                        <Badge color="success" overlap="circular" variant="dot" anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }} >
                                            <Avatar style={{ width: '55px', height: '55px' }} >
                                                <img src={avatar1} alt="avatar" width='100%' />
                                            </Avatar>
                                        </Badge>
                                    </div>
                                    <div className='first-tutor-panel-chat-inbox-user-profile-title-container' >
                                        <h2>
                                            Johan smith
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={8} >
                        <div className='first-panel-chat-inbox-user-profile-right-container' >

                            <div className='first-panel-chat-inbox-user-profile-right-side-heading' >
                                <h2>
                                    Johan smith
                                </h2>
                                <div className='first-tutor-panel-chat-right-available-now-container' >
                                    <FiberManualRecordIcon style={{ fontSize: '10px', color: '#76AC2D' }} />
                                    <p>
                                        Available Now
                                    </p>
                                </div>

                            </div>

                            <div className='first-tutor-panel-chat-right-mesages-detail-container' >
                                <div className='first-tutor-panel-chat-right-mesages-detail-content-wraper-div' >
                                    <p className='first-tutor-panel-chat-right-mesages-detail-date' >
                                        july 18,2020
                                    </p>
                                    <div className='first-tutor-panel-chat-right-mesages-detail-content-wraper-width' >

                                        <div className='first-tutor-panel-chat-right-mesages-detail-avatar-container' >
                                            <Avatar style={{ width: '55px', height: '55px' }} >
                                                <img src={avatar1} alt="avatar" width='100%' />
                                            </Avatar>
                                        </div>
                                        <div className='detail-chat-titleAnd-description-container' >
                                            <h4>
                                                Johan smith  <span className='first-message-time' > 9:33 pm </span>
                                            </h4>
                                            <p>
                                                Donec enim lectus, venenatis nec aliquam a, varius sed ex. Ut laoreet augue velit, vel malesuada elit euismod ut. Nam at dui eros. Vivamus sem quam, tincidunt a urna congue, malesuada consectetur leo. Donec ornare consectetur ante, ac viverra arcu rhoncus ac
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='first-tutor-panel-chat-right-mesages-detail-content-wraper-div' >
                                    <p className='first-tutor-panel-chat-right-mesages-detail-date' >
                                        july 18,2020
                                    </p>
                                    <div className='first-tutor-panel-chat-right-mesages-detail-content-wraper-width' >

                                        <div className='first-tutor-panel-chat-right-mesages-detail-avatar-container' >
                                            <Avatar style={{ width: '55px', height: '55px' }} >
                                                <img src={avatar1} alt="avatar" width='100%' />
                                            </Avatar>
                                        </div>
                                        <div className='detail-chat-titleAnd-description-container' >
                                            <h4>
                                                Johan smith  <span className='first-message-time' > 9:33 pm </span>
                                            </h4>
                                            <p>
                                                Donec enim lectus, venenatis nec aliquam a, varius sed ex. Ut laoreet augue velit, vel malesuada elit euismod ut. Nam at dui eros. Vivamus sem quam, tincidunt a urna congue, malesuada consectetur leo. Donec ornare consectetur ante, ac viverra arcu rhoncus ac
                                            </p>
                                        </div>
                                    </div>
                                    <div className='first-tutor-panel-chat-right-mesages-detail-content-wraper-width' >

                                        <div className='first-tutor-panel-chat-right-mesages-detail-avatar-container' >
                                            <Avatar style={{ width: '55px', height: '55px' }} >
                                                <img src={avatar1} alt="avatar" width='100%' />
                                            </Avatar>
                                        </div>
                                        <div className='detail-chat-titleAnd-description-container' >
                                            <h4>
                                                Johan smith  <span className='first-message-time' > 9:33 pm </span>
                                            </h4>
                                            <p>
                                                Donec enim lectus, venenatis nec aliquam a, varius sed ex. Ut laoreet augue velit, vel malesuada elit euismod ut. Nam at dui eros. Vivamus sem quam, tincidunt a urna congue
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='first-tutor-panel-chat-right-mesages-detail-content-wraper-div' >
                                    <p className='first-tutor-panel-chat-right-mesages-detail-date' >
                                        july 18,2020
                                    </p>
                                    <div className='first-tutor-panel-chat-right-mesages-detail-content-wraper-width' >

                                        <div className='first-tutor-panel-chat-right-mesages-detail-avatar-container' >
                                            <Avatar style={{ width: '55px', height: '55px' }} >
                                                <img src={avatar1} alt="avatar" width='100%' />
                                            </Avatar>
                                        </div>
                                        <div className='detail-chat-titleAnd-description-container' >
                                            <h4>
                                                Johan smith  <span className='first-message-time' > 9:33 pm </span>
                                            </h4>
                                            <p>
                                                Donec enim lectus, venenatis nec aliquam a, varius sed ex. Ut laoreet augue velit, vel malesuada elit euismod ut. Nam at dui eros. Vivamus sem quam, tincidunt a urna congue, malesuada consectetur leo. Donec ornare consectetur ante, ac viverra arcu rhoncus ac
                                            </p>
                                        </div>
                                    </div>
                                    <div className='first-tutor-panel-chat-right-mesages-detail-content-wraper-width' >

                                        <div className='first-tutor-panel-chat-right-mesages-detail-avatar-container' >
                                            <Avatar style={{ width: '55px', height: '55px' }} >
                                                <img src={avatar1} alt="avatar" width='100%' />
                                            </Avatar>
                                        </div>
                                        <div className='detail-chat-titleAnd-description-container' >
                                            <h4>
                                                Johan smith  <span className='first-message-time' > 9:33 pm </span>
                                            </h4>
                                            <p>
                                                Donec enim lectus, venenatis nec aliquam a, varius sed ex. Ut laoreet augue velit, vel malesuada elit euismod ut. Nam at dui eros. Vivamus sem quam, tincidunt a urna congue
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* input field for msg */}
                            <div className='first-tutor-chat-inbox-msg-input-field-container' >
                                <div style={{ width: '80%' }} >
                                    <input type="text" placeholder='Write message...' className='first-tutor-chat-inbox-input' />
                                </div>
                                <div className='write-msg-input-btns-container' >
                                    <div>
                                        <input id='file-input' type='file' style={{ display: 'none' }} />
                                        <label htmlFor="file-input">
                                            <EmojiEmotionsIcon className='chat-box-emoji-btn' />
                                        </label>
                                    </div>
                                    <div>
                                        <input id='input-file' type='file' style={{ display: 'none' }} />
                                        <label htmlFor="input-file">
                                            <AttachFileIcon className='chat-box-input-file-btn' />
                                        </label>
                                    </div>
                                    <button className='chat-box-send-btn'>
                                        <SendIcon />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>

                {/*  */}

                <Dialog open={isAddGroupOpen} onClose={handleAddGroupClose} fullWidth maxWidth='sm' >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} >
                        <IconButton onClick={() => {
                            
                            setIsAddGroupOpen(false)
                        }} >
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div className='first-tutor-chat-inbox-add-new-group-dialog-page-container' >
                        <AddNewGroupChat />
                    </div>
                    <div className="first-tutor-chat-inbox-add-new-group-next-dialog-next-btn-container" >
                        <button onClick={() => {
                            setIsNextOpen(true)
                            setIsAddGroupOpen(false)
                        }} >
                            next
                        </button>
                    </div>
                </Dialog>
                <Dialog open={isNextOpen} onClose={handleNextClose} fullWidth maxWidth='sm' >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} >
                        <IconButton onClick={() => {
                            handleNextClose();
                        }} >
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div className='first-tutor-chat-inbox-add-new-group-dialog-page-container' >
                        <AddNewGroupChatNextDialog />
                    </div>
                    <div className="first-tutor-chat-inbox-add-new-group-next-dialog-next-btn-container" >
                        <button onClick={() => {
                            handleNextClose();
                        }} >
                            create
                        </button>
                    </div>
                </Dialog>
            </div>

        </>
    )
}