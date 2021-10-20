import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from './Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className='services'>

            <div className='service-intro' id='service'>
                <p> OUR SERVICES</p>
                <h2>We Care Our Patients</h2>
            </div>



            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        services.map(service => <Service key={service.id} servc={service} ></Service>)
                    }


                </Row>


            </Container>

        </div >
    );
};

export default Services;