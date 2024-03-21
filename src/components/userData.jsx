import { useNavigate } from 'react-router-dom';

import '../styles/userData.css';

function UserData({ user }) {
    const navigate = useNavigate();

    return <div className='user-data-info' onClick={() => navigate('/userInfo', { state: { user: user } })}>
        <div>Email: {user.email}</div>
        <div>Name: {user.name}</div>
        <div>Phone: {user.phone}</div>
        <div>Website: {user.website}</div>
        <div>Username: {user.username}</div>
    </div>
}

export default UserData;