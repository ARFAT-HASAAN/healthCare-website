import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserMd, faIdBadge, faAddressCard, faPhoneSquareAlt, faEnvelope, faMapMarkedAlt, faRoad } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row, Stack } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {


    const home = <FontAwesomeIcon icon={faHome} />
    const doctor = <FontAwesomeIcon icon={faUserMd} />
    const contact = <FontAwesomeIcon icon={faIdBadge} />
    const aboute = <FontAwesomeIcon icon={faAddressCard} />

    const telepone = <FontAwesomeIcon icon={faPhoneSquareAlt} />
    const gmail = <FontAwesomeIcon icon={faEnvelope} />
    const location = <FontAwesomeIcon icon={faMapMarkedAlt} />
    const road = <FontAwesomeIcon icon={faRoad} />




    return (

        <>
            <div className='footer' >

                <Container>


                    <Row xs={1} md={3} lg={3} className="g-4 ">

                        <Col>
                            <Stack>
                                <h2 className='Footer-header' >NAVIGATION</h2>
                                <ul className='navigator' >


                                    <li>{home}<a href="#"> Home</a></li>
                                    <li>{doctor}<a href="#">   Doctors</a></li>
                                    <li>{contact}<a href="#"> Contact</a></li>
                                    <li>{aboute}<a href="#"> Aboute</a></li>



                                </ul>

                            </Stack>

                        </Col>

                        <Col className='about-section' >
                            <Stack gap={3}>
                                <h2 className='Footer-header' id='about' >
                                    ABOUT US

                                </h2>
                                <p className='about-text'>
                                    The Life Save Clinic started its journey with the vision of taking the health care services into a new height through providing the most accurate and reliable test results to all its customers and caring the patients at the top of its values.
                                </p>
                            </Stack>

                        </Col>



                        <Col>
                            <Stack >
                                <h2 className='Footer-header' id='contact'>CONTACT INFO</h2>
                                <p>{road}  23/2, Khilji Road, Block-B,</p>
                                <p>{location}  Shyamoli, Dhaka-1207</p>
                                <p>{gmail}  info@hdclbd.com</p>
                                <p>{telepone}  10662 </p>
                            </Stack>
                        </Col>

                    </Row>
                </Container>

            </div>

            <Container>

                <Row xs={1} md={1} lg={1} className="g-4 ">

                    <Col>
                        <div className='copyRight'>
                            <p>Copyright &copy; 2021 Life Save Clinic</p>
                        </div>


                    </Col>

                </Row>
            </Container>

        </>

    );
};

export default Footer;