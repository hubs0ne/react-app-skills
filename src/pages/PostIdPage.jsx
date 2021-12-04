import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PostsService from '../API/PostsService';
import { useFetching } from '../hooks/useFetching';
import Loader from '../components/UI/loader/Loader';

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comms, setComms] = useState([])
    const [fetchPost, postLoading, postError] = useFetching(async () => {
        const postResponse = await PostsService.getPostById(params.id)
        const commResponse = await PostsService.getCommById(params.id)
        setPost(postResponse.data)
        setComms(commResponse.data)
    })

    useEffect(() => {
        fetchPost()
    }, [])

    return (
        <div>
            {postLoading
                ? <div className="loader"><Loader /></div>
                : <div className="post-id-wrapper">
                    <h3>{post.id}. {post.title}</h3>
                    <div className="post-id-body">{post.body}</div>
                    <h4>Comments</h4>
                    {comms.map(comm =>
                        <div className="comms-wrapper" key={comm.id}>
                            <h5 className="comm-email">{comm.email}</h5>
                            <div className="comm-body">{comm.body}</div>
                        </div>
                    )}
                </div>}
        </div>
    );
}

export default PostIdPage;
