import React from 'react';
import { useParams } from 'react-router';
import './Details.css'

const Details = () => {

    const { serviceId } = useParams()

    return (
        <div className='deatails-container'>

            <h3>This is service {serviceId}</h3>

        </div>
    );
};

export default Details;