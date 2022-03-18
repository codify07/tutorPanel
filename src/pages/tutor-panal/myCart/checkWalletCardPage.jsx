import React, { useState } from 'react'
import { Grid, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import penFill from '../../../assets/penFull.png'
import './myCart.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Link } from 'react-router-dom'



export const Continue = () => {
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
                                        Wallet Balance
                                    </p>
                                </div>
                                <div className='tutor-my-cart-payment-card-change-address-btn-container' >
                                    <button>
                                        Add wallet balance
                                    </button>
                                </div>
                            </div>
                            <div className='tutor-my-cart-payment-card-amount-show-container' >
                                <p>
                                    $100.00
                                </p>
                            </div>
                            <div style={{ marginTop: '20px' }} >
                                <p style={{ fontWeight: '550', fontSize: '16px' }} >
                                    Cradit/dabit card
                                </p>
                            </div>
                            <div className='tutor-my-cart-payment-card-subtotal-etc-' style={{ padding: '5px' }} >
                                <div className='tutor-my-cart-payment-card-subtotal-etc--content'  >
                                    <div>
                                        <input type='radio' id='visa' value='visa' name='card' />
                                        <label htmlFor='visa'> Visa   <br />
                                            <p style={{ color: 'gray' }} >
                                                1234 1234 1234 1234
                                            </p>
                                        </label>
                                    </div>
                                    <p> $100.00 </p>
                                </div>
                                <div className='tutor-my-cart-payment-card-subtotal-etc--content' >
                                    <div>
                                        <input type='radio' id='masterCard' value='masterCard' name='card' />
                                        <label htmlFor='MasterCard'> Master Card   <br />
                                            <p style={{ color: 'gray' }} >
                                                1234 1234 1234 1234
                                            </p>
                                        </label>
                                    </div>
                                    <p> $100.00 </p>
                                </div>
                                <div className='tutor-my-cart-payment-card-subtotal-etc--content' >
                                    <div>
                                        <input type='radio' id='masterCard' value='masterCard' name='card' />
                                        <label htmlFor='MasterCard'> Master Card   <br />
                                            <p style={{ color: 'gray' }} >
                                                1234 1234 1234 1234
                                            </p>
                                        </label>
                                    </div>
                                    <p> $100.00 </p>
                                </div>

                            </div>
                            <div className='my-cart-continiue--btn' >
                                <div>
                                    <p style={{opacity:'0.5'}}  >
                                        Total Pay
                                    </p>
                                    <p style={{fontSize:'18px',marginTop:'5px'}} >
                                        $20
                                    </p>
                                </div>
                                <div>
                                    <Link to='thanku' style={{ textDecoration: 'none' }}  >
                                        <p  style={{letterSpacing:'1px',fontSize:'19px',color:'white',textTransform:'uppercase'}} >
                                            continue
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>

        </>
    )
}