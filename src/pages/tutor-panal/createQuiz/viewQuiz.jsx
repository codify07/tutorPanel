import React from 'react'
import './quiz.css'
import { Grid } from '@mui/material'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import q1Img from '../../../assets/q1Img.png'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'


export const ViewQuizPage = () => {
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

    const questionAndOptions = [
        {
            id: '1',
            q: 'Q1',
            ifImg: `${q1Img}`,
            questionTitle: 'Donec cursus blandit arcu. Nulla pharetra malesuada libero, sit amet condimentum est ullamcorper ut.',
            opt1: 'Nulla pharetra malesuada libero',
            opt2: 'sit amet condimentum',
            opt3: 'cursus blandit arcu',
            opt4: 'sit amet condimentum est',
        },
        {
            id: '2',
            q: 'Q2',
            questionTitle: 'Donec cursus blandit arcu. Nulla pharetra malesuada libero, sit amet condimentum est ullamcorper ut.',
            opt1: 'Nulla pharetra malesuada libero',
            opt2: 'sit amet condimentum',
            opt3: 'cursus blandit arcu',
            opt4: 'sit amet condimentum est',
        },
        {
            id: '3',
            q: 'Q3',
            questionTitle: 'Donec cursus blandit arcu. Nulla pharetra malesuada libero, sit amet condimentum est ullamcorper ut.',
            opt1: 'Nulla pharetra malesuada libero',
            opt2: 'sit amet condimentum',
            opt3: 'cursus blandit arcu',
            opt4: 'sit amet condimentum est',
        },
        {
            id: '4',
            q: 'Q4',
            questionTitle: 'Donec cursus blandit arcu. Nulla pharetra malesuada libero, sit amet condimentum est ullamcorper ut.',
            opt1: 'Nulla pharetra malesuada libero',
            opt2: 'sit amet condimentum',
            opt3: 'cursus blandit arcu',
            opt4: 'sit amet condimentum est',
        },
        {
            id: '5',
            q: 'Q5',
            questionTitle: 'Donec cursus blandit arcu. Nulla pharetra malesuada libero, sit amet condimentum est ullamcorper ut.',
            opt1: 'Nulla pharetra malesuada libero',
            opt2: 'sit amet condimentum',
            opt3: 'cursus blandit arcu',
            opt4: 'sit amet condimentum est',
        },
        {
            id: '6',
            q: 'Q6',
            questionTitle: 'Donec cursus blandit arcu. Nulla pharetra malesuada libero, sit amet condimentum est ullamcorper ut.',
            opt1: 'Nulla pharetra malesuada libero',
            opt2: 'sit amet condimentum',
            opt3: 'cursus blandit arcu',
            opt4: 'sit amet condimentum est',
        },


    ]

    return (
        <>

            <div>
                <Grid container spacing={2} rowSpacing={4} >
                    <Grid item xs={12} >
                        <div className='tutor-create-quiz-view-quiz-page-header-btns--cont' >
                            <button>
                                <DeleteIcon style={{ marginRight: '8px' }} />
                                <p>
                                    Delete Quiz
                                </p>
                            </button>
                            <Link to='edit-quiz' style={{textDecoration:'none'}} >
                                <button className='edit-link-tutor-quiz-' >
                                    <ModeEditOutlineIcon style={{ marginRight: '8px' }} />
                                    <p style={{ textDecoration: 'none' }} >
                                        Edit Quiz
                                    </p>
                                </button>
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className='tutor-view-quiz--header-p-container' >
                            <p>
                                Pellentesque et purus pharetra, venenatis turpis vel, aliquet sem.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div>
                            <p>
                                <span style={{ marginRight: '10px' }} >Q1</span> Donec cursus blandit arcu. Nulla pharetra malesuada libero, sit amet condimentum est ullamcorper ut.
                            </p>
                            <div className='tutor-quiz-q1-img-upload-container' >
                                <Grid container spacing={2} >
                                    <Grid item xs={12} lg={2} >
                                        <div style={{ width: '100%', }} >
                                            <img src={q1Img} alt="img" width='100%' style={{ borderRadius: '10px' }} />
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} lg={9} alignSelf='center' >
                                        <div className='tutor-q1-progress-bar-content-container' >
                                            <div style={{ marginRight: '20px' }} >
                                                <button className='tutor-view-quiz-play--btn' >
                                                    <PlayArrowIcon />
                                                </button>
                                            </div>
                                            <div style={{ width: '50%' }} >
                                                <BorderLinearProgress variant="determinate" value={50} />
                                            </div>
                                            <div style={{ marginLeft: '20px' }} >
                                                <p>
                                                    03:30
                                                </p>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <div className='tutor-view-quiz-option-container' >
                                            <p>
                                                Nulla pharetra malesuada libero
                                            </p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <div className='tutor-view-quiz-option-container-guttor' >
                                            <p>
                                                Nulla pharetra malesuada libero
                                            </p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <div className='tutor-view-quiz-option-container-guttor' >
                                            <p>
                                                Nulla pharetra malesuada libero
                                            </p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <div className='tutor-view-quiz-option-container-guttor' >
                                            <p>
                                                Nulla pharetra malesuada libero
                                            </p>
                                        </div>
                                    </Grid>
                                </Grid>

                            </div>
                        </div>
                    </Grid>

                    {
                        questionAndOptions.map(i => (
                            <>

                                <Grid item xs={12} >
                                    <div>
                                        <p>
                                            <span style={{ marginRight: '10px' }} >{i.q}</span> {i.questionTitle}
                                        </p>
                                        <div style={{ marginTop: '10px' }} >
                                            <Grid container spacing={1} >

                                                <Grid item xs={12} >
                                                    <div className='tutor-view-quiz-option-container' >
                                                        <p>
                                                            {i.opt1}
                                                        </p>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} >
                                                    <div className='tutor-view-quiz-option-container-guttor' >
                                                        <p>
                                                            {i.opt2}
                                                        </p>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} >
                                                    <div className='tutor-view-quiz-option-container-guttor' >
                                                        <p>
                                                            {i.opt3}
                                                        </p>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} >
                                                    <div className='tutor-view-quiz-option-container-guttor' >
                                                        <p>
                                                            {i.opt4}
                                                        </p>
                                                    </div>
                                                </Grid>
                                            </Grid>

                                        </div>
                                    </div>
                                </Grid>

                            </>
                        ))
                    }

                </Grid>
            </div>

        </>
    )
}