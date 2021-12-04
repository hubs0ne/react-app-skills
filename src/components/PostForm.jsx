import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({ create }) => {

    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            title: post.title,
            body: post.body
        }
        create(newPost)
        setPost({ title: '', body: '' })
    }

    return (
        <form>
            <MyInput
                onChange={e => setPost({ ...post, title: e.target.value })}
                value={post.title}
                type="text"
                placeholder="Enter title"
            />
            <MyInput
                onChange={e => setPost({ ...post, body: e.target.value })}
                value={post.body}
                type="text"
                placeholder="Enter text"
            />
            <MyButton
                onClick={addNewPost}
            >Post</MyButton>
        </form>
    );
}

export default PostForm;
