import React from 'react';
import { useNavigate } from 'react-router';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {
    const route = useNavigate()
    
    return (
        <div className="post">
            <div className="post-content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post-btns">
                <MyButton
                    onClick={() => route(`/posts/${props.post.id}`)}>
                    Open
                </MyButton>
                <MyButton
                    onClick={() => props.remove(props.post)}>
                    Delete
                </MyButton>
            </div>
        </div>
    );
}

export default PostItem;
