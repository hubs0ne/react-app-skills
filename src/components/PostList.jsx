import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PostItem from './PostItem';

const PostList = ({ posts, title, remove, postsLength }) => {

    if (!posts.length) {
        return <div className="posts-empty">Posts not found..</div>
    }
    return (
        <div>
            <h1>{title}</h1>
            <TransitionGroup>
                {posts.map((post) =>
                    <CSSTransition
                        key={post.id}
                        timeout={300}
                        classNames="post">
                        <PostItem remove={remove} post={post} />
                    </CSSTransition>)}
            </TransitionGroup>
        </div>
    );
}

export default PostList;
