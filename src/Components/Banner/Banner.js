import React from 'react';
import './Banner.css'
import { Carousel, Col, Row, Container } from 'react-bootstrap';
import doctors from '../../Images/BannerImg/group-doctors (5).png'


const Banner = () => {
    return (

        <div className='banner'>
            <Container>
                <Row xs={1} md={2} lg={2} className="g-2 p-2">


                    <Col>
                        <div id='home'>
                            <div className='carousel-desc'>
                                <h2>
                                    Welcome to our life save clinic
                                </h2>
                                <p>We Take Care Our Patients Health </p>
                                <button>About us</button>
                            </div>
                        </div>

                    </Col>
                    <Col className='banner-img'>
                        <img src={doctors} alt="" />
                    </Col>
                </Row>
            </Container>

        </div>



    );
};

export default Banner;