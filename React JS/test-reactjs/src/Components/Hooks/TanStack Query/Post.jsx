import React from 'react'
import { useQuery } from '@tanstack/react-query'

import { getPostId, getUser } from './getPosts'

const Post = (props) => {

    const postsQuery = useQuery({
        queryKey: ['posts', props.id],
        queryFn: () => {
            const result = getPostId(props.id)
            console.log(result)
            return result
        },
        // refetchInterval: 1000 * 10,
    })

    const userQuery = useQuery({
        queryKey: ['users', postsQuery?.data?.id],
        enabled: postsQuery?.data?.id != null,
        queryFn: () => {
            const result = getUser(postsQuery?.data?.id)
            console.log(result)
            return result
        },
        // refetchInterval: 1000 * 10,
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
                <h1>first User </h1>
                <ol>
                    <li>{postsQuery.data.id}</li>
                    <li>{postsQuery.data.title}</li>
                    <li>{postsQuery.data.body}</li>
                </ol>
            </div>
        </>
    )
}

export default Post