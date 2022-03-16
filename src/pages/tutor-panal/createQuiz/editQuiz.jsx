import React from 'react'
import './quiz.css'
import { Grid, IconButton } from '@mui/material'
import { EditQuiztitle } from '../../../components/tutorPanelComponents/fields/searchFields'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import q1Img from '../../../assets/q1Img.png'
import uploadImg from '../../../assets/uploadImgQuiz.png'
import uploadVideo from '../../../assets/uploadVideo.png'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';




export const EditQuiz = () => {
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 7,
        borderRadius: 0,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 2,
            backgroundColor: "#76AC2D",
        },
    }));

    const editQuizData = [
        {
            id: '2',
            questionNo: 'Q2',
            opt1: 'Nulla pharetra malesuada libero',
            opt2: 'Nulla pharetra malesuada libero',
            opt3: 'Nulla pharetra malesuada libero',
            opt4: 'Nulla pharetra malesuada libero',
        },
        {
            id: '3',
            questionNo: 'Q3',
            opt1: 'Nulla pharetra malesuada libero',
            opt2: 'Nulla pharetra malesuada libero',
            opt3: 'Nulla pharetra malesuada libero',
            opt4: 'Nulla pharetra malesuada libero',
        },
        {
            id: '4',
            questionNo: 'Q4',
            opt1: 'Nulla pharetra malesuada libero',
            opt2: 'Nulla pharetra malesuada libero',
            opt3: 'Nulla pharetra malesuada libero',
            opt4: 'Nulla pharetra malesuada libero',
        },
        {
            id: '5',
            questionNo: 'Q5',
            opt1: 'Nulla pharetra malesuada libero',
            opt2: 'Nulla pharetra malesuada libero',
            opt3: 'Nulla pharetra malesuada libero',
            opt4: 'Nulla pharetra malesuada libero',
        },
    ]
    return (
        <>

            <div style={{ paddingTop: '20px', paddingBottom: '40px' }} >
                <Grid container spacing={2} >
                    <Grid item xs={12} >
                        <div className='tutor-quiz-edit-quiz-header-container--' >
                            <button style={{ backgroundColor: 'black' }} >
                                cnacel
                            </button>
                            <button  >
                                save changes
                            </button>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div>
                            <EditQuiztitle />
                        </div>
                    </Grid>

                </Grid>

                <div style={{ marginTop: '20px' }} >
                    <Grid container spacing={2} >
                        <Grid item xs={12} >
                            <div className='--tutor-edit-quiz-q1-content-container-n' >
                                <div>
                                    <p>
                                        Q1
                                    </p>
                                </div>
                                <div className='--tutor-edit-quiz-q1-input-' >
                                    <input type='text' style={{ width: '100%' }} />
                                </div>
                                <div>
                                    <IconButton>
                                        <ModeEditOutlineIcon />
                                    </IconButton>
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} >
                            <Grid container spacing={2} >
                                <Grid item xs={12} md={3} lg={2} >
                                    <div style={{ width: '100%', position: 'relative' }}  >
                                        <div className='del-icon-absolute' >
                                            <DeleteIcon className='nicon-dell-icon' />
                                        </div>
                                        <img src={q1Img} alt="pic" width='100%' style={{ borderRadius: '7px' }} />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={3} lg={2} >
                                    <div style={{ width: '100%', position: 'relative' }}  >
                                        <div className='del-icon-absolute' >
                                            <DeleteIcon className='nicon-dell-icon' />
                                        </div>
                                        <img src={q1Img} alt="pic" width='100%' style={{ borderRadius: '7px' }} />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={3} lg={2} >
                                    <div style={{ width: '100%', position: 'relative' }}  >
                                        <div className='del-icon-absolute' >
                                            <DeleteIcon className='nicon-dell-icon' />
                                        </div>
                                        <img src={q1Img} alt="pic" width='100%' style={{ borderRadius: '7px' }} />
                                    </div>
                                </Grid>
                                {/* for upload img or video */}
                                <Grid item xs={12} md={3} lg={2} >
                                    <div style={{ backgroundColor: '#E1E1E1', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '7px' }} >
                                        <input type="file" id='uploadImg' style={{ display: 'none' }} />
                                        <div style={{ textAlign: 'center' }}  >
                                            <label htmlFor='uploadImg' className='tutor-quiz-edit-quiz-up-load--img--cont' >
                                                <img src={uploadImg} alt="img" />
                                                <p style={{ marginTop: '5px' }} >Uplad Image</p>
                                                <p style={{ color: '#A6A6A6', fontSize: '14px', marginTop: '5px' }} >(Upload only png, <br />
                                                    jpg,pdf)</p>
                                            </label>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={3} lg={2} >
                                    <div style={{ backgroundColor: '#E1E1E1', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '7px' }} >
                                        <input type="file" id='uploadVideo' style={{ display: 'none' }} />
                                        <div style={{ textAlign: 'center' }}  >
                                            <label htmlFor='uploadVideo' className='tutor-quiz-edit-quiz-up-load--img--cont' >
                                                <img src={uploadVideo} alt="img" />
                                                <p style={{ marginTop: '5px' }} >Uplad Video</p>
                                                <p style={{ color: '#A6A6A6', fontSize: '14px', marginTop: '5px' }} >(Upload only mp4,
                                                    mkv)</p>
                                            </label>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} alignSelf='center' >
                            <div className='tutor-q1-progress-bar-content-container' >
                                <div style={{ marginRight: '20px' }} >
                                    <button className='tutor-view-quiz-play--btn' >
                                        <PlayArrowIcon />
                                    </button>
                                </div>
                                <div style={{ width: '40%' }} >
                                    <BorderLinearProgress variant="determinate" value={50} />
                                </div>
                                <div style={{ marginLeft: '20px' }} >
                                    <p>
                                        03:30
                                    </p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <div className='tutor-edit-quiz-option---container' >
                                <h5>
                                    Nulla pharetra malesuada libero
                                </h5>
                                <div className='tutor-edit-quiz-option---correct-cont' >
                                    <p style={{ color: '#76AC2D' }} > Correct Answer </p>
                                    <input type='checkbox' />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <div className='tutor-edit-quiz-option---container' >
                                <h5>
                                    Nulla pharetra malesuada libero
                                </h5>
                                <div className='tutor-edit-quiz-option---correct-cont' >
                                    <p> Correct Answer </p>
                                    <input type='checkbox' />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <div className='tutor-edit-quiz-option---container' >
                                <h5>
                                    Nulla pharetra malesuada libero
                                </h5>
                                <div className='tutor-edit-quiz-option---correct-cont' >
                                    <p> Correct Answer </p>
                                    <input type='checkbox' />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <div className='tutor-edit-quiz-option---container' >
                                <h5>
                                    Nulla pharetra malesuada libero
                                </h5>
                                <div className='tutor-edit-quiz-option---correct-cont' >
                                    <p> Correct Answer </p>
                                    <input type='checkbox' />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    {/* with out pic */}
                    <Grid container spacing={2} >
                        <Grid item xs={12} >
                            {
                                editQuizData.map(i => (
                                    <>

                                        <div>
                                            <Grid container spacing={2} >
                                                <Grid item xs={12} >
                                                    <div className='--tutor-edit-quiz-q1-content-container-n' style={{ marginTop: '25px' }} >
                                                        <div>
                                                            <p>
                                                                {i.questionNo}
                                                            </p>
                                                        </div>
                                                        <div className='--tutor-edit-quiz-q1-input-' >
                                                            <input type='text' style={{ width: '100%' }} />
                                                        </div>
                                                        <div>
                                                            <IconButton>
                                                                <ModeEditOutlineIcon />
                                                            </IconButton>
                                                            <IconButton>
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </div>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} md={6} >
                                                    <div className='tutor-edit-quiz-option---container' >
                                                        <h5>
                                                            {
                                                                i.opt1
                                                            }
                                                        </h5>
                                                        <div className='tutor-edit-quiz-option---correct-cont' >
                                                            <p> Correct Answer </p>
                                                            <input type='checkbox' />
                                                        </div>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} md={6} >
                                                    <div className='tutor-edit-quiz-option---container' >
                                                        <h5>
                                                            {
                                                                i.opt2
                                                            }
                                                        </h5>
                                                        <div className='tutor-edit-quiz-option---correct-cont' >
                                                            <p> Correct Answer </p>
                                                            <input type='checkbox' />
                                                        </div>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} md={6} >
                                                    <div className='tutor-edit-quiz-option---container' >
                                                        <h5>
                                                            {
                                                                i.opt3
                                                            }
                                                        </h5>
                                                        <div className='tutor-edit-quiz-option---correct-cont' >
                                                            <p style={{color:'#76AC2D'}} > Correct Answer </p>
                                                            <input type='checkbox' checked />
                                                        </div>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} md={6} >
                                                    <div className='tutor-edit-quiz-option---container' >
                                                        <h5>
                                                            {
                                                                i.opt4
                                                            }
                                                        </h5>
                                                        <div className='tutor-edit-quiz-option---correct-cont' >
                                                            <p> Correct Answer </p>
                                                            <input type='checkbox' />
                                                        </div>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </div>

                                    </>
                                ))
                            }

                        </Grid>
                        <Grid item xs={12}  >
                            <div className='tutor-edit-quiz-add-new--btn-cont' >
                                <button>
                                    Add New
                                </button>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>

        </>
    )
}