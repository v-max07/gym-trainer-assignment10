import React from 'react';
import './Checkout.css';

const Checkout = () => {
    return (
        <div className='my-5'>
            <div className='shippingChart'>
                <div>
                    <h2>Shipping Address</h2>
                    <div className='d-flex'>
                        <input type="text" className='d-block w-100 p-2 my-4 mx-2' placeholder='Enter your first name ' name="Fname" id="" />
                        <input type="text" className='d-block w-100 p-2 my-4 mx-2' placeholder='Enter your last name ' name="Lname" id="" />
                    </div>

                    <div className='d-flex'>
                        <input type="text" className='d-block w-100 p-2 my-4 mx-2' placeholder='Enter your address' name="address" id="" />
                    </div>

                    <div className='d-flex'>
                        <input type="text" className='d-block w-100 p-2 my-4 mx-2' placeholder='City' name="city" id="" />
                        <input type="text" className='d-block w-100 p-2 my-4 mx-2' placeholder='Province/State' name="state" id="" />
                    </div>
                    <div className='d-flex'>
                        <input type="text" className='d-block w-100 p-2 my-4 mx-2' placeholder='Country' name="country" id="" />
                        <input type="text" className='d-block w-100 p-2 my-4 mx-2' placeholder='Zip/Postal Code ' name="postalCode" id="" />
                    </div>
                </div>
                <div>
                    <h2>Customer Info</h2>
                    <div className='d-flex'>
                        <input className='mx-2 p-2 w-100 ' type="email" name="email" id="" placeholder='Email' />
                    </div>
                    <button className='mx-auto rounded d-block checkOutBtn'>Check Out</button>
                </div>
            </div>    
        </div>
    );
};

export default Checkout;