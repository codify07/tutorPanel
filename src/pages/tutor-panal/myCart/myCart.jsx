import React, { useState } from 'react'
import { Grid, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import penFill from '../../../assets/penFull.png'
import './myCart.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import {Link} from 'react-router-dom'



export const MyCart = () => {
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

            <div>
                <Grid container spacing={2} >
                    <Grid item xs={12} >
                        <div className='tutor-my-cart-mpage-header-continer' >
                            <h2>
                                My Cart
                            </h2>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={6} >
                        <div className='tutor-my-cart-cart-product-card-container' >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                                <IconButton>
                                    <DeleteIcon style={{ color: 'orangered' }} />
                                </IconButton>
                                <div style={{ width: '100px' }} >
                                    <img src={penFill} alt="pic" width='100%' />
                                </div>
                            </div>
                            <div style={{ marginLeft: '3%', width: '80%' }} >
                                <div  >
                                    <p>
                                        Classmate Octane Colour Burst ...
                                    </p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", marginTop: '20px' }} >
                                    <h3>
                                        $16.06
                                    </h3>
                                    <div style={{ width: '140px', padding: '2px 0px', marginLeft: '10%' }} className='tutor-purchase-product-plus-minus-btn-container'  >
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
                                </div>
                            </div>
                        </div>

                        <div className='tutor-my-cart-cart-product-card-container' >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                                <IconButton>
                                    <DeleteIcon style={{ color: 'orangered' }} />
                                </IconButton>
                                <div style={{ width: '100px' }} >
                                    <img src={penFill} alt="pic" width='100%' />
                                </div>
                            </div>
                            <div style={{ marginLeft: '3%', width: '80%' }} >
                                <div  >
                                    <p>
                                        Classmate Octane Colour Burst ...
                                    </p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", marginTop: '20px' }} >
                                    <h3>
                                        $16.06
                                    </h3>
                                    <div style={{ width: '140px', padding: '2px 0px', marginLeft: '10%' }} className='tutor-purchase-product-plus-minus-btn-container'  >
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
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={1} >

                    </Grid>
                    <Grid item xs={12} lg={5} >
                        <div className='tutor-my-cart-payment-card-container' >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                                <div style={{ display: 'flex', alignItems: 'center', color: '#76AC2D' }} >
                                    <PermIdentityIcon />
                                    <p style={{ marginLeft: '8px' }} >
                                        Delivery to
                                    </p>
                                </div>
                                <div className='tutor-my-cart-payment-card-change-address-btn-container' >
                                    <button>
                                        Change
                                    </button>
                                </div>
                            </div>
                            <div className='tutor-my-cart-payment-card-change--address-p-container' >
                                <p>
                                    Home - 4152 Cessna Drive, United States
                                </p>
                            </div>
                            <div className='tutor-my-cart-payment-card-subtotal-etc-' >
                                <div className='tutor-my-cart-payment-card-subtotal-etc--content'  >
                                    <p> Subtotal : </p>
                                    <p> $16.06 </p>
                                </div>
                                <div className='tutor-my-cart-payment-card-subtotal-etc--content' >
                                    <p> Tax(%) : </p>
                                    <p> $20 </p>
                                </div>
                                <div className='tutor-my-cart-payment-card-subtotal-etc--content' >
                                    <p> Delivery : </p>
                                    <p> $20 </p>
                                </div>
                                <div className='tutor-my-cart-payment-card-subtotal-etc--content' >
                                    <p> Discount : </p>
                                    <p> $20 </p>
                                </div>
                            </div>
                            <div className='tutor-my-cart-payment-card-total-amount-container' >
                                <p>
                                    Total Amount :
                                </p>
                                <p>
                                    $36.06
                                </p>
                            </div>
                            <div className='tutor-my-cart-payment-card-buy-now-btn-container' >
                                <Link to='buy-now' style={{textDecoration:'none'}} className='my-cart-buy-now---btn' >
                                    <button  >
                                        buy now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>

        </>
    )
}