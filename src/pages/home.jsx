import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addEmail } from '../store/userSlice';
import { fetchUsers } from '../store/userSlice';
import { fetchPosts } from '../store/postSlice';

import Nav from '../components/nav';
import UserData from '../components/userData';
import PostData from '../components/postData';

import '../styles/home.css';

function Home() {
    const [joke, setJoke] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const email = useSelector(state => state.users.currentUserEmail);
    const users = useSelector(state => state.users.users);
    const posts = useSelector(state => state.posts.posts);

    const logOutHandler = () => {
        dispatch(addEmail(''));
        localStorage.removeItem('currentEmail');
    };

    const fetchJoke = async () => {
        try {
            const x = await fetch(process.env.REACT_APP_JOKES_API_URL, {
                headers: {
                    'Accept': 'application/json'
                }
            });
            const y = await x.json();
            setJoke(y.joke);
        }
        catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const x = localStorage.getItem('currentEmail');
        if (email === '' && !x)
            navigate('/');
    }, [email, navigate]);

    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(fetchPosts());
        const x = localStorage.getItem('currentEmail');
        if (x)
            dispatch(addEmail(x));
    }, [dispatch]);

    useEffect(() => {
        fetchJoke();
    }, []);

    return <>
        <Nav logOutHandler={logOutHandler} />
        <div className='user-description'>
            Hi {email}!
        </div>
        <div className='user-description'>
            Random joke: {joke}
        </div>
        <h2 className='users-header'>
            Users
        </h2>
        <div className='users-list'>
            {users.map((user, i) => <UserData user={user} key={i} />)}
        </div>
        <h2 className='users-header'>Posts</h2>
        <div className='users-list'>
            {posts.map((post, i) => <PostData post={post} key={i} />)}
        </div>
    </>
}

export default Home;