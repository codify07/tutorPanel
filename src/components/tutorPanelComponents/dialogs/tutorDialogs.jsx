import React from 'react'
import './dialogs.css'
import { Grid, Button, Avatar, IconButton } from '@mui/material'
import uploadPic from '../../../assets/uploadPic.png'
import certificate from '../../../assets/documentpdf.png'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import avatar2 from '../../../assets/avatar2.png'
import CloseIcon from '@mui/icons-material/Close';



export const EditContactDialog = () => {
    return (
        <>
            <Grid container spacing={3} >
                <Grid item xs={12} md={12} >
                    <div className='tutor-profile-contact-edit-dialog-contact-container' >
                        <p>
                            Edit Contact Information
                        </p>
                    </div>
                </Grid>

            </Grid>
            <div className='tutor-profile-edit-contact-dialog-content-wrapper' >
                <Grid container spacing={3} >
                    <Grid item xs={12} md={6}>
                        <div className='first-tutor-panel-edit-contact-text-field-container' >
                            <p>
                                First Name
                            </p>
                            <input type="text" />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className='first-tutor-panel-edit-contact-text-field-container' >
                            <p>
                                Last Name
                            </p>
                            <input type="text" />
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className='first-tutor-panel-edit-contact-text-field-container' >
                            <p>
                                Headline
                            </p>
                            <input type="text" placeholder='Your Course Title' />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <div className='first-tutor-panel-selection-btn-container' >
                            <p>
                                Country
                            </p>
                            <select id="category" name="category"  >
                                <option></option>

                            </select>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <div className='first-tutor-panel-selection-btn-container' >
                            <p>
                                City
                            </p>
                            <select id="category" name="category"  >
                                <option></option>

                            </select>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <div className='first-tutor-panel-edit-contact-text-field-container' >
                            <p>
                                Email ID
                            </p>
                            <input type="text" placeholder='Your Course Title' />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <div className='first-tutor-panel-edit-contact-text-field-container' >
                            <p>
                                Phone Number
                            </p>
                            <div className='first-tutor-panel-edit-contact-phone-no-field-container'>
                                <input type="text" placeholder='+971' className='first-tutor-panel-edit-contact-phone-no-field-left-side-div' />
                                <input type="text" placeholder='1234567890' className='first-tutor-panel-edit-contact-phone-no-field-right-side-div' />
                            </div>
                        </div>
                    </Grid>

                </Grid>
            </div>

        </>
    )
}


// edit overview dialog card 

export const EditOverview = () => {
    return (
        <>
            <Grid container spacing={3} >
                <Grid item xs={12} md={12} >
                    <div className='tutor-profile-contact-edit-dialog-contact-container' >
                        <p>
                            Edit Overview
                        </p>
                    </div>
                </Grid>

            </Grid>
            <div className='tutor-profile-edit-contact-dialog-content-wrapper' >
                <Grid container spacing={3} >
                    <Grid item xs={12} md={12}>
                        <div className='first-tutor-panel-edit-contact-text-field-container' >
                            <p>
                                Overview
                            </p>
                            <textarea name="overview" id="overview" placeholder='Write Your Overview...' />
                        </div>
                    </Grid>

                </Grid>
            </div>

        </>
    )
}

// edit eperience

export const EditEperience = () => {
    return (
        <>
            <Grid container spacing={3} >
                <Grid item xs={12} md={12} >
                    <div className='tutor-profile-contact-edit-dialog-contact-container' >
                        <p>
                            Edit Experience
                        </p>
                    </div>
                </Grid>
            </Grid>
            <div className='tutor-profile-edit-contact-dialog-content-wrapper' >
                <Grid container spacing={3} >
                    <Grid item xs={12}>
                        <div className='first-tutor-panel-edit-contact-text-field-container' >
                            <p>
                                Title
                            </p>
                            <input type="text" placeholder='Your Course Title' />
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className='first-tutor-panel-edit-contact-text-field-container' >
                            <p>
                                Employment Type
                            </p>
                            <input type="text" placeholder='Your Course Title' />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className='first-tutor-panel-edit-contact-text-field-container' >
                            <p>
                                Company name
                            </p>
                            <input type="text" placeholder='Your Course Title' />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className='first-tutor-panel-edit-contact-text-field-container' >
                            <p>
                                Location
                            </p>
                            <input type="text" placeholder='Your Course Title' />
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div>
                            <input type="checkbox" id="workingRole" name="workingRole" style={{ marginLeft: '6px' }} />
                            <label htmlFor="forWorkingRole" style={{ fontSize: '15px', marginLeft: '12px' }} > I am currently working in this role </label><br />
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className='first-tutor-panel-selection-btn-container' >
                            <p>
                                Start Date
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <div className='first-tutor-panel-selection-btn-container' style={{ marginTop: '-5%' }} >
                            <select id="StartDate" name="StartDate"  >
                                <option>March</option>

                            </select>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <div className='first-tutor-panel-selection-btn-container' style={{ marginTop: '-5%' }} >
                            <select id="category" name="category"  >
                                <option style={{ backgroundColor: 'greenyellow' }} >2018</option>

                            </select>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className='first-tutor-panel-selection-btn-container' >
                            <p>
                                End Date
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <div className='first-tutor-panel-selection-btn-container' style={{ marginTop: '-7%' }} >
                            <select id="EndDate" name="EndDate"  >
                                <option>May</option>

                            </select>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <div className='first-tutor-panel-selection-btn-container' style={{ marginTop: '-7%' }} >
                            <select id="category" name="category"  >
                                <option>2022</option>

                            </select>
                        </div>
                    </Grid>

                </Grid>
            </div>

        </>
    )
}


// add your Skill

export const AddSkill = () => {
    return (
        <>
            <Grid container spacing={3} >
                <Grid item xs={12} md={12} >
                    <div className='tutor-profile-contact-edit-dialog-contact-container' >
                        <p>
                            Add Your Skill
                        </p>
                    </div>
                </Grid>

            </Grid>
            <div className='tutor-profile-edit-contact-dialog-content-wrapper' >
                <Grid container spacing={3} >
                    <Grid item xs={12} md={12}>
                        <div className='first-tutor-panel-edit-contact-text-field-container' >
                            <p>
                                Skill
                            </p>
                            <input type="text" placeholder='Write Your Skill...' />
                        </div>
                    </Grid>
                </Grid>
            </div>

        </>
    )
}


// tutor profile education 


export const ProfileEducation = () => {
    return (
        <>
            <Grid container spacing={3} >
                <Grid item xs={12} md={12} >
                    <div className='tutor-profile-contact-edit-dialog-contact-container' >
                        <p>
                            Add Your Education
                        </p>
                    </div>
                </Grid>

            </Grid>
            <div className='tutor-profile-edit-contact-dialog-content-wrapper' >
                <Grid container spacing={3} >
                    <Grid item xs={12} md={6}>
                        <div className='first-tutor-panel-edit-contact-text-field-container' >
                            <p>
                                University
                            </p>
                            <input type="text" placeholder='' />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className='first-tutor-panel-edit-contact-text-field-container' >
                            <p>
                                Degree
                            </p>
                            <input type="text" placeholder="Bachelor's degree, computer science" />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <div className='first-tutor-panel-edit-contact-text-field-container' >
                            <p>
                                Session
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className='first-tutor-panel-selection-btn-container' >
                            <p>
                                Start Date
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <div className='first-tutor-panel-selection-btn-container' style={{ marginTop: '-5%' }} >
                            <select id="StartDate" name="StartDate"  >
                                <option>March</option>

                            </select>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <div className='first-tutor-panel-selection-btn-container' style={{ marginTop: '-5%' }} >
                            <select id="category" name="category"  >
                                <option style={{ backgroundColor: 'greenyellow' }} >2017</option>

                            </select>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className='first-tutor-panel-selection-btn-container' >
                            <p>
                                End Date
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <div className='first-tutor-panel-selection-btn-container' style={{ marginTop: '-7%' }} >
                            <select id="EndDate" name="EndDate"  >
                                <option>May</option>

                            </select>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <div className='first-tutor-panel-selection-btn-container' style={{ marginTop: '-7%' }} >
                            <select id="category" name="category"  >
                                <option>2021</option>

                            </select>
                        </div>
                    </Grid>

                </Grid>
            </div>

        </>
    )
}


// add certificate

export const ProfileAddCertificate = () => {
    return (
        <>
            <Grid container spacing={3} >
                <Grid item xs={12} md={12} >
                    <div className='tutor-profile-contact-edit-dialog-contact-container' >
                        <p>
                            Add Your Certificates
                        </p>
                    </div>
                </Grid>

            </Grid>
            <div className='tutor-profile-edit-contact-dialog-content-wrapper' >
                <Grid container spacing={3} >
                    <Grid item xs={12} >
                        <div className='first-tutor-panel-edit-contact-text-field-container' >
                            <p>

                            </p>

                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} >
                        <div style={{ width: '100%', height: "100%" }} >
                            <img src={certificate} alt="certificate" style={{ width: '100%', height: '100%' }} />
                        </div>

                    </Grid>
                    <Grid item xs={12} md={6} lg={3} >
                        <div className='component-register-add-certificate-btn-container' >
                            <Button className='component-register-add-certificate-btn' >
                                <AddOutlinedIcon style={{ fontSize: '80px' }} />
                            </Button>
                        </div>
                        <p style={{ color: 'gray', marginTop: '5px' }} >
                            (upload only pnj.jpg.pdf)
                        </p>
                    </Grid>

                </Grid>
            </div>

        </>
    )
}

// ask for recomendation


export const ProfileAskRecomendation = () => {
    return (
        <>
            <Grid container spacing={3} >
                <Grid item xs={12} md={12} >
                    <div className='tutor-profile-contact-edit-dialog-contact-container' >
                        <p>
                            Ask For Recommendation
                        </p>
                    </div>
                </Grid>

            </Grid>
            <div className='tutor-profile-edit-contact-dialog-content-wrapper' >
                <Grid container spacing={3} >
                    <Grid item xs={12} md={12}>
                        <div className='first-tutor-panel-edit-contact-text-field-container' >
                            <p>
                                Who do you want to ask?*
                            </p>
                            <input type="text" />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <div className='first-tutor-panel-selection-btn-container' >
                            <p>
                                How do you know SuRaj? (Relationship )*
                            </p>

                            <select id="" name="">

                                <option>friend</option>



                            </select>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className='first-tutor-panel-selection-btn-container' >
                            <p>
                                Position at the time*
                            </p>
                            <select id="category" name="category"  >
                                <option></option>

                            </select>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <div className='first-tutor-panel-edit-contact-text-field-container' >
                            <p>
                                personalized message*
                            </p>
                            <input type="text" />
                        </div>
                    </Grid>

                </Grid>
            </div>

        </>
    )
}

// chat box add new group 


export const AddNewGroupChat = () => {
    return (
        <>
            <Grid container spacing={3} >
                <Grid item xs={12} md={12} >
                    <div className='tutor-profile-contact-edit-dialog-contact-container' >
                        <p>
                            Add New Group
                        </p>
                    </div>
                </Grid>

            </Grid>
            <div className='tutor-profile-edit-contact-dialog-content-wrapper' >
                <Grid container spacing={2} >
                    <Grid item xs={12} >
                        <div className='first-tutor-chat-inbox-add-grp-dialog-container' >
                            <input type="checkbox" />
                            <Avatar style={{ width: '45px', height: '45px' }} >
                                <img src={avatar2} alt="avatar" width='100%' />
                            </Avatar>
                            <p>
                                Johan smith
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className='first-tutor-chat-inbox-add-grp-dialog-container' >
                            <input type="checkbox" />
                            <Avatar style={{ width: '45px', height: '45px' }} >
                                <img src={avatar2} alt="avatar" width='100%' />
                            </Avatar>
                            <p>
                                Johan smith
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className='first-tutor-chat-inbox-add-grp-dialog-container' >
                            <input type="checkbox" />
                            <Avatar style={{ width: '45px', height: '45px' }} >
                                <img src={avatar2} alt="avatar" width='100%' />
                            </Avatar>
                            <p>
                                Johan smith
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div>

        </>
    )
}


// chat box next btn dialog 

export const AddNewGroupChatNextDialog = () => {
    return (
        <>
            <Grid container spacing={3} >
                <Grid item xs={12} md={12} >
                    

                    <div className='tutor-profile-contact-edit-dialog-contact-container-chat'  >
                        <p>
                            Add New Group
                        </p>

                    </div>

                </Grid>

            </Grid>
            <div className='tutor-profile-edit-contact-dialog-content-wrapper' >
                <Grid container spacing={2} >
                    <Grid item xs={12} >
                        <div className='first-tutor-chat-inbox-add-grp-dialog-upload-img-container' >
                            <div>
                                <input type="file" id="grp-pic-upload" style={{ display: 'none' }} />
                                <label htmlFor='grp-pic-upload' >
                                    <Avatar style={{ padding: '12px 12px' }} >
                                        <img src={uploadPic} alt="pic" className='first-upload-grp-pic' />
                                    </Avatar>
                                </label>
                            </div>
                            <div className='first-upload-grp-input-field-container' >
                                <input type='text' placeholder='Your Group Title' />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className='first-tutor-chat-inbox-add-grp-dialog-container' >
                            <IconButton style={{ marginRight: '15px' }} >
                                <CloseIcon style={{ fontSize: '15px' }} />
                            </IconButton>
                            <Avatar style={{ width: '45px', height: '45px' }} >
                                <img src={avatar2} alt="avatar" width='100%' />
                            </Avatar>
                            <p>
                                Johan smith
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className='first-tutor-chat-inbox-add-grp-dialog-container' >
                            <IconButton style={{ marginRight: '15px' }} >
                                <CloseIcon style={{ fontSize: '15px' }} />
                            </IconButton>
                            <Avatar style={{ width: '45px', height: '45px' }} >
                                <img src={avatar2} alt="avatar" width='100%' />
                            </Avatar>
                            <p>
                                Johan smith
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className='first-tutor-chat-inbox-add-grp-dialog-container' >
                            <IconButton style={{ marginRight: '15px' }} >
                                <CloseIcon style={{ fontSize: '15px' }} />
                            </IconButton>
                            <Avatar style={{ width: '45px', height: '45px' }} >
                                <img src={avatar2} alt="avatar" width='100%' />
                            </Avatar>
                            <p>
                                Johan smith
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div>

        </>
    )
}
