import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css';
import Google from '../../images/linkIcon/icons8-google-48.png';
import Facebook from '../../images/linkIcon/icons8-facebook-48.png';
import Github from '../../images/linkIcon/icons8-github-45.png';

const Register = () => {
    return (
        <div className='row'>
            <div className='loginForm col-md-4 col-sm-12 mx-auto my-5 px-4'>
                <Form>
                    <h2 className='loginTitle mb-4'>Register</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='py-3' type="name" placeholder="Full Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='py-3' type="userName" placeholder="User Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='py-3' type="email" placeholder="Enter your email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='py-3' type="password" placeholder="Enter your Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label=" I accept the Terms of Use &amp; Privacy Policy" />
                    </Form.Group>

                    <Button className='d-block w-100 py-3 fw-bold' type="submit">
                        Register Now
                    </Button>
                    <p className='mt-2'>Already have an account? <Link style={{ color: '#f36f21', textDecoration: 'none' }} to='/login'>Login</Link> </p>
                </Form>
                <div className='mt-5'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='firstDiv'></div>
                        <p className='mx-3 orClass'>Or</p>
                        <div className='secondDiv'></div>
                    </div>
                </div>

                <div className='linkButton'>
                    <button> <img src={Google} alt="" /> Google</button>
                    <button> <img src={Facebook} alt="" /> Google</button>
                    <button> <img src={Github} alt="" /> Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;