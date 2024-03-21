import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import { addEmail } from '../store/userSlice';

import '../styles/login.css';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();

    const loginWithGithub = async () => {
        setError(null);

        try {
            const res = await signInWithPopup(auth, githubProvider);
            if (!res) {
                throw new Error('Could not complete signup');
            }

            const user = res.user;
            dispatch(addEmail(user.email));
            localStorage.setItem('currentEmail', user.email);
            navigate('/home');
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    };

    const loginWithGoogle = async () => {
        setError(null);

        try {
            const res = await signInWithPopup(auth, googleProvider);
            if (!res) {
                throw new Error('Could not complete signup');
            }

            const user = res.user;
            dispatch(addEmail(user.email));
            localStorage.setItem('currentEmail', user.email);
            navigate('/home');
        }
        catch (error) {
            console.log(error);
            setError(error.message);
        }
    };

    useEffect(() => {
        if (error) {
            enqueueSnackbar('Login failed!', { variant: 'error' });
            enqueueSnackbar(error, { variant: 'error' });
        }
    }, [error]);

    return <div className='login-div'>
        <button onClick={loginWithGithub}>Login via Github</button>
        <button onClick={loginWithGoogle}>Login via Google</button>
    </div>;
}

export default Login;