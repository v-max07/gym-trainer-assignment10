import React from 'react';
import Google from '../../images/linkIcon/icons8-google-48.png';
import Facebook from '../../images/linkIcon/icons8-facebook-48.png';
import Github from '../../images/linkIcon/icons8-github-45.png';
import { useAuthState, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const SocialLogin = () => {
    //----------------``````Social Login````````------------------

    const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userF, loadingF, errorF] = useSignInWithFacebook(auth);
    const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);



//``````````````` get user and send to current page ``````````````````
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    if (loadingG || loadingF || loadingGit) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <div className='mt-5'>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='firstDiv'></div>
                    <p className='mx-3 orClass'>Or</p>
                    <div className='secondDiv'></div>
                </div>
            </div>
            <div className='linkButton'>
                <button onClick={()=>signInWithGoogle()}> <img src={Google} alt="" /> Google</button>
                <button onClick={()=>signInWithFacebook()}> <img src={Facebook} alt="" /> Google</button>
                <button onClick={()=>signInWithGithub()}> <img src={Github} alt="" /> Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;