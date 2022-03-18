import React from 'react'
import './inviteFriend.css'
import { Grid, IconButton } from '@mui/material'
import fb from '../../../assets/blackFb.png'
import linkedIn from '../../../assets/blackLinkedIn.png'
import twiter from '../../../assets/blackTwitter.png'
import whatsApp from '../../../assets/blackWhatsApp.png'
import mask from '../../../assets/inviteFriendMask.png'
import { InviteFriendSByCountry, InviteFriendSByStuName, StartEndDate } from '../../../components/tutorPanelComponents/fields/searchFields'
import {InviteFriendStudentSearchTable} from '../../../components/tutorPanelComponents/tables/tables'


export const InviteFriend = () => {
    return (
        <>
            <div className='tutor-invite-frnd-page-container-upper' >
                <Grid container spacing={2} >
                    <Grid item xs={12} >
                        <div className='tutor-in-fr-pg-heading-container' >
                            <p>
                                Invite Friend
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className='tutor-in-fr-pg-heading-desc-container' >
                            <p>
                                Donec enim lectus, venenatis nec aliquam a, varius sed ex. Ut laoreet augue velit, vel malesuada elit euismod ut. Nam at dui eros. Vivamus sem quam, tincidunt a urna congue, malesuada consectetur leo. Donec ornare consectetur ante, ac viverra arcu rhoncus ac
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className='tutor-in-fr-pg-href-tag-field-container' >
                            <p>
                                example test
                            </p>
                            <button>
                                COPY
                            </button>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className='tutor-in-fri-seare-with-friends-main-container' >
                            <div style={{ marginRight: '20px' }} >
                                <p>
                                    Share with your friends
                                </p>
                            </div>
                            <div className='tutor-in-fri-seare-with-friends-icons-container' >
                                <IconButton className='s-social-i-icon' >
                                    <img src={fb} alt="" />
                                </IconButton>
                                <IconButton className='s-social-i-icon' >
                                    <img src={linkedIn} alt="" />
                                </IconButton>
                                <IconButton className='s-social-i-icon' >
                                    <img src={twiter} alt="" />
                                </IconButton>
                                <IconButton className='s-social-i-icon' >
                                    <img src={whatsApp} alt="" />
                                </IconButton>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className='tutor-in-fri--mask' >
                            <img src={mask} alt="mask" width='100%' />
                        </div>
                    </Grid>

                </Grid>
            </div>

            <div className='tutor-invite-frnd-page-container-lowerrr' >
                <Grid container spacing={2} >
                    <Grid item xs={12} md={4} lg={3} >
                        <div>
                            <InviteFriendSByStuName />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3} >
                        <div>
                            <InviteFriendSByCountry />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3} >
                        <div>
                            <StartEndDate />
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={3} >
                        <div className='tutor-invi-fri-filters-apply-btn-container' >
                            <button>
                                apply
                            </button>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div>
                            <InviteFriendStudentSearchTable />
                        </div>
                    </Grid>
                </Grid>
            </div>

        </>
    )
}
