import React from 'react'
import './promotion.css'
import {Grid,IconButton } from '@mui/material'
import {SearchByTitle} from '../../../components/tutorPanelComponents/fields/searchFields'
import {StartEndDate} from '../../../components/tutorPanelComponents/fields/searchFields'
import {PromotionTable} from '../../../components/tutorPanelComponents/tables/tables'
import {Link} from 'react-router-dom'

export const MyPromotions = () => {
    return(
        <>
        
            <div className='tutor-my-promotions-page-container--' >
                {/* header buttons */}
                <div className='tutor-my-promotions-page-header-btns-container' >
                    <button>
                        download
                    </button>
                    <Link to='create-promotion' className='tutor-my-promotions-page-header-link-create-promotion' >
                       <p> create promotion </p>
                    </Link>
                </div>
                {/* header search fields  */}
                <div>
                    <Grid container spacing={2} >
                        <Grid item xs={12} md={3} >
                            <SearchByTitle />
                        </Grid>
                        <Grid item xs={12} md={3} >
                            <StartEndDate/>
                        </Grid>
                        <Grid item xs={12} md={5}  alignSelf='flex-end'>
                            
                            <button className='tutor-promotion-apply-btn--' >
                                apply
                            </button>
                        </Grid>
                    </Grid>
                </div>

            {/* table */}

                <div style={{marginTop:'30px'}} >
                    <Grid container spacing={2} >
                        <Grid item xs={12} >
                            <div>
                                <PromotionTable />
                            </div>
                        </Grid>
                    </Grid>
                </div>

            </div>

        
        </>
    )
}