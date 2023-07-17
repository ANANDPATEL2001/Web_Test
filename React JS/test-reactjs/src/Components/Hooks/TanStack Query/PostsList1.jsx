import React from 'react'
import { useQuery } from '@tanstack/react-query'

import { getPosts } from './getPosts'

const PostsList1 = () => {
    const postsQuery = useQuery({
        queryKey: ['posts'],
        queryFn: () => {
            const result = getPosts()
            console.log(result)
            return result
        },
        refetchInterval: 1000 * 10,
    })

    // postsQuery.fetchStatus === 'fetching'
    // postsQuery.status === 'loading'

    if (postsQuery.status === 'loading')
        return <h1>Loading...</h1>
    if (postsQuery.status === 'error')
        return <h1>{JSON.stringify(postsQuery.error)}</h1>

    return (
        <>
            <div className='container-fluid my-1'>
                <h1>Posts List 1</h1>
                <ol>
                    {postsQuery.data.map(post =>
                        <li key={post.id}>{post.title}</li>
                    )}
                </ol>
            </div>
        </>
    )
}

export default PostsList1