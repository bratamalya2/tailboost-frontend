import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addEmail } from '../store/userSlice';

import Nav from '../components/nav';

import '../styles/userInfo.css';

function PostInfo() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const post = location.state.post;
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
            <div>Title: {post.title}</div>
            <div>Body: {post.body}</div>
        </div>
    </>
}

export default PostInfo;