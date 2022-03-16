import React, { useState } from 'react'
import './purchaseProduct.css'
import { PurchaseProductSearchByName } from '../../../components/tutorPanelComponents/fields/searchFields'
import { PurchaseProductSearchByPrice } from '../../../components/tutorPanelComponents/fields/searchFields'
import { Grid } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import penImg from '../../../assets/pen.png'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import mask2 from '../../../assets/pMask2.png'
import mask3 from '../../../assets/pMask3.png'
import mask4 from '../../../assets/pMask4.png'
import { Link } from 'react-router-dom'





export const PurchaseProduct = () => {
    const [isAddTrue, setIsAddTrue] = useState(false)
    const [addToCart, setAddToCart] = useState(0);

    const handlePlusBtn = () => {
        setAddToCart(addToCart + 1)
    }
    const handleMinusBtn = () => {
        setAddToCart(addToCart - 1)
        if (addToCart == 1) {
            setIsAddTrue(false)
        }
    }

    const purchaseProduct = [
        {
            id: '1',
            title: 'Classmate Octane Colour Burst - Count of 10 (assorted)',
            img: `${penImg}`,
            price: '$8.03',

        },
        {
            id: '2',
            title: 'Classmate Octane Colour Burst - Count of 10 (assorted)',
            img: `${mask2}`,
            price: '$8.03',

        },
        {
            id: '3',
            title: 'Proffisy Colourful Screen LCD Writing Tablet Pad 8.5 Inch Color Line E-Writing Electro...',
            img: `${mask3}`,
            price: '$8.03',

        },
        {
            id: '4',
            title: 'Classmate Octane Colour Burst - Count of 10 (assorted)',
            img: `${mask4}`,
            price: '$8.03',

        },
        {
            id: '5',
            title: 'Classmate Octane Colour Burst - Count of 10 (assorted)',
            img: `${mask2}`,
            price: '$8.03',

        },
    ]
    return (
        <>

            <div>
                <Grid container spacing={2} >
                    <Grid item xs={12} lg={4} >
                        <div>
                            <PurchaseProductSearchByName />
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={4} >
                        <div>
                            <PurchaseProductSearchByPrice />
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={4} >
                        <div className="tutor-purchse-product-filter-apply-btn--container" >
                            <button>
                                apply
                            </button>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className="courses-tabs-swiper-container" style={{ width: '100%', }} >
                            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                spaceBetween={10}
                                slidesPerView={6}
                                navigation
                                centeredSlides={true}
                                hiddenClass='swiper-button-hidden'
                                Navigation={false}
                                scrollbar={{ draggable: true }}

                            >
                                <SwiperSlide>
                                    <div className="tutor-purchase-products-tabs-cont--style" > <p className="tutor-purchase-products-tabs-style" > all </p> </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tutor-purchase-products-tabs-cont--style" > <p className="tutor-purchase-products-tabs-style" > pen </p> </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tutor-purchase-products-tabs-cont--style" > <p className="tutor-purchase-products-tabs-style" > pencil </p> </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tutor-purchase-products-tabs-cont--style" > <p className="tutor-purchase-products-tabs-style" > notepade </p> </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tutor-purchase-products-tabs-cont--style" > <p className="tutor-purchase-products-tabs-style" > notebooks </p> </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tutor-purchase-products-tabs-cont--style" > <p className="tutor-purchase-products-tabs-style" > markers & highligters </p> </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tutor-purchase-products-tabs-cont--style" > <p className="tutor-purchase-products-tabs-style" > calculator </p> </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tutor-purchase-products-tabs-cont--style" > <p className="tutor-purchase-products-tabs-style" > pencil </p> </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </Grid>

                    {
                        purchaseProduct.map(i => (
                            <>
                                <Grid item xs={12} md={6} lg={4} >
                                    <div className='tutor-purchase-product-product-card-container' >
                                        <Link to='product-detail' style={{ textDecoration: 'none' }} >
                                            <div className='tutor-purchase-product-img-mask-cont' >
                                                <img src={i.img} alt="img" width='100%' />
                                            </div>
                                        </Link>
                                        <div className='tutor-purchase-product-description-text-cont' >
                                            <p>
                                                {i.title}
                                            </p>
                                        </div>
                                        <div className='tutor-purchase-product-price-add-btn-container' >
                                            <p>
                                                {i.price}
                                            </p>

                                            {
                                                isAddTrue ?
                                                    <div className='tutor-purchase-product-plus-minus-btn-container' >
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
                                                    :
                                                    <div  >
                                                        <button onClick={() => {
                                                            setIsAddTrue(true);
                                                            setAddToCart(addToCart + 1)
                                                        }} className='tutor-purchase-product--add--btn-' >
                                                            Add
                                                        </button>
                                                    </div>
                                            }

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