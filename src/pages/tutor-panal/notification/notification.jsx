import React from 'react'
import './notification.css'
import { Grid, Avatar } from '@mui/material'
import { SearchByStudentName } from '../../../components/tutorPanelComponents/fields/searchFields'
import { NotificationField } from '../../../components/tutorPanelComponents/fields/searchFields'
import { StartEndDate } from '../../../components/tutorPanelComponents/fields/searchFields'
import avatar from '../../../assets/avatar2.png'



export const Notification = () => {
    const notificationData = [
        {
            id: '1',
            name: 'smantha aryton',
            message: 'Congratulate Nataliya law purchase your Lorem ipsum dolor sit a... Course',
            avatar: `${avatar}`,
            date: 'JAN 10, 2022'
        },
        {
            id: '2',
            name: 'smantha aryton',
            message: 'Congratulate Nataliya law purchase your Lorem ipsum dolor sit a... Course',
            avatar: `${avatar}`,
            date: 'JAN 8, 2022'
        },
        {
            id: '3',
            name: 'smantha aryton',
            message: 'Congratulate Nataliya law purchase your Lorem ipsum dolor sit a... Course',
            avatar: `${avatar}`,
            date: 'JAN 7, 2022'
        },
        {
            id: '4',
            name: 'smantha aryton',
            message: 'Congratulate Nataliya law purchase your Lorem ipsum dolor sit a... Course',
            avatar: `${avatar}`,
            date: 'JAN 6, 2022'
        },
        {
            id: '5',
            name: 'smantha aryton',
            message: 'Congratulate Nataliya law purchase your Lorem ipsum dolor sit a... Course',
            avatar: `${avatar}`,
            date: 'JAN 5, 2022'
        },
        {
            id: '6',
            name: 'smantha aryton',
            message: 'Congratulate Nataliya law purchase your Lorem ipsum dolor sit a... Course',
            avatar: `${avatar}`,
            date: 'JAN 4, 2022'
        },
        {
            id: '7',
            name: 'smantha aryton',
            message: 'Congratulate Nataliya law purchase your Lorem ipsum dolor sit a... Course',
            avatar: `${avatar}`,
            date: 'JAN 4, 2022'
        },
        {
            id: '8',
            name: 'smantha aryton',
            message: 'Congratulate Nataliya law purchase your Lorem ipsum dolor sit a... Course',
            avatar: `${avatar}`,
            date: 'JAN 4, 2022'
        },
        {
            id: '9',
            name: 'smantha aryton',
            message: 'Congratulate Nataliya law purchase your Lorem ipsum dolor sit a... Course',
            avatar: `${avatar}`,
            date: 'JAN 4, 2022'
        },{
            id: '10',
            name: 'smantha aryton',
            message: 'Congratulate Nataliya law purchase your Lorem ipsum dolor sit a... Course',
            avatar: `${avatar}`,
            date: 'JAN 4, 2022'
        },
    ]
    return (
        <>

            <div className='tutor-notification-page-container' >
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <div className='tutor-notification-page-header-container' >
                            <button>
                                download
                            </button>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3} >
                        <div>
                            <SearchByStudentName />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3} >
                        <div>
                            <NotificationField />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3} >
                        <div>
                            <StartEndDate />
                        </div>
                    </Grid>
                </Grid>


                {/* body */}

                <div style={{ marginTop: '30px' }} >
                    <Grid container >
                        <Grid item xs={12} >
                            <div className='tutor-notification-mesage-container--' >
                                <Avatar className='tutor-notification-message-avatar-' >
                                    <img src={avatar} alt="" />
                                </Avatar>
                                <div>
                                    <p>
                                        <span style={{ fontWeight: '550', textTransform: 'capitalize' }} > Smantha Aryton </span>
                                        Complate your Lorem ipsum dolor sit a...
                                    </p>
                                    <p className='tutor-notification-message-date--' >
                                        JAN 5, 2022
                                    </p>
                                </div>
                            </div>
                            {
                                notificationData.map((user) => (
                                    <div>
                                        <div className='tutor-notification-mesage-container--' style={{backgroundColor:'#F4F4F4'}} >
                                            <Avatar className='tutor-notification-message-avatar-' >
                                                <img src={user.avatar} alt="avatar" />
                                            </Avatar>
                                            <div>
                                                <p className='tutor-notification-message--p' >
                                                    <span style={{ fontWeight: '550', textTransform: 'capitalize' }} > {user.name} </span>
                                                   {
                                                       user.message
                                                   }
                                                </p>
                                                <p className='tutor-notification-message-date--' >
                                                    {
                                                        user.date
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Grid>
                    </Grid>
                </div>


            </div>

        </>
    )
}