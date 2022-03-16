import React, { useState } from 'react'
import { Grid } from '@mui/material'
import penImg from '../../../assets/pen.png'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove'

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
                            <img src={penImg} alt="" width='100%' />
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
                            <h3 style={{fontSize:'22px',letterSpacing:'0.5px'}} >
                                Description
                            </h3>
                            <p style={{marginTop:'15px',lineHeight:'26px'}} >
                                Donec eget velit a purus aliquet finibus. Nam semper massa et metus bibendum, efficitur imperdiet tortor venenatis. Sed vitae purus nec nisl efficitur finibus vel sit amet urna. Sed volutpat leo eu massa facilisis, ut mattis purus imperdiet. Curabitur tincidunt ac ex ac vulputate. Aliquam at lacus et metus suscipit tincidunt.
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div>

        </>
    )
}