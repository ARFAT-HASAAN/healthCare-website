import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Department.css'

import departmentOne from '../../Images/deparment/Department (1).jpg'
import departmenttwo from '../../Images/deparment/Department (2).jpg'
import departmentThree from '../../Images/deparment/Department (3).jpg'
import departmentFOUR from '../../Images/deparment/Department (4).jpg'
import departmentfIVE from '../../Images/deparment/Department (5).jpg'
import departmentSIX from '../../Images/deparment/Department (6).jpg'


const Department = () => {
    return (
        <div className='department'>

            <Container>
                <div className='department-intro'>

                    <h2>Departments</h2>

                </div>

                <Row xs={1} md={2} lg={3} className="g-4">

                    <Col>
                        <Card>
                            <Card.Img variant="top" src={departmentOne} />
                            <Card.Body>
                                <Card.Title>Cardiology</Card.Title>
                                <Card.Text>
                                    Introduction. Cardiologyis the study heart conditions. The Consultant with whom you have an appointment is a specialist.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img variant="top" src={departmenttwo} />
                            <Card.Body>
                                <Card.Title>Neurology</Card.Title>
                                <Card.Text>
                                    Introduction. Neurology is the study heart conditions. The Consultant with whom you have an appointment is a specialist.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={departmentThree} />
                            <Card.Body>
                                <Card.Title>Neurology</Card.Title>
                                <Card.Text>
                                    Introduction. Neurology is the study heart conditions. The Consultant with whom you have an appointment is a specialist.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={departmentFOUR} />
                            <Card.Body>
                                <Card.Title>Pediatrical</Card.Title>
                                <Card.Text>
                                    Introduction. Pediatrical is the study heart conditions. The Consultant with whom you have an appointment is a specialist.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={departmentfIVE} />
                            <Card.Body>
                                <Card.Title>Laboratory</Card.Title>
                                <Card.Text>
                                    Introduction. Laboratory is the study heart conditions. The Consultant with whom you have an appointment is a specialist.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={departmentSIX} />
                            <Card.Body>
                                <Card.Title>
                                    Gynecological</Card.Title>
                                <Card.Text>
                                    Introduction. Gynecological is the study heart conditions. The Consultant with whom you have an appointment is a specialist.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Department;