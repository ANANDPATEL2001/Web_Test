import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { getPostPaginated } from './getPosts'

const PostListPaginated = () => {
    // const [page, setPage] = useState(1)

    // const paginatedQuery = useQuery({
    //     queryKey: ['posts', { page }],
    //     queryFn: () => {
    //         const result = getPostPaginated({ page })
    //         console.log(result)
    //         return result
    //     },
    //     // refetchInterval: 1000 * 10,
    // })

    // // postsQuery.fetchStatus === 'fetching'
    // // postsQuery.status === 'loading'

    // if (postsQuery.status === 'loading')
    //     return <h1>Loading...</h1>
    // if (postsQuery.status === 'error')
    //     return <h1>{JSON.stringify(paginatedQuery.error)}</h1>

    // return (
    //     <>
    //         <div className='container-fluid my-1'>
    //             <h1>Post Paginated</h1>
    //             <button>Post Post</button>
    //             <ol>
    //                 {postsQuery.data.map(post =>
    //                     <li key={post.id}>{post.title}</li>
    //                 )}
    //             </ol>
    //             <button>Next Post</button>

    //         </div>
    //     </>
    // )
}

export default PostListPaginated