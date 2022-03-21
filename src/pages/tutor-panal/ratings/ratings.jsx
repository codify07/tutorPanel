import React from 'react'
import './ratings.css'
import { Grid } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import StarRateIcon from '@mui/icons-material/StarRate';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import avatar2 from '../../../assets/avatar2.png'


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

export const Ratings = () => {
    return (
        <>

            <div>
                <div className='first-tutor-panel-ratings-content-wraper' >
                    <Grid container spacing={4} >
                        <Grid item xs={12} >
                            <div className='first-tutor-panel-ratings-page-download-btn-container' >
                                <button>
                                    download
                                </button>
                            </div>
                        </Grid>
                    </Grid>


                    <Grid container spacing={2} >
                        {/* search by msg field */}
                        <Grid item xs={12} md={5} >
                            {/* <div className='first-tutor-panel-ratings-page-search-field-container' >
                                <p>Search by message</p>
                                <div className='first-tutor-panel-ratings-page-search-field-input-container'  >
                                    <input type="select" name="basic-menu" id="basic-menu" placeholder='All' />
                                    <KeyboardArrowDownIcon  />
                                    
                                </div>
                                </div> */}
                            <div className='first-tutor-panel-ratings-page-search-field-container' >
                                <p>Search by message</p>
                                <select id='filter' name='filter'  >
                                    <option value="All">All</option>
                                    <option value=""></option>
                                </select>
                            </div>
                        </Grid>


                        <Grid item xs={12} md={7}>
                            <div >
                                <p style={{ color: '#F9F9F9' }} > search</p>
                                <div className='first-tutor-panel-ratings-page-btn-style-con' >
                                    <button>
                                        apply
                                    </button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <div className='first-tutor-ratings-prpgress-content-wraper' >
                        <div className='first-tutor-ratings-prpgress-inner-content-wraper' >
                            <Grid container spacing={2} columnSpacing={4} >
                                <Grid item xs={12} md={2} alignSelf='center' >
                                    <div className='first-tutor-panel-ratings-page-rating-card-container' >
                                        <p>
                                            4.0
                                        </p>
                                        <div className='first-tuttor-panal-ratings-page-rating-stars-container' >
                                            <StarRateIcon className='ratings-r-colored-star' size='small' />
                                            <StarRateIcon className='ratings-r-colored-star' size='small' />
                                            <StarRateIcon className='ratings-r-colored-star' size='small' />
                                            <StarRateIcon className='ratings-r-colored-star' size='small' />
                                            <StarRateIcon size='small' />
                                            <p>
                                                (50)
                                            </p>

                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={10} >
                                    <Grid container columnSpacing={2} >
                                        <Grid item xs={11} alignSelf='center' >
                                            <div>
                                                <div>
                                                    <BorderLinearProgress variant="determinate" value={100} style={{ marginTop: '20px' }} />

                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={1} alignSelf='center' >
                                            <div style={{ marginTop: '10px' }} >
                                                <p>
                                                    5.0(30)
                                                </p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={11} alignSelf='center' >
                                            <div>
                                                <div>
                                                    <BorderLinearProgress variant="determinate" value={80} style={{ marginTop: '20px' }} />

                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={1} alignSelf='center' >
                                            <div style={{ marginTop: '10px' }} >
                                                <p>
                                                    4.0(30)
                                                </p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={11} alignSelf='center' >
                                            <div>
                                                <div>
                                                    <BorderLinearProgress variant="determinate" value={60} style={{ marginTop: '20px' }} />

                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={1} alignSelf='center' >
                                            <div style={{ marginTop: '10px' }} >
                                                <p>
                                                    3.0(30)
                                                </p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={11} alignSelf='center' >
                                            <div>
                                                <div>
                                                    <BorderLinearProgress variant="determinate" value={40} style={{ marginTop: '20px' }} />

                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={1} alignSelf='center' >
                                            <div style={{ marginTop: '10px' }} >
                                                <p>
                                                    2.0(30)
                                                </p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={11} alignSelf='center' >
                                            <div>
                                                <div>
                                                    <BorderLinearProgress variant="determinate" value={20} style={{ marginTop: '20px' }} />

                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={1} alignSelf='center' >
                                            <div style={{ marginTop: '10px' }} >
                                                <p>
                                                    1.0(30)
                                                </p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                        {/* reviews */}
                        <div>
                            <div style={{ paddingTop: '20px', paddingLeft: '20px', paddingRight: '20px' }}>
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
                                                    <StarRateIcon className='ratings-r-colored-star' size='small' />
                                                </div>
                                                <div style={{ marginRight: '3px' }} >
                                                    <StarRateIcon className='ratings-r-colored-star' size='small' />
                                                </div>
                                                <div style={{ marginRight: '3px' }} >
                                                    <StarRateIcon className='ratings-r-colored-star' size='small' />
                                                </div>
                                                <div style={{ marginRight: '3px' }} >
                                                    <StarRateIcon className='ratings-r-colored-star' size='small' />
                                                </div>
                                                <div style={{ marginRight: '3px' }} >
                                                    <StarRateIcon className='ratings-r-colored-star' size='small' />
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
                                                    <StarRateIcon className='ratings-r-colored-star' size='small' />
                                                </div>
                                                <div style={{ marginRight: '3px' }} >
                                                    <StarRateIcon className='ratings-r-colored-star' size='small' />
                                                </div>
                                                <div style={{ marginRight: '3px' }} >
                                                    <StarRateIcon className='ratings-r-colored-star' size='small' />
                                                </div>
                                                <div style={{ marginRight: '3px' }} >
                                                    <StarRateIcon className='ratings-r-colored-star' size='small' />
                                                </div>
                                                <div style={{ marginRight: '3px' }} >
                                                    <StarRateIcon className='ratings-r-colored-star' size='small' />
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
            </div>

        </>
    )
}