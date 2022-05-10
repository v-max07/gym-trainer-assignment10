import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceItem.css';

const ServiceItem = ({ service }) => {
    const { _id, name, image, description, price } = service;
    const navigate = useNavigate();
    const navigateToCheckout = id => {
        navigate(`/checkout/${id}`);
    }
    return (
        <div className='col-sm-12 col-md-3 my-2 serviceItemDiv'>
            <div className='serviceItem mx-auto p-2'>
                <img className='w-100 h-50' src={image} alt="" />
                <div className='mt-2'>
                    <h3> {name} </h3>
                    <p> {description} </p>
                    <p>Price: <span>${price} </span></p>
                    <button onClick={()=>navigateToCheckout(_id)} className='d-block pursesBtn'>Purses</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;