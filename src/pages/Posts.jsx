import React, { useEffect, useState } from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/myModal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import { usePosts } from '../hooks/usePosts';
import PostsService from '../API/PostsService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPagesCount } from '../utils/posts';
import Pagination from '../components/UI/pagination/Pagination';

function Posts() {
    const [posts, setPosts] = useState([])
    const [modal, setModal] = useState(false)
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)

    const [fetchPosts, postsLoading, postsError] = useFetching(async () => {
        const response = await PostsService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    }, [])

    useEffect(() => {
        fetchPosts()
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="Posts">
            {/* <h1>Happy Hacking! Motherfuck</h1> */}

            <MyButton onClick={() => setModal(true)}
            >Create post
            </MyButton>

            <MyModal
                visible={modal}
                setVisible={setModal}
            ><PostForm create={createPost} />
            </MyModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
                limit={limit}
                setLimit={setLimit}
            />
            {postsError && <h1>Message from backend - {postsError}</h1>}
            {postsLoading
                ? <div className="loader"><Loader /></div>
                : <PostList
                    remove={removePost}
                    title="List posts"
                    posts={sortedAndSearchedPosts} />}
            <Pagination
                totalPages={totalPages}
                page={page}
                setPage={setPage}
            />
        </div>
    );
}

export default Posts;
