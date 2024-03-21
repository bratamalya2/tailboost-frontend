import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addEmail } from '../store/userSlice';

import Nav from '../components/nav';

import '../styles/userInfo.css';

function UserInfo() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const user = location.state.user;
    const email = useSelector(state => state.users.currentUserEmail);

    const logOutHandler = () => {
        dispatch(addEmail(''));
        localStorage.removeItem('currentEmail');
    };

    useEffect(() => {
        const x = localStorage.getItem('currentEmail');
        if (email === '' && !x)
            navigate('/');
    }, [email, navigate]);

    return <>
        <Nav logOutHandler={logOutHandler} />
        <div className='user-info-div'>
            <div>Email: {user.email}</div>
            <div>Name: {user.name}</div>
            <div>Phone: {user.phone}</div>
            <div>Website: {user.website}</div>
            <div>Username: {user.username}</div>
        </div>
    </>
}

export default UserInfo;