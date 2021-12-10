import React from 'react';
import { useLocation } from 'react-router-dom';
import { posts } from '../data';

const Post = () => {

    const location = useLocation();
    const postId = location.pathname.split("/")[2];

    const post = posts.find((item) => item.id.toString() === postId);

    return (
        <div className="post">
            <img 
                src={post.img}
                alt=""
                className="postImg"
            />
            <h1 className="postTitle">{post.title}t</h1>
            <p className="postDesc">{post.desc}</p>
            <p className="postLongDesc">{post.longDesc}</p>
        </div>
    )
}

export default Post
