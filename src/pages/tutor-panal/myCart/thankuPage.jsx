import React from 'react'
import checkout from '../../../assets/checkout.png'
import './myCart.css'


export const Thanku = () => {
    return (
        <>

            <div className='tutor-my-cart-thanku-page--container' >
                <div>
                    <img src={checkout} alt="" width='100%' />
                </div>
                <div style={{ marginTop: '20px' }} >
                    <p style={{ textTransform: 'capitalize', color: '#76AC2D', fontSize: '35px', fontWeight: '490' }} >
                        samantha aryton
                    </p>
                </div>
                <div style={{ marginTop: '20px' }} >
                    <p style={{ textTransform: 'lowercase', color: 'gray', fontSize: '20px', fontWeight: '490' }} >
                        Thank you For Order
                    </p>
                </div>
                <div style={{ marginTop: '20px' }} >
                    <p style={{ textTransform: 'capitalize', color: 'gray', fontSize: '20px', fontWeight: '490' }} >
                        14 july 2021 by 09:00am
                    </p>
                </div>
                <div style={{ marginTop: '20px' }} className='tutuor-my-cart-checkout-thanky-text-container' >
                   <p>
                       thank you
                   </p>
                </div>
            </div>

        </>
    )
}