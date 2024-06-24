import React, { useState } from 'react'

import PostsList1 from './PostsList1'
import PostsList2 from './PostsList2'
import Post from './Post'
import CreatePost from './CreatePost'
import PostListPaginated from './PostListPaginated'

const Posts = () => {
    const [currentPage, setCurrentPage] = useState(<PostsList1 />)
    return (
        <div className='container-fluid my-1'>
            <button className='btnn btn-outline-primary' onClick={() => setCurrentPage(<PostsList1 />)}>Posts List 1</button>

            <button className='btnn btn-outline-primary' onClick={() => setCurrentPage(<PostsList2 />)}>Posts List 2</button>

            <button className='btnn btn-outline-primary' onClick={() => setCurrentPage(<Post id={1} />)}>First Post</button>

            <button className='btnn btn-outline-primary' onClick={() => setCurrentPage(<CreatePost setCurrentPage={setCurrentPage} />)}>New Post</button>

            <button className='btnn btn-outline-primary' onClick={() => setCurrentPage(<PostListPaginated />)}>Post Pagination</button>

            {currentPage}
        </div>
    )
}

export default Posts