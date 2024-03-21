import { useNavigate } from 'react-router-dom';

import '../styles/postData.css';

function PostData({ post }) {
    const navigate = useNavigate();

    return <div className='post-data-info' onClick={() => navigate('/postInfo', { state: { post } })}>
        <div>Title: {post.title}</div>
        <div>Body: {post.body}</div>
    </div>
}

export default PostData;