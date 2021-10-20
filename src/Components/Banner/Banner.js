import React from 'react';
import './Banner.css'
import { Carousel, Col } from 'react-bootstrap';
import bannerOne from '../../Images/BannerImg/banner (1).jpg'
import bannerTwo from '../../Images/BannerImg/banner (2).jpg'
import bannerThree from '../../Images/BannerImg/banner (3).jpg'


const Banner = () => {
    return (
        <div className='banner' id='home'>
            <div className='carousel-desc'>
                <h2>
                    Welcome to our life save clinic
                </h2>
                <p>We Take Care Our Patients Health </p>
                <button>About us</button>
            </div>
        </div>
    );
};

export default Banner;