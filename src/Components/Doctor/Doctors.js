import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Doctor.css'
import doctor1 from '../../Images/Doctors/doctor (1).jpg'
import doctor2 from '../../Images/Doctors/doctor (2).jpg'
import doctor3 from '../../Images/Doctors/doctor (3).jpg'

import doctor4 from '../../Images/Doctors/doctor (4).jpg'


const Doctors = () => {
    return (
        <div className='doctors-container'>


            <Container>

                <div className='doctors-intro'  >

                    <h2>
                        Our <br /> Dedicated Doctors Team</h2>
                </div>
                <Row xs={1} md={2} lg={4} className="g-4">

                    <Col>
                        <Card>
                            <Card.Img variant="top" src={doctor1} />
                            <Card.Body>
                                <Card.Title className='doctors-name'>Sultana Yesmin</Card.Title>
                                <Card.Text>
                                    Senior Dr. at Melborn
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img variant="top" src={doctor2} />
                            <Card.Body>
                                <Card.Title className='doctors-name'>Mariya Islam</Card.Title>
                                <Card.Text>
                                    Senior Dr. at Life save
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={doctor3} />
                            <Card.Body>
                                <Card.Title className='doctors-name'>Dr.Jhahangir kobir</Card.Title>
                                <Card.Text>
                                    Senior Dr. at London
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={doctor4} />
                            <Card.Body>
                                <Card.Title className='doctors-name'>Shomon khan</Card.Title>
                                <Card.Text>
                                    Senior Dr. at Delbord
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>

        </div>

    );
};

export default Doctors;