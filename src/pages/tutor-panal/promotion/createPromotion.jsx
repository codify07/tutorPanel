import React from 'react'
import { Grid } from '@mui/material'
import upPic from '../../../assets/uploadPic.png'
import {PromotionType} from '../../../components/tutorPanelComponents/fields/searchFields'
import {PromotionTitle} from '../../../components/tutorPanelComponents/fields/searchFields'
import {PriceBefore} from '../../../components/tutorPanelComponents/fields/searchFields'
import {PriceAfter} from '../../../components/tutorPanelComponents/fields/searchFields'
import {DiscountCreate} from '../../../components/tutorPanelComponents/fields/searchFields'
import {StartDate} from '../../../components/tutorPanelComponents/fields/searchFields'
import {EndDate} from '../../../components/tutorPanelComponents/fields/searchFields'
import {TextAreaForCreatePromotion} from '../../../components/tutorPanelComponents/fields/searchFields'
import {Link} from 'react-router-dom'



export const CreatePromotion = () => {
    return (
        <>
            <div className='tutor-create-promotion-page-container--' >
                <Grid container spacing={2} >
                    <Grid item xs={12} md={4} >
                        <div className='tutor-create-promotion-upload-pic-container' >
                            <div>
                                <input type='file' id='up-pic' style={{ display: 'none' }} />
                                <label htmlFor="up-pic">
                                    <img src={upPic} alt="pic" className='img-icon-to-upload--' />
                                </label>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={8} >
                        <div>
                            <p className='tutor-create-promotion-upload-img-guidlines-text' >
                                upload your promotion thumbnail here.
                            </p>
                            <p className='tutor-create-promotion-upload-img-guidlines-text' >
                                import guidelines <span style={{ color: 'black', fontWeight: '500' }} >1200 * 800 OR 12:8 Ratio </span>
                            </p>
                            <p className='tutor-create-promotion-upload-img-guidlines-text' >
                                suported formate <span style={{ color: 'black', fontWeight: '500' }} > .Jpg .Jpeg OR .Png </span>
                            </p>
                            <div >
                                <input type='file' id='up-pic' style={{display:'none'}} />
                                <label htmlFor="up-pic">
                                    <p className='tutor-create-promotion-upld-img-btn--' >
                                        upload image
                                    </p>
                                </label>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div>
                            <PromotionType />
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div>
                            <PromotionTitle />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <div>
                            <PriceBefore />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <div>
                            <PriceAfter />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <div>
                            <DiscountCreate />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <div>
                            <StartDate/>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <div>
                            <EndDate/>
                        </div>
                    </Grid>
                    <Grid xs={12} >
                        <div style={{marginTop:'20px'}} >
                            <TextAreaForCreatePromotion />
                        </div>
                    </Grid>
                    <Grid xs={12} >
                        <div style={{marginTop:'20px',display:'flex',alignItems:'center',justifyContent:'center'}} >
                           <Link to='my-promotions' >
                                <button className='tutor-create-promotion-submit-btn' >
                                    submit
                                </button>
                           </Link>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}