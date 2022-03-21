import React, { useState } from 'react'
import './addNewCourse.css'
import { Grid, IconButton, Dialog } from '@mui/material'
import uploadPic from '../../../assets/uploadPic.png'
import AddOutlined from '@mui/icons-material/AddOutlined'
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import ReorderIcon from '@mui/icons-material/Reorder';
import { CourseStartDate, CourseEndDate } from '../../../components/tutorPanelComponents/fields/searchFields'
import clockImg from '../../../assets/clock.png'
import { AddPricePerLesson } from '../../../components/tutorPanelComponents/fields/searchFields'
import { AddNewCoursePackagePackageNO, AddNewCoursePackageTitle, AddNewCoursePackageSubTitle, AddNewPackagePrice, AddNewCoursePackageDescription } from '../../../components/tutorPanelComponents/fields/searchFields'
import { AddNewCourseAddNewSectionSectionNO, AddNewCourseAddNewSectionSectionName, AddNewCourseAddNewSectionLectureName } from '../../../components/tutorPanelComponents/fields/searchFields'
import { AddNewCourseAddWhatYouWillTeach } from '../../../components/tutorPanelComponents/fields/searchFields'




export const AddNewCourse = () => {
    const [isAddTimeOpen, setIsAddTimeOpen] = useState(false);
    const [isAddNewPackageOpen, setIsAddNewPackageOpen] = useState(false);
    const [isAddSectionOpen, setIsAddSectionOpen] = useState(false);
    const [isAddLectureOpen, setIsAddLectureOpen] = useState(false);
    const [isEditLectureOpen, setIsEditLectureOpen] = useState(false);
    const [isEditSectionOpen, setIsEditSectionOpen] = useState(false);
    const [isWhatYouWillTeachOpen, setIsWhatYouWillTeachOpen] = useState(false);

    const handleAddTimeClose = () => {
        setIsAddTimeOpen(false)
    }

    const handleIsAddNewPackageClose = () => {
        setIsAddNewPackageOpen(false)
    }

    const handleAddSectionClose = () => {
        setIsAddSectionOpen(false)
    }

    const handleAddLectureClose = () => {
        setIsAddLectureOpen(false)
    }

    const handleEditLectureClose = () => {
        setIsEditLectureOpen(false)
    }

    const handleEditSectionClose = () => {
        setIsEditSectionOpen(false)
    }

    const handleAddWhatYouWillTeachClose = () => {
        setIsWhatYouWillTeachOpen(false)
    }

    return (
        <>
            <div className='first-tutor-panel-add-course-page-container' >
                <Grid container spacing={3} >
                    <Grid item xs={12} alignItems='flex-end' >
                        <div className='first-tutor-panel-add-course-page-save-btn-container' >
                            <button className='first-tutor-panel-add-course-page-cancel-btn' >
                                cancel
                            </button>
                            <button className='first-tutor-panel-add-course-page-save-btn' >
                                add course
                            </button>
                        </div>
                    </Grid>
                    {/* heading basic info */}
                    <Grid item xs={12} >
                        <div className='first-tutor-panel-add-course-heading-card' >
                            <p>
                                Basic Information
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className='first-tutor-panel-add-course-text-field-container' >
                            <p>
                                Title
                            </p>
                            <input type="text" />
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className='first-tutor-panel-add-course-text-field-container' >
                            <p>
                                Subtitle
                            </p>
                            <input type="text" />
                        </div>
                    </Grid>
                    {/* course category */}
                    <Grid item xs={12} md={6} >
                        <div className='first-tutor-panel-selection-btn-container' >
                            <p>
                                Course category
                            </p>
                            <select id="category" name="category"  >
                                <option></option>

                            </select>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <div className='first-tutor-panel-selection-btn-container'>
                            <p>
                                Course sub-category
                            </p>
                            <select id="subCategory" name="subCetegory"  >
                                <option></option>

                            </select>
                        </div>
                    </Grid>
                    {/* course topic */}
                    <Grid item xs={12} >
                        <div className='first-tutor-panel-add-course-text-field-container' >
                            <p>
                                Course topic
                            </p>
                            <input type="text" />
                        </div>
                    </Grid>
                    {/* course language */}
                    <Grid item xs={12} md={6} >
                        <div className='first-tutor-panel-selection-btn-container'>
                            <p>
                                Course language
                            </p>
                            <select id="language" name="language"  >
                                <option></option>

                            </select>
                        </div>
                    </Grid>
                    {/* total hour */}
                    <Grid item xs={12} md={3} >
                        <div className='first-tutor-panel-selection-btn-container'>
                            <p>
                                Total Course durations
                            </p>
                            <select id="experience" name="experience"  >
                                <option value="" disabled hidden >Total Hours</option>

                            </select>
                        </div>
                    </Grid>
                    {/* total minutes */}
                    <Grid item xs={12} md={3} >
                        <div className='first-tutor-panel-selection-btn-container'>
                            <p>
                                Total Course durations
                            </p>
                            <select id="experience" name="experience"  >
                                <option value="" disabled hidden >Total Minutes</option>

                            </select>
                        </div>
                    </Grid>
                    {/* advance information */}
                    <Grid item xs={12} >
                        <div className='first-tutor-panel-add-course-heading-card' >
                            <p>
                                Advance Information
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <div className='first-tutor-panel-add-course-upload-pic-container' >
                            <input type='file' id='upPic' name='uploadPic' style={{ display: 'none' }} />
                            <label htmlFor="upPic">
                                <img src={uploadPic} alt="pic" width='60px' className='tutor-panel-add-new-course-up--pic' />
                            </label>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <div className='first-tutor-panel-addcourse-r-side-con' >
                            <div className='first-tutor-panel-add-course-uploadp-guidelines-container' >

                                <p>
                                    upload your course thumbnail here.
                                </p>
                                <p>
                                    important guidelines: <span style={{ fontWeight: 'bold' }} >1200 x 800 Or 12:8 Ratio</span>
                                </p>
                                <p>
                                    suported formate: <span style={{ fontWeight: 'bold' }} > .Jpg, .Jpeg Or .Png </span>
                                </p>

                            </div>
                            <div>
                                <label htmlFor="upPic">
                                    <p className="first-tutor-panel-add-course-upload-image-btn" >
                                        upload image
                                    </p>
                                </label>
                            </div>
                        </div>
                    </Grid>
                    {/* course description */}
                    <Grid item xs={12} >
                        <div className='first-tutor-panel-add-new-course-textar-area-container' >
                            <p>
                                Course Description
                            </p>
                            <textarea placeholder='Enter your course descriptions' />
                        </div>
                    </Grid>
                    {/* what you will teach in this course */}
                    <Grid item xs={12} >
                        <div className='first-tutor-add-new-course-text-fields-with-actions-container' >
                            <div className='first-tutor-add-new-course-text-fields-with-actions-heading-container' >
                                <p>
                                    What you will teach in this course
                                </p>
                                <div className='first-tutor-add-new-course-text-fields-with-actions-right-div' >
                                    <IconButton onClick={() => {
                                        setIsWhatYouWillTeachOpen(true)
                                    }} >
                                        <AddOutlined className='first-tutor-add-new-course-add-btn-' />
                                    </IconButton>
                                    <p>
                                        Add New
                                    </p>
                                </div>
                            </div>
                            <div className='first-tutor-add-new-course-text-fields-with-actions-field-container'>
                                <p>
                                    01
                                </p>
                                <div className='first-tutor-add-new-course-text-fields-with-actions-field-show' >
                                    What you will teach in this course ...
                                </div>
                            </div>
                            <div className='first-tutor-add-new-course-text-fields-with-actions-field-container'>
                                <p>
                                    02
                                </p>
                                <div className='first-tutor-add-new-course-text-fields-with-actions-field-show' >
                                    What you will teach in this course ...
                                </div>
                            </div>
                            <Dialog open={isWhatYouWillTeachOpen} fullWidth maxWidth='sm' onClose={handleAddWhatYouWillTeachClose} >
                                <div style={{ paddingBottom: '40px', }} >
                                    <div className='first-tutor-panel-dialog-close-btn-icon-container' >
                                        <IconButton className='first-tutor-panel-dialog-close-icon' onClick={() => {
                                            handleAddWhatYouWillTeachClose();
                                        }} >
                                            <CloseIcon />
                                        </IconButton>
                                    </div>
                                    <div style={{ fontSize: '17px', fontWeight: '600', paddingTop: '12px', paddingBottom: '12px', borderBottom: '2px solid #E5E5E5' }} >
                                        <p style={{ textAlign: 'center' }} >
                                            What You Will Teach In This Course
                                        </p>
                                    </div>


                                    <div style={{ padding: '20px' }} >
                                        <Grid container spacing={2} >
                                            <Grid item xs={12} >
                                                <div>
                                                    <AddNewCourseAddWhatYouWillTeach />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} >
                                                <div className='tutor-my-wallet-add-money-dialog-submit-btn-cont--'  >
                                                    <button type='submit' onClick={() => {
                                                        handleAddWhatYouWillTeachClose();
                                                    }} >
                                                        Add
                                                    </button>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </Dialog>
                        </div>
                    </Grid>
                    {/* course start date */}
                    <Grid item xs={12} md={6} >
                        {/* <div className='first-tutor-add-new-course-text-field-with-calendar-contain' >
                            <p>
                                Course Start Date
                            </p>
                            <div className='first-tutor-add-new-course-text-field-with-calendar' >
                                <input placeholder='03-03-2022' type='text' />
                                <IconButton >
                                    <DateRangeIcon style={{ fontSize: '20px' }} />
                                </IconButton>
                            </div>
                        </div> */}
                        <CourseStartDate />
                    </Grid>
                    {/* course end date */}
                    <Grid item xs={12} md={6} >
                        {/* <div className='first-tutor-add-new-course-text-field-with-calendar-contain' >
                            <p>
                                Course End Date
                            </p>
                            <div className='first-tutor-add-new-course-text-field-with-calendar' >
                                <input placeholder='03-03-2022' type='text' />
                                <IconButton >
                                    <DateRangeIcon style={{ fontSize: '20px' }} />
                                </IconButton>
                            </div>
                        </div> */}
                        <CourseEndDate />
                    </Grid>
                    {/* set time */}
                    <Grid item xs={12} >
                        <div className='first-tutor-add-new-course-text-fields-with-actions-container' >
                            <div className='first-tutor-add-new-course-text-fields-with-actions-heading-container' >
                                <p>
                                    set time
                                </p>
                                <div className='first-tutor-add-new-course-text-fields-with-actions-right-div' >
                                    <IconButton onClick={() => {
                                        setIsAddTimeOpen(true);
                                    }} >
                                        <AddOutlined className='first-tutor-add-new-course-add-btn-' />
                                    </IconButton>
                                    <p>
                                        Add Time
                                    </p>

                                    {/* ADD TIME DIALOG */}


                                    <Dialog open={isAddTimeOpen} fullWidth maxWidth='sm' onClose={handleAddTimeClose} >
                                        <div style={{ paddingBottom: '40px', }} >
                                            <div className='first-tutor-panel-dialog-close-btn-icon-container' >
                                                <IconButton className='first-tutor-panel-dialog-close-icon' onClick={() => {
                                                    handleAddTimeClose();
                                                }} >
                                                    <CloseIcon />
                                                </IconButton>
                                            </div>
                                            <div style={{ fontSize: '17px', fontWeight: '600', paddingTop: '12px', paddingBottom: '12px', borderBottom: '2px solid #E5E5E5' }} >
                                                <p style={{ textAlign: 'center' }} >
                                                    Add Time
                                                </p>
                                            </div>
                                            <div style={{ paddingLeft: '20px', paddingRight: '20px', marginTop: '20px' }} >
                                                <Grid container spacing={2} >
                                                    <Grid item xs={12} md={6} >
                                                        <div className='tutor--add-time-clock-add-course' >
                                                            <img src={clockImg} alt="pic" style={{ marginRight: '15px' }} />
                                                            <input type="text" placeholder='10:00 Am' />
                                                        </div>
                                                    </Grid>
                                                    <Grid item xs={12} md={6} >
                                                        <div className='tutor--add-time-clock-add-course' >
                                                            <input type="text" placeholder='2:00 Pm' />
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                            <Grid item xs={12} >
                                                <div className='tutor-my-wallet-add-money-dialog-submit-btn-cont--' style={{ marginBottom: '20px' }} >
                                                    <button type='submit' onClick={() => {
                                                        handleAddTimeClose();
                                                    }} >
                                                        ADD TIME
                                                    </button>
                                                </div>
                                            </Grid>

                                            <Grid container spacing={2} >
                                                <Grid item xs={12} md={6} >
                                                    <div style={{ padding: '0px 20px', marginTop: '12px' }} >
                                                        <p className='first-tutor-panel-add-new-course-set-time' >
                                                            <p>
                                                                9:00 am - 10:30 am
                                                            </p>
                                                            <IconButton style={{ padding: '5px' }} >
                                                                < CloseIcon style={{ fontSize: '14px' }} />
                                                            </IconButton>
                                                        </p>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} md={6} >
                                                    <div style={{ padding: '0px 20px', marginTop: '12px' }} >
                                                        <p className='first-tutor-panel-add-new-course-set-time' >
                                                            <p>
                                                                9:00 am - 10:30 am
                                                            </p>
                                                            <IconButton style={{ padding: '5px' }} >
                                                                < CloseIcon style={{ fontSize: '14px' }} />
                                                            </IconButton>
                                                        </p>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} md={6} >
                                                    <div style={{ padding: '0px 20px', marginTop: '12px' }} >
                                                        <p className='first-tutor-panel-add-new-course-set-time' >
                                                            <p>
                                                                9:00 am - 10:30 am
                                                            </p>
                                                            <IconButton style={{ padding: '5px' }} >
                                                                < CloseIcon style={{ fontSize: '14px' }} />
                                                            </IconButton>
                                                        </p>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} >
                                                    <div className='tutor-my-wallet-add-money-dialog-submit-btn-cont--'  >
                                                        <button type='submit' onClick={() => {
                                                            handleAddTimeClose();
                                                        }} >
                                                            SABMIT
                                                        </button>
                                                    </div>
                                                </Grid>
                                            </Grid>

                                        </div>
                                    </Dialog>
                                </div>
                            </div>
                            <div className='first-tutor-add-new-course-text-fields-with-actions-field-set-time'>
                                <p className='first-tutor-panel-add-new-course-set-time' >
                                    <p>
                                        9:00 am - 10:30 am
                                    </p>
                                    <IconButton style={{ padding: '5px' }} >
                                        < CloseIcon style={{ fontSize: '14px' }} />
                                    </IconButton>
                                </p>
                                <p className='first-tutor-panel-add-new-course-set-time' >
                                    <p>
                                        9:00 am - 10:30 am
                                    </p>
                                    <IconButton style={{ padding: '5px' }} >
                                        < CloseIcon style={{ fontSize: '14px' }} />
                                    </IconButton>
                                </p>
                                <p className='first-tutor-panel-add-new-course-set-time' >
                                    <p>
                                        9:00 am - 10:30 am
                                    </p>
                                    <IconButton style={{ padding: '5px' }} >
                                        < CloseIcon style={{ fontSize: '14px' }} />
                                    </IconButton>
                                </p>
                            </div>
                        </div>
                    </Grid>
                    {/* how many student  */}
                    <Grid item xs={12}  >
                        <div className='first-tutor-panel-selection-btn-container'>
                            <p>
                                How Many student in class
                            </p>
                            <select id="experience" name="experience"  >
                                <option value="" disabled hidden >Select...</option>
                            </select>
                        </div>
                    </Grid>
                    {/* course module */}
                    <Grid item xs={12} >
                        <div className='first-tutor-panel-add-course-heading-card' >
                            <p>
                                course module
                            </p>
                        </div>
                    </Grid>
                    {/* sections  */}
                    <Grid item xs={12} >
                        <div className='first-tutor-panel-add-new-course-course-module-section-container' >
                            <div className='first-tutor-panel-add-new-course-course-module-section-h-text'>
                                <p >
                                    sections 01:  sections name
                                </p>
                            </div>
                            <div  >
                                <IconButton onClick={() => {
                                    setIsEditSectionOpen(true)
                                }} >
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={() => {
                                    setIsAddSectionOpen(true)
                                }} >
                                    <AddOutlined />
                                </IconButton>
                            </div>
                            {/* add section */}
                            <Dialog open={isAddSectionOpen} fullWidth maxWidth='sm' onClose={handleAddSectionClose} >
                                <div style={{ paddingBottom: '40px', }} >
                                    <div className='first-tutor-panel-dialog-close-btn-icon-container' >
                                        <IconButton className='first-tutor-panel-dialog-close-icon' onClick={() => {
                                            handleAddSectionClose();
                                        }} >
                                            <CloseIcon />
                                        </IconButton>
                                    </div>
                                    <div style={{ fontSize: '17px', fontWeight: '600', paddingTop: '12px', paddingBottom: '12px', borderBottom: '2px solid #E5E5E5' }} >
                                        <p style={{ textAlign: 'center' }} >
                                            Add Section
                                        </p>
                                    </div>


                                    <div style={{ padding: '20px' }} >
                                        <Grid container spacing={2} >
                                            <Grid item xs={12} md={6} >
                                                <div>
                                                    <AddNewCourseAddNewSectionSectionNO />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} md={6} >
                                                <div>
                                                    <AddNewCourseAddNewSectionSectionName />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} md={6} >
                                                <div>
                                                    <AddNewCourseAddNewSectionLectureName />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} >
                                                <div className='tutor-my-wallet-add-money-dialog-submit-btn-cont--'  >
                                                    <button type='submit' onClick={() => {
                                                        handleAddSectionClose();
                                                    }} >
                                                        ADD Section
                                                    </button>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </Dialog>
                            {/* edit section no and name */}
                            <Dialog open={isEditSectionOpen} fullWidth maxWidth='sm' onClose={handleEditSectionClose} >
                                <div style={{ paddingBottom: '40px', }} >
                                    <div className='first-tutor-panel-dialog-close-btn-icon-container' >
                                        <IconButton className='first-tutor-panel-dialog-close-icon' onClick={() => {
                                            handleEditSectionClose();
                                        }} >
                                            <CloseIcon />
                                        </IconButton>
                                    </div>
                                    <div style={{ fontSize: '17px', fontWeight: '600', paddingTop: '12px', paddingBottom: '12px', borderBottom: '2px solid #E5E5E5' }} >
                                        <p style={{ textAlign: 'center' }} >
                                            Edit Section
                                        </p>
                                    </div>


                                    <div style={{ padding: '20px' }} >
                                        <Grid container spacing={2} >
                                            <Grid item xs={12} md={6} >
                                                <div>
                                                    <AddNewCourseAddNewSectionSectionNO />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} md={6} >
                                                <div>
                                                    <AddNewCourseAddNewSectionSectionName />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} md={6} >
                                                <div>
                                                    <AddNewCourseAddNewSectionLectureName />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} >
                                                <div className='tutor-my-wallet-add-money-dialog-submit-btn-cont--'  >
                                                    <button type='submit' onClick={() => {
                                                        handleEditSectionClose();
                                                    }} >
                                                        save
                                                    </button>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </Dialog>
                        </div>
                        <div className='first-tutor-panel-add-course-module-lacture-name' >
                            <div className='first-tutor-panel-add-course-module-lacture-name-left-div' >
                                <ReorderIcon style={{ fontSize: '17px', color: 'gray' }} />
                                <p>
                                    Lecture name
                                </p>
                            </div>
                            <div>
                                <IconButton onClick={() => {
                                    setIsEditLectureOpen(true)
                                }} >
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={() => {
                                    setIsAddLectureOpen(true)
                                }} >
                                    <AddOutlined />
                                </IconButton>
                            </div>
                            {/* add new lecture */}
                            <Dialog open={isAddLectureOpen} fullWidth maxWidth='sm' onClose={handleAddLectureClose} >
                                <div style={{ paddingBottom: '40px', }} >
                                    <div className='first-tutor-panel-dialog-close-btn-icon-container' >
                                        <IconButton className='first-tutor-panel-dialog-close-icon' onClick={() => {
                                            handleAddLectureClose();
                                        }} >
                                            <CloseIcon />
                                        </IconButton>
                                    </div>
                                    <div style={{ fontSize: '17px', fontWeight: '600', paddingTop: '12px', paddingBottom: '12px', borderBottom: '2px solid #E5E5E5' }} >
                                        <p style={{ textAlign: 'center' }} >
                                            Add Lecture
                                        </p>
                                    </div>


                                    <div style={{ padding: '20px' }} >
                                        <Grid container spacing={2} >
                                            <Grid item xs={12} md={12} >
                                                <div>
                                                    <AddNewCourseAddNewSectionLectureName />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} >
                                                <div className='tutor-my-wallet-add-money-dialog-submit-btn-cont--'  >
                                                    <button type='submit' onClick={() => {
                                                        handleAddLectureClose();
                                                    }} >
                                                        ADD Lecture
                                                    </button>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </Dialog>
                            {/* edit lecture  */}
                            <Dialog open={isEditLectureOpen} fullWidth maxWidth='sm' onClose={handleEditLectureClose} >
                                <div style={{ paddingBottom: '40px', }} >
                                    <div className='first-tutor-panel-dialog-close-btn-icon-container' >
                                        <IconButton className='first-tutor-panel-dialog-close-icon' onClick={() => {
                                            handleEditLectureClose();
                                        }} >
                                            <CloseIcon />
                                        </IconButton>
                                    </div>
                                    <div style={{ fontSize: '17px', fontWeight: '600', paddingTop: '12px', paddingBottom: '12px', borderBottom: '2px solid #E5E5E5' }} >
                                        <p style={{ textAlign: 'center' }} >
                                            Edite Lecture
                                        </p>
                                    </div>


                                    <div style={{ padding: '20px' }} >
                                        <Grid container spacing={2} >
                                            <Grid item xs={12} md={12} >
                                                <div>
                                                    <AddNewCourseAddNewSectionLectureName />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} >
                                                <div className='tutor-my-wallet-add-money-dialog-submit-btn-cont--'  >
                                                    <button type='submit' onClick={() => {
                                                        handleEditLectureClose();
                                                    }} >
                                                        SAVE
                                                    </button>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </Dialog>
                        </div>
                        <div className='first-tutor-panel-add-course-module-lacture-name' >
                            <div className='first-tutor-panel-add-course-module-lacture-name-left-div' >
                                <ReorderIcon style={{ fontSize: '17px', color: 'gray' }} />
                                <p>
                                    Lecture name
                                </p>
                            </div>
                            <div>
                                <IconButton onClick={() => {
                                    setIsEditLectureOpen(true)
                                }} >
                                    <EditIcon />
                                </IconButton>
                                <IconButton>
                                    <AddOutlined onClick={() => {
                                        setIsAddLectureOpen(true)
                                    }} />
                                </IconButton>
                            </div>
                        </div>
                    </Grid>
                    {/* add section button */}
                    <Grid item xs={12} >
                        <div className='first-tutor-panel-add-course-add-section-button-container' >
                            <button onClick={() => {
                                setIsAddSectionOpen(true)
                            }} >
                                Add sections
                            </button>
                        </div>
                    </Grid>
                    {/* course module heading */}
                    <Grid item xs={12} >
                        <div className='first-tutor-panel-add-course-heading-card' >
                            <p>
                                course module
                            </p>
                        </div>
                    </Grid>
                    {/* add price per lesson */}
                    <Grid item xs={12} >
                        <div>
                            <AddPricePerLesson />
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className='tutor-panel-add-new-course-add-packages-add-new-container' >
                            <p>
                                Add Packeges
                            </p>
                            <button>
                                <IconButton onClick={() => {
                                    setIsAddNewPackageOpen(true)
                                }} >
                                    <AddOutlined />
                                </IconButton>
                                <p>
                                    Add New
                                </p>
                            </button>
                            <Dialog open={isAddNewPackageOpen} fullWidth maxWidth='sm' onClose={handleIsAddNewPackageClose} >
                                <div style={{ paddingBottom: '40px', }} >
                                    <div className='first-tutor-panel-dialog-close-btn-icon-container' >
                                        <IconButton className='first-tutor-panel-dialog-close-icon' onClick={() => {
                                            handleIsAddNewPackageClose();
                                        }} >
                                            <CloseIcon />
                                        </IconButton>
                                    </div>
                                    <div style={{ fontSize: '17px', fontWeight: '600', paddingTop: '12px', paddingBottom: '12px', borderBottom: '2px solid #E5E5E5' }} >
                                        <p style={{ textAlign: 'center' }} >
                                            Add New Package
                                        </p>
                                    </div>


                                    <div style={{ padding: '20px' }} >
                                        <Grid container spacing={2} >
                                            <Grid item xs={12} >
                                                <div>
                                                    <AddNewCoursePackagePackageNO />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} >
                                                <div>
                                                    <AddNewCoursePackageTitle />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} >
                                                <div>
                                                    <AddNewCoursePackageSubTitle />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} >
                                                <div>
                                                    <AddNewPackagePrice />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} >
                                                <div>
                                                    <AddNewCoursePackageDescription />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} >
                                                <div className='tutor-my-wallet-add-money-dialog-submit-btn-cont--'  >
                                                    <button type='submit' onClick={() => {
                                                        handleIsAddNewPackageClose();
                                                    }} >
                                                        ADD PACKAGE
                                                    </button>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </Dialog>
                        </div>
                    </Grid>
                    <Grid item xs={12}  >
                        <div>
                            <h3>
                                packeges 1
                            </h3>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div>
                            <AddNewCoursePackageTitle />
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div>
                            <AddNewCoursePackageSubTitle />
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div>
                            <AddNewPackagePrice />
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div>
                            <AddNewCoursePackageDescription />
                        </div>
                    </Grid>
                </Grid>
            </div>

        </>
    )
}

// add package 





