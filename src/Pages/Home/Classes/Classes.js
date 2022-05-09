import React from 'react';
import './Classes.css';
import fitness from '../../../images/ourClasses/fitness.jpg';
import training from '../../../images/ourClasses/training.jpg';
import yoga from '../../../images/ourClasses/yoga.jpg';

const Classes = () => {
    return (
        <div className='mt-5'>
            <h2 className='text-center text-uppercase fs-1'>We Have</h2>
            <div style={{ height: '2px', backgroundColor:'#f36f21'}} className='w-25 mx-auto'></div>
            <div className='ourClass mx-auto row'>
                <div className="gymClass fitness col-sm-12 col-md-3 justify-content-evenly">
                    <img src={fitness} alt="" />
                    <h5>Fitness Center</h5>
                </div>
                <div className="gymClass training col-sm-12 col-md-3">
                    <img src={training} alt="" />
                    <h5>Training Center</h5>
                </div>
                <div className="gymClass yoga col-sm-12 col-md-3">
                    <img src={yoga} alt="" />
                    <h5>Yoga Center</h5>
                </div>
            </div>
        </div>
    );
};

export default Classes;