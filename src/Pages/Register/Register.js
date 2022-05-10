import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import Google from '../../images/linkIcon/icons8-google-48.png';
import Facebook from '../../images/linkIcon/icons8-facebook-48.png';
import Github from '../../images/linkIcon/icons8-github-45.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
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
    const handleRegister = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const userName = e.target.username.value;
        const password = e.target.password.value;

        console.log(email, password);
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