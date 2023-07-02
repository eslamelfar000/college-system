import React from 'react'
import 'swiper/css';
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper';

import banner_1 from '../../assets/banner-1.png'
import banner_2 from '../../assets/banner-2.png'
import banner_3 from '../../assets/banner-3.png'
import banner_4 from '../../assets/banner-4.png'

import "swiper/css/effect-fade";
import "swiper/css/navigation";



function Slider() {
    return (
        <div className='slider-cover'>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                effect={"fade"}
                navigation={true}
                loop={true}
                modules={[EffectFade, Navigation]}
                className='slider mySwiper'
            >
                <SwiperSlide>
                    <img src={banner_1} alt="" />
                    <div className="content">
                        <h2>Wel Come To Study Point</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner_2} alt="" />
                    <div className="content">
                        <h2>Wel Come To Study Point</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner_3} alt="" />
                    <div className="content">
                        <h2>Wel Come To Study Point</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner_4} alt="" />
                    <div className="content">
                        <h2>Wel Come To Study Point</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider
