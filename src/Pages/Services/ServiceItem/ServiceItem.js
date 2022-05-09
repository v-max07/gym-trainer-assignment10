import React from 'react';
import './ServiceItem.css';

const Serviceservice = ({ service }) => {
    const { _id, name, image, description, price } = service;
    return (
        <div className='col-sm-12 col-md-3 my-2 serviceItemDiv'>
            <div className='serviceItem mx-auto p-2'>
                <img className='w-100 h-50' src={image} alt="" />
                <div className='mt-2'>
                    <h3> {name} </h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, optio!</p>
                    <span>${price} </span>
                    <button className='d-block'>Purses</button>
                </div>
            </div>
        </div>
    );
};

export default Serviceservice;