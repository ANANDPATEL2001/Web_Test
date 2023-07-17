import React, { useState } from 'react'

import PostsList1 from './PostsList1'
import PostsList2 from './PostsList2'

const Posts = () => {
    const [currentPage, setCurrentPage] = useState(<PostsList1 />)
    return (
        <div className='container-fluid my-1'>
            <button className='btnn btn-outline-primary' onClick={() => setCurrentPage(<PostsList1 />)}>Posts List 1</button>
            <button className='btnn btn-outline-primary' onClick={() => setCurrentPage(<PostsList2 />)}>Posts List 2</button>

            {currentPage}
        </div>
    )
}

export default Posts