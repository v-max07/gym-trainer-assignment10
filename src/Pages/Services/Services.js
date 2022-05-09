import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem/ServiceItem';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("services_data.json")
            .then(res => res.json())
            .then(data => setServices(data))
        
    }, []);
    return (

        <div id='services' className='my-5'>
            <h2 className='text-center text-uppercase fs-1'>Our <span style={{ color:'#f36f21'}}>Services</span> </h2>
            <div style={{ height: '2px', backgroundColor: '#f36f21' }} className='w-25 mx-auto'></div>
            <div className='d-flex justify-content-evenly my-5 row'>
                {
                    services.map(service => <ServiceItem key={service._id} service={service}>

                    </ServiceItem>
                    )
                }
            </div>
        </div>
    );
};

export default Services;