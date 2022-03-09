import React, { useState } from 'react'
import './profile.css'
import { Grid, IconButton } from '@mui/material'
import profileMask from '../../../assets/profileMask.png'
import profilePic from '../../../assets/profilePic.png'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import emailIcon from '../../../assets/email-simple.png'
import callIcon from '../../../assets/call-simple.png'
import plus from '../../../assets/plus.png'
import edu1 from '../../../assets/edu1.png'
import edu2 from '../../../assets/edu3.png'
import avatar2 from '../../../assets/avatar2.png'
import star from '../../../assets/start.png'
import Dialog from '@mui/material/Dialog';
import { EditContactDialog } from '../../../components/tutorPanelComponents/dialogs/tutorDialogs'
import { EditOverview } from '../../../components/tutorPanelComponents/dialogs/tutorDialogs'
import { EditEperience } from '../../../components/tutorPanelComponents/dialogs/tutorDialogs'
import { AddSkill } from '../../../components/tutorPanelComponents/dialogs/tutorDialogs'
import { ProfileEducation } from '../../../components/tutorPanelComponents/dialogs/tutorDialogs'
import CloseIcon from '@mui/icons-material/Close';
import { ProfileAddCertificate } from '../../../components/tutorPanelComponents/dialogs/tutorDialogs'
import { ProfileAskRecomendation } from '../../../components/tutorPanelComponents/dialogs/tutorDialogs'
import { Collapse } from '@mui/material'


export const Profile = () => {
    const [isEditContactOpen, setIsEditContactOpen] = useState(false)
    const [isEditOverviewOpen, setIsEditOverviewOpen] = useState(false)
    const [isEditExperienceOpen, setIsEditExperienceOpen] = useState(false)
    const [isAddSkillOpen, setIsAddSkillOpen] = useState(false)
    const [isAddEducationOpen, setIsAddEducationOpen] = useState(false)
    const [isAddCertificate, setIsAddCertificateOpen] = useState(false)
    const [isAskRecomendationOpen, setIsAskRecomendationOpen] = useState(false)
    const [isViewDetailOpen, setIsViewDetailOpen] = useState(false)



    const handleViewDetail = () => {
        setIsViewDetailOpen(!isViewDetailOpen)
    }
    const handleEditContactClose = () => {
        setIsEditContactOpen(false)
    }
    const handleEditOverview = () => {
        setIsEditOverviewOpen(false)
    }

    const handleEditExperience = () => {
        setIsEditExperienceOpen(false)
    }

    const handleAddSkill = () => {
        setIsAddSkillOpen(false)
    }

    const handleAddEducation = () => {
        setIsAddEducationOpen(false)
    }

    const handleAddCertificateClose = () => {
        setIsAddCertificateOpen(false)
    }

    const handleAskRecomendationClose = () => {
        setIsAskRecomendationOpen(false)
    }

    return (
        <>

            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <div className="tutor-profile-header-pic" >
                            <img src={profileMask} alt="" width='100%' />
                        </div>

                    </Grid>
                </Grid>
                <div className='tutor-profile-content-wrapper' >
                    <div className='tutor-profile-upper-heading-content-wrapper' >
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <div className="tutor-profile-upper-heading-container" >
                                    <img src={profilePic} alt="" />
                                    <IconButton style={{ alignSelf: 'flex-end' }} >
                                        <ModeEditIcon onClick={() => {
                                            if (setIsEditContactOpen == true) {
                                                setIsEditContactOpen(false)
                                            } else {
                                                setIsEditContactOpen(true)
                                            }
                                        }} />
                                    </IconButton>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <div className='tutor-profile-header-left-side-container' >

                                    <h2>
                                        David Anderson
                                    </h2>
                                    <p>
                                        English,mathematics, and science teachers
                                    </p>
                                    <p>
                                        burnside, united state
                                    </p>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <div className='tutor-profile-header-right-side-container' >

                                    <div  >
                                        <h2>
                                            Contact Information
                                        </h2>

                                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }} >
                                            <img src={emailIcon} alt="" style={{ marginRight: '15px', width: '25px' }} />
                                            <p style={{ fontSize: '14px' }} >
                                                Support@amafclasses.com
                                            </p>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }} >
                                            <img src={callIcon} alt="" style={{ marginRight: '15px', width: '25px' }} />
                                            <p style={{ fontSize: '14px' }} >
                                                +971 1 2345678
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </Grid>

                        </Grid>
                    </div>

                    {/* body main */}
                    <div className='tutor-profile-main-body-content-container' >
                        <div className='tutor-profile-main-body-content-wrapper' >
                            <Grid container spacing={2} >
                                <Grid item xs={12} >
                                    <div className='tutor-profile-overview-section-container' >
                                        <div style={{ borderBottom: '1px solid #E5E5E5', padding: '20px' }} >
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }} >
                                                <h4 style={{ fontSize: '20px' }} >
                                                    Overview
                                                </h4>
                                                <IconButton onClick={() => {
                                                    setIsEditOverviewOpen(true)
                                                }}  >
                                                    <ModeEditIcon />
                                                </IconButton>
                                            </div>
                                            <div>
                                                <p style={{ marginTop: '15px', paddingRight: '20px' }} >
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in lorem congue, euismod urna vitae, porttitor mi. Aliquam consectetur eu turpis ac congue. Curabitur viverra nunc cursus est efficitur, sit amet ornare felis accumsan. Ut eget elementum sem. Sed et nibh pharetra, commodo neque at, porta odio. Lorem ipsum dolor sit amet.
                                                </p>
                                            </div>
                                        </div>
                                        <div style={{ padding: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                            <button style={{ border: 'none', backgroundColor: 'white', textTransform: 'uppercase', color: 'black' }}  >
                                                see all detail
                                            </button>
                                        </div>
                                        <Collapse in={isViewDetailOpen}  >
                                            <div>
                                                <p style={{ marginTop: '15px', paddingRight: '20px' }} >
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in lorem congue, euismod urna vitae, porttitor mi. Aliquam consectetur eu turpis ac congue. Curabitur viverra nunc cursus est efficitur, sit amet ornare felis accumsan. Ut eget elementum sem. Sed et nibh pharetra, commodo neque at, porta odio. Lorem ipsum dolor sit amet.
                                                </p>
                                            </div>
                                        </Collapse>
                                    </div>
                                </Grid>
                            </Grid>

                            {/* experience */}

                            <div className='first-tutor-profile-experience-container' >
                                <div className='first-tutor-profile-experience-heading-container' >
                                    <h4>
                                        Experience
                                    </h4>
                                    <IconButton onClick={() => {
                                        setIsEditExperienceOpen(true)
                                    }}  >
                                        <img src={plus} alt="plus" />
                                    </IconButton>
                                </div>
                                <div className='first-tutor-profile-experience-content-container' >
                                    <div className='first-tutor-profile-experience-content-left-div-container' >
                                        <div className='edu-icon-container' >
                                            <img src={edu1} alt="" />
                                        </div>
                                        <div className='first-tutor-profile-experience-content-text' >
                                            <h3>
                                                Educational institution
                                            </h3>
                                            <p>
                                                Freelancer
                                            </p>
                                            <p>
                                                jan 2018 - present   4 years
                                            </p>
                                            <p>
                                                burnside, united state
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <IconButton style={{ alignSelf: 'flex-end' }} onClick={() => {
                                                setIsEditExperienceOpen(true)
                                            }} >
                                            <ModeEditIcon  />
                                        </IconButton>
                                    </div>
                                </div>
                                <div className='first-tutor-profile-experience-content-container' >
                                    <div className='first-tutor-profile-experience-content-left-div-container' >
                                        <div className='edu-icon-container' >
                                            <img src={edu1} alt="" />
                                        </div>
                                        <div className='first-tutor-profile-experience-content-text' >
                                            <h3>
                                                Educational institution
                                            </h3>
                                            <p>
                                                Freelancer
                                            </p>
                                            <p>
                                                jan 2018 - present   4 years
                                            </p>
                                            <p>
                                                burnside, united state
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <IconButton style={{ alignSelf: 'flex-end' }} onClick={() => {
                                                setIsEditExperienceOpen(true)
                                            }} >
                                            <ModeEditIcon />
                                        </IconButton>
                                    </div>
                                </div>
                            </div>

                            {/* education */}

                            <div className='first-tutor-profile-experience-container' >
                                <div className='first-tutor-profile-experience-heading-container' >
                                    <h4>
                                        Education
                                    </h4>
                                    <IconButton onClick={() => {
                                        setIsAddEducationOpen(true)
                                    }} >
                                        <img src={plus} alt="plus" />
                                    </IconButton>
                                </div>
                                <div className='first-tutor-profile-experience-content-container' >
                                    <div className='first-tutor-profile-experience-content-left-div-container' >
                                        <div className='edu-icon-container' >
                                            <img src={edu2} alt="" />
                                        </div>
                                        <div className='first-tutor-profile-experience-content-text' >
                                            <h3>
                                                Delhi University
                                            </h3>
                                            <p>
                                                Bachelor's degree, Information Technology
                                            </p>
                                            <p>
                                                2013 - 2017
                                            </p>

                                        </div>
                                    </div>
                                    <div>
                                        <IconButton style={{ alignSelf: 'flex-end' }} onClick={() => {
                                            setIsAddEducationOpen(true)
                                        }} >
                                            <ModeEditIcon />
                                        </IconButton>
                                    </div>
                                </div>

                            </div>

                            {/* certificate */}

                            <div className='first-tutor-profile-experience-container' >
                                <div className='first-tutor-profile-experience-heading-container' >
                                    <h4>
                                        Certificate
                                    </h4>
                                    <IconButton onClick={() => {
                                        setIsAddCertificateOpen(true)
                                    }} >
                                        <img src={plus} alt="plus" />
                                    </IconButton>
                                </div>
                                <div className='first-tutor-profile-experience-content-container' >
                                    <div className='first-tutor-profile-experience-content-left-div-container' >
                                        <div className='edu-icon-container' >
                                            <img src={edu2} alt="" />
                                        </div>
                                        <div className='first-tutor-profile-experience-content-text' >
                                            <h3>
                                                Delhi University
                                            </h3>
                                            <p>
                                                Bachelor's degree, Information Technology
                                            </p>
                                            <p>
                                                2013 - 2017
                                            </p>

                                        </div>
                                    </div>
                                    <div>
                                        <IconButton style={{ alignSelf: 'flex-end' }} onClick={() => {
                                            setIsAddCertificateOpen(true)
                                        }} >
                                            <ModeEditIcon />
                                        </IconButton>
                                    </div>
                                </div>

                            </div>


                            {/* skill */}

                            <div className='first-tutor-profile-experience-container'  >
                                <div className='first-tutor-profile-experience-heading-container' >
                                    <h4>
                                        Skill
                                    </h4>
                                    <IconButton onClick={() => {
                                        setIsAddSkillOpen(true)
                                    }} >
                                        <img src={plus} alt="plus" />
                                    </IconButton>
                                </div>
                                <div>
                                    <div style={{ borderBottom: '1px solid #E5E5E5', marginTop: '6px' }} >
                                        <p style={{ textTransform: 'capitalize', paddingTop: '12px', paddingBottom: '12px' }} >
                                            english
                                        </p>
                                    </div>
                                    <div style={{ borderBottom: '1px solid #E5E5E5', marginTop: '6px' }} >
                                        <p style={{ textTransform: 'capitalize', paddingTop: '12px', paddingBottom: '12px' }} >
                                            math
                                        </p>
                                    </div>
                                    <div style={{ borderBottom: '1px solid #E5E5E5', marginTop: '6px' }} >
                                        <p style={{ textTransform: 'capitalize', paddingTop: '12px', paddingBottom: '12px' }} >
                                            science
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* ask for reccomendation */}

                            <div className='first-tutor-profile-experience-container'  >
                                <div className='first-tutor-profile-experience-heading-container' >
                                    <h4>
                                        Recommendations
                                    </h4>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='first-tutor-penal-profile-page-ask-reco-p' >
                                        <p style={{ textTransform: 'capitalize', marginRight: '15px' }} onClick={() => {
                                            setIsAskRecomendationOpen(true)
                                        }} >
                                            Ask for recommendation
                                        </p>
                                        <IconButton onClick={() => {
                                            setIsAskRecomendationOpen(true)
                                        }} >
                                            <ModeEditIcon />
                                        </IconButton>
                                    </div>
                                </div>
                                <div style={{ marginTop: '10px', borderBottom: '1px solid #E5E5E5', paddingBottom: '18px' }} >
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                                            <img src={avatar2} alt="" width='45px' style={{ marginRight: '15px' }} />
                                            <div>
                                                <p style={{ fontWeight: '500' }} >
                                                    Johan smith
                                                </p>
                                                <p style={{ fontSize: '14px', marginTop: '2px' }} >
                                                    5 Lectures, 45 min
                                                </p>
                                            </div>

                                        </div>
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }} >
                                                <div style={{ marginRight: '3px' }} >
                                                    <img src={star} alt="" width='18px' />
                                                </div>
                                                <div style={{ marginRight: '3px' }} >
                                                    <img src={star} alt="" width='18px' />
                                                </div>
                                                <div style={{ marginRight: '3px' }} >
                                                    <img src={star} alt="" width='18px' />
                                                </div>
                                                <div style={{ marginRight: '3px' }} >
                                                    <img src={star} alt="" width='18px' />
                                                </div>
                                                <div style={{ marginRight: '3px' }} >
                                                    <img src={star} alt="" width='18px' />
                                                </div>
                                            </div>
                                            <p>
                                                Yesterday
                                            </p>
                                        </div>
                                    </div>
                                    <p style={{ fontSize: '15px', marginTop: '8px' }} >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in lorem congue, euismod urna vitae, porttitor mi. Aliquam consectetur eu turpis ac congue.
                                    </p>
                                </div>

                                <div style={{ marginTop: '10px', borderBottom: '1px solid #E5E5E5', paddingBottom: '18px' }} >
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                                            <img src={avatar2} alt="" width='45px' style={{ marginRight: '15px' }} />
                                            <div>
                                                <p style={{ fontWeight: '500' }} >
                                                    Johan smith
                                                </p>
                                                <p style={{ fontSize: '14px', marginTop: '2px' }} >
                                                    5 Lectures, 45 min
                                                </p>
                                            </div>

                                        </div>
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }} >
                                                <div style={{ marginRight: '3px' }} >
                                                    <img src={star} alt="" width='18px' />
                                                </div>
                                                <div style={{ marginRight: '3px' }} >
                                                    <img src={star} alt="" width='18px' />
                                                </div>
                                                <div style={{ marginRight: '3px' }} >
                                                    <img src={star} alt="" width='18px' />
                                                </div>
                                                <div style={{ marginRight: '3px' }} >
                                                    <img src={star} alt="" width='18px' />
                                                </div>
                                                <div style={{ marginRight: '3px' }} >
                                                    <img src={star} alt="" width='18px' />
                                                </div>
                                            </div>
                                            <p>
                                                Yesterday
                                            </p>
                                        </div>
                                    </div>
                                    <p style={{ fontSize: '15px', marginTop: '8px' }} >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in lorem congue, euismod urna vitae, porttitor mi. Aliquam consectetur eu turpis ac congue.
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                {/* dialogs */}

                {/* edit contact dialog */}

                <Dialog open={isEditContactOpen} fullWidth maxWidth='md' onClose={handleEditContactClose}  >
                    <div className='tutor-profile-edit-contact-dialog-container'  >
                        <div className='first-tutor-panel-dialog-close-btn-icon-container' >
                            <IconButton className='first-tutor-panel-dialog-close-icon' onClick={() => {
                                handleEditContactClose();
                            }} >
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <EditContactDialog />
                        <Grid item xs={12}  >
                            <div className='first-tutor-panel-add-course-add-section-button-container' style={{ marginTop: "20px", marginBottom: '20px' }} >
                                <button onClick={() => {
                                    handleEditContactClose();
                                }} >
                                    save
                                </button>
                            </div>
                        </Grid>
                    </div>
                </Dialog>
                {/* edit over view dialog */}
                <Dialog open={isEditOverviewOpen} fullWidth maxWidth='md' onClose={handleEditOverview}  >
                    <div className='first-tutor-panel-dialog-close-btn-icon-container' >
                        <IconButton className='first-tutor-panel-dialog-close-icon' onClick={() => {
                            handleEditOverview();
                        }} >
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <EditOverview />
                    <Grid item xs={12}  >
                        <div className='first-tutor-panel-add-course-add-section-button-container' style={{ marginTop: "20px", marginBottom: '20px' }} >
                            <button onClick={() => {
                                handleEditOverview();
                            }} >
                                save
                            </button>
                        </div>
                    </Grid>
                </Dialog>
                {/* edit experience dialog*/}
                <Dialog open={isEditExperienceOpen} fullWidth maxWidth='md' onClose={handleEditExperience}  >
                    <div className='first-tutor-panel-dialog-close-btn-icon-container' >
                        <IconButton className='first-tutor-panel-dialog-close-icon' onClick={() => {
                            handleEditExperience();
                        }} >
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <EditEperience />
                    <Grid item xs={12}  >
                        <div className='first-tutor-panel-add-course-add-section-button-container' style={{ marginTop: "20px", marginBottom: '20px' }} >
                            <button onClick={() => {
                                handleEditExperience();
                            }} >
                                save
                            </button>
                        </div>
                    </Grid>
                </Dialog>
                {/* add skill dialog */}
                <Dialog open={isAddSkillOpen} fullWidth maxWidth='md' onClose={handleAddSkill}  >
                    <div className='first-tutor-panel-dialog-close-btn-icon-container' >
                        <IconButton className='first-tutor-panel-dialog-close-icon' onClick={() => {
                            handleAddSkill();
                        }} >
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <AddSkill />
                    <Grid item xs={12}  >
                        <div className='first-tutor-panel-add-course-add-section-button-container' style={{ marginTop: "20px", marginBottom: '20px' }} >
                            <button onClick={() => {
                                handleAddSkill();
                            }} >
                                save
                            </button>
                        </div>
                    </Grid>
                </Dialog>
                {/* add education */}
                <Dialog open={isAddEducationOpen} fullWidth maxWidth='md' onClose={handleAddEducation} >
                    <div className='first-tutor-panel-dialog-close-btn-icon-container' >
                        <IconButton className='first-tutor-panel-dialog-close-icon' onClick={() => {
                            handleAddEducation();
                        }} >
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <ProfileEducation />
                    <Grid item xs={12}  >
                        <div className='first-tutor-panel-add-course-add-section-button-container' style={{ marginTop: "20px", marginBottom: '20px' }} >
                            <button onClick={() => {
                                handleAddEducation();
                            }} >
                                save
                            </button>
                        </div>
                    </Grid>
                </Dialog>
                {/* add certificate */}
                <Dialog open={isAddCertificate} fullWidth maxWidth='md' onClose={handleAddCertificateClose} >
                    <div className='first-tutor-panel-dialog-close-btn-icon-container' >
                        <IconButton className='first-tutor-panel-dialog-close-icon' onClick={() => {
                            handleAddCertificateClose();
                        }} >
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <ProfileAddCertificate />
                    <Grid item xs={12}  >
                        <div className='first-tutor-panel-add-course-add-section-button-container' style={{ marginTop: "20px", marginBottom: '20px' }} >
                            <button onClick={() => {
                                handleAddCertificateClose();
                            }} >
                                save
                            </button>
                        </div>
                    </Grid>
                </Dialog>
                {/* ask recommendations */}
                <Dialog open={isAskRecomendationOpen} fullWidth maxWidth='md' onClose={handleAskRecomendationClose} >
                    <div className='first-tutor-panel-dialog-close-btn-icon-container' >
                        <IconButton className='first-tutor-panel-dialog-close-icon' onClick={() => {
                            handleAskRecomendationClose();
                        }} >
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <ProfileAskRecomendation />
                    <Grid item xs={12}  >
                        <div className='first-tutor-panel-add-course-add-section-button-container' style={{ marginTop: "20px", marginBottom: '20px' }} >
                            <button onClick={() => {
                                handleAskRecomendationClose();
                            }} >
                                send
                            </button>
                        </div>
                    </Grid>
                </Dialog>
            </div>

        </>
    )
}