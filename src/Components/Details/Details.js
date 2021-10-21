import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Details.css'

const Details = () => {

    const { serviceId } = useParams()
    const [details, setDetails] = useState([])



    const [data, setdata] = useState({})
    console.log(data)


    useEffect(() => {
        fetch('/detailsdata.json')
            .then(res => res.json())
            .then(data => setDetails(data)
            )
    }, [])

    // console.log(details)


    useEffect(() => {

        const datas = details.find(detail => detail.id == serviceId)
        setdata(datas)

    }

        , [serviceId, details])

    return (
        <div className='deatails-container'>

            <Container className='class-container'>
                <Card>
                    <Card.Img variant="top" src={data?.img} />
                    <Card.Body>
                        <Card.Title className='doctors-name'>{data?.title}</Card.Title>
                        <Card.Text>
                            {data?.aboute}
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Container>


        </div>
    );
};

export default Details;