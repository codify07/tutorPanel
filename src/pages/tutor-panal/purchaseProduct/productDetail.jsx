import React, { useState } from 'react'
import { Grid } from '@mui/material'
import penImg from '../../../assets/pen.png'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove'
import penFull from '../../../assets/penFull.png'
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


export const ProductDetail = () => {
    const [addToCart, setAddToCart] = useState(0);
    const [isAddTrue, setIsAddTrue] = useState(false)

    const handlePlusBtn = () => {
        setAddToCart(addToCart + 1)
    }
    const handleMinusBtn = () => {
        setAddToCart(addToCart - 1)
        if (addToCart == 1) {
            setIsAddTrue(false)
        }
    }
    return (
        <>

            <div className='tutor-p-p-p-detail-contianer' >
                <Grid container spacing={2} >
                    <Grid item xs={12} lg={4} >
                        <div className='tutor-p-p-p-detail-img'  >
                            <img src={penFull} alt="" width='100%' />
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={8} >
                        <div className='tutor-p-p-p-detail-content-wraper' >
                            <h2>
                                Classmate Octane Colour Burst - Count of 10 (assorted)
                            </h2>
                            <p>
                                Integer consectetur scelerisque justo in tincidunt. Curabitur orci lorem, dictum vel leo eget, congue lobortis orci. Donec scelerisque enim ut sapien blandit suscipit.
                            </p>
                            <p style={{ fontSize: '22px', marginTop: '10px' }} >
                                $8.03
                            </p>
                            <div className='tutor-p-p-p-detail-content-btn-wraper' >

                                <div style={{ width: '180px' }} className='tutor-purchase-product-plus-minus-btn-container' >
                                    <AddIcon onClick={() => {
                                        handlePlusBtn()
                                    }} className='t-p-p-plus-btn' />
                                    <p>
                                        {addToCart}
                                    </p>
                                    <RemoveIcon onClick={() => {
                                        handleMinusBtn();
                                    }} className='t-p-p-plus-btn' />
                                </div>
                                <div className='tutor-p-p-p-detail-content-add-to-cart-btn' >
                                    <button>
                                        add to cart
                                    </button>
                                </div>

                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div>
                            <h3 style={{ fontSize: '22px', letterSpacing: '0.5px' }} >
                                Description
                            </h3>
                            <p style={{ marginTop: '15px', lineHeight: '26px' }} >
                                Donec eget velit a purus aliquet finibus. Nam semper massa et metus bibendum, efficitur imperdiet tortor venenatis. Sed vitae purus nec nisl efficitur finibus vel sit amet urna. Sed volutpat leo eu massa facilisis, ut mattis purus imperdiet. Curabitur tincidunt ac ex ac vulputate. Aliquam at lacus et metus suscipit tincidunt.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div>
                            <h3 style={{ fontSize: '22px', letterSpacing: '0.5px' }}>
                                Additional Information
                            </h3>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={2} >
                        <div>
                            <p style={{ fontSize: '18px', fontWeight: '440' }} >
                                Manufacturer
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={10} >
                        <div style={{ width: '100%', }} >
                            <p style={{ fontSize: '18px', fontWeight: '440', display: 'flex', flexWrap: 'wrap', width: '70%' }} >
                                Donec eget velit a purus aliquet finibus. Nam semper massa et metus
                                bibendum, efficitur imperdiet tortor venenatis.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={2} >
                        <div>
                            <p style={{ fontSize: '18px', fontWeight: '440' }} >
                                Brand
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={10} >
                        <div>
                            <p>
                                Classmate
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={2} >
                        <div>
                            <p style={{ fontSize: '18px', fontWeight: '440' }} >
                                Model Number
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={10} >
                        <div>
                            <p>
                                52346897
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={2} >
                        <div>
                            <p style={{ fontSize: '18px', fontWeight: '440' }} >
                                Material
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={10} >
                        <div>
                            <p>
                                plastic
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div style={{ marginTop: '20px' }} >
                            <h3 style={{ fontSize: '22px', letterSpacing: '0.5px' }}>
                                Recommendations
                            </h3>
                        </div>
                    </Grid>

                </Grid>
                <div className='first-tutor-ratings-prpgress-content-wraper' >
                    <div className='first-tutor-ratings-prpgress-inner-content-wraper' >
                        <Grid container spacing={2} columnSpacing={4} >
                            <Grid item xs={12} md={3} >
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
                            <Grid item xs={9} >
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

        </>
    )
}