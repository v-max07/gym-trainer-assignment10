import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import Google from '../../images/linkIcon/icons8-google-48.png';
import Facebook from '../../images/linkIcon/icons8-facebook-48.png';
import Github from '../../images/linkIcon/icons8-github-45.png';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    if (user) {
        navigate('/home');
    }

    const handleLogin = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);

        console.log(email, password);
    }
    return (
        <div className='row'>
            <div className='loginForm col-md-4 col-sm-12 mx-auto my-5 px-4'>
                <Form onSubmit={handleLogin}>
                    <h2 className='loginTitle mb-4'>Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} className='py-3' type="email" placeholder="Enter your email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} className='py-3' type="password" placeholder="Enter your Password" required />
                    </Form.Group>
                    <Button className='d-block w-100 py-3 fw-bold' type="submit">
                        Submit
                    </Button>
                    <p className='mt-2 '>Don't have an account? <Link style={{ color: '#f36f21', textDecoration: 'none' }} to='/register'>SignUp</Link> </p>
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

export default Login;