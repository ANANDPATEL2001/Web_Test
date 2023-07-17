import React from 'react'
import { useQuery } from '@tanstack/react-query'

import { getPosts } from './getPosts'

const PostsList2 = () => {
    const postsQuery = useQuery({
        // Below ['POSTS'] key is catched in our memory & remains in it as long as we are fetching the data
        queryKey: ['posts'],
        queryFn: getPosts(),
    })

    if (postsQuery.status === 'loading')
        return <h1>Loading...</h1>
    if (postsQuery.status === 'error')
        return <h1>{JSON.stringify(postsQuery.error)}</h1>

    return (
        <>
            <div className='container-fluid my-1'>
                <h1>Posts List 2</h1>
                <ol>
                    {postsQuery.data.map(post =>
                        <li key={post.id}>{post.title}</li>
                    )}
                </ol>
            </div>
        </>
    )
}

export default PostsList2