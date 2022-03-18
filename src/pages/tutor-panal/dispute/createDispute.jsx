import React from 'react'
import { Grid } from '@mui/material'
import upPic from '../../../assets/uploadPic.png'
import { CreateDisputeTitle, CreateDisputeTextArea } from '../../../components/tutorPanelComponents/fields/searchFields'




export const CreateDispute = () => {
    return (
        <>
            <div style={{ paddingBottom: '60px' }} >
                <Grid container spacing={3} >
                    <Grid item xs={12} >
                        <p style={{ marginTop: '10px', fontSize: '18px', fontWeight: '550' }} >
                            Create Dispute
                        </p>
                    </Grid>
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
                                <input type='file' id='up-pic' style={{ display: 'none' }} />
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
                            <CreateDisputeTitle />
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div>
                            <CreateDisputeTextArea />
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className='create-dipute-submit-b-btn-container' >
                            <button>
                                submit
                            </button>
                        </div>
                    </Grid>
                </Grid>

            </div>

        </>
    )
}