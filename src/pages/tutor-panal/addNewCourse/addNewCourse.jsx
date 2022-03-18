import React from 'react'
import './addNewCourse.css'
import { Grid, IconButton } from '@mui/material'
import uploadPic from '../../../assets/uploadPic.png'
import AddOutlined from '@mui/icons-material/AddOutlined'
import DateRangeIcon from '@mui/icons-material/DateRange';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import ReorderIcon from '@mui/icons-material/Reorder';
import {CourseStartDate,CourseEndDate} from '../../../components/tutorPanelComponents/fields/searchFields'



export const AddNewCourse = () => {
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
                                save
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
                                <option value="" disabled  hidden >Total Hours</option>

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
                                <option value="" disabled  hidden >Total Minutes</option>

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
                            <img src={uploadPic} alt="pic" width='60px' />
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
                                <button className="first-tutor-panel-add-course-upload-image-btn" >
                                    upload image
                                </button>
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
                                    <IconButton>
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
                                    <IconButton>
                                        <AddOutlined className='first-tutor-add-new-course-add-btn-' />
                                    </IconButton>
                                    <p>
                                        Add Time
                                    </p>
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
                                How Maney student in class
                            </p>
                            <select id="experience" name="experience"  >
                                <option value="" disabled  hidden >Select...</option>

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
                                <IconButton>
                                    <EditIcon />
                                </IconButton>
                                <IconButton>
                                    <AddOutlined />
                                </IconButton>
                            </div>
                        </div>
                        <div className='first-tutor-panel-add-course-module-lacture-name' >
                            <div className='first-tutor-panel-add-course-module-lacture-name-left-div' >
                                <ReorderIcon style={{ fontSize: '17px', color: 'gray' }} />
                                <p>
                                    Lecture name
                                </p>
                            </div>
                            <div>
                                <IconButton>
                                    <EditIcon />
                                </IconButton>
                                <IconButton>
                                    <AddOutlined />
                                </IconButton>
                            </div>
                        </div>
                        <div className='first-tutor-panel-add-course-module-lacture-name' >
                            <div className='first-tutor-panel-add-course-module-lacture-name-left-div' >
                                <ReorderIcon style={{ fontSize: '17px', color: 'gray' }} />
                                <p>
                                    Lecture name
                                </p>
                            </div>
                            <div>
                                <IconButton>
                                    <EditIcon />
                                </IconButton>
                                <IconButton>
                                    <AddOutlined />
                                </IconButton>
                            </div>
                        </div>
                    </Grid>
                    {/* add section button */}
                    <Grid item xs={12} >
                        <div className='first-tutor-panel-add-course-add-section-button-container' >
                            <button>
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
                    {/* <Grid>
                        <div className='first-tutor-panel-add-course-add-price-per-lessong-container' >
                            <p>
                                Add price per lasson
                            </p>
                            <div className='first-tutor-panel-add-course-add-price-per-lessong-container'>

                            </div>
                        </div>
                    </Grid> */}
                </Grid>
            </div>

        </>
    )
}

// add package 





