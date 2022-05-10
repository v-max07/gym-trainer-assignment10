import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import Google from '../../images/linkIcon/icons8-google-48.png';
import Facebook from '../../images/linkIcon/icons8-facebook-48.png';
import Github from '../../images/linkIcon/icons8-github-45.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin';
import Loading from '../Shared/Loading/Loading';

const Register = () => {
    const [checked, setChecked] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    
    const navigate = useNavigate();
    if (user) {
        navigate('/home');
    }
    if (loading) {
        return <Loading></Loading>;
    }

    const handleRegister = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const userName = e.target.username.value;
        const password = e.target.password.value;
        // const checkedTerms = e.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);

    }
    return (
        <div className='row'>
            <div className='loginForm col-md-4 col-sm-12 mx-auto my-5 px-4'>
                <Form onSubmit={handleRegister}>
                    <h2 className='loginTitle mb-4'>Register</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='py-3' type="name" name='name' id='' placeholder="Full Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='py-3' type="userName" name='username' id='' placeholder="User Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='py-3' type="email" name='email' id='' placeholder="Enter your email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='py-3' type="password" name='password' id='' placeholder="Enter your Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setChecked(!checked)} type="checkbox" name='terms' id='terms' label=" I accept the Terms of Use &amp; Privacy Policy" />
                    </Form.Group>

                    <Button disabled={!checked} className='d-block w-100 py-3 fw-bold' type="submit">
                        Register Now
                    </Button>
                    <p className='mt-2'>Already have an account? <Link style={{ color: '#f36f21', textDecoration: 'none' }} to='/login'>Login</Link> </p>
                </Form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;