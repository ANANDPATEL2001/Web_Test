import React from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const POSTS = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
]

const React_Query = () => {

    // 'useQueryClient' returns the instance of 'queryClient' we made
    const queryClient = new useQueryClient()

    // 'queryKey' is a Complex-array (string/undefined/nested object) uniquely identifies the data being fetched
    // 'queryFn' is a function of 'useQuery' taking input as a 'context' and returns a 'Promise'
    const postsQuery = useQuery({
        queryKey: ['POSTS'],
        queryFn: (obj) => wait(1000)
            .then(() => {
                console.log(obj)
                return [...POSTS]
            })
        // .catch(() => Promise.reject('Error Occurred !!'))
        // we can use Promise.reject('Error Occurred !!') in case if error occurs
    })

    const newPostMutation = useMutation({
        // 'mutationFn' is a function of 'useMutation' taking input as a 'context'/object and returns a 'Promise'
        mutationFn: async (title) => {
            await wait(1000).then(() =>
                POSTS.push({ id: crypto.randomUUID(), title: title })
            )
        },

        // The following function invalidate the Query/'Post'
        onSuccess: () => queryClient.invalidateQueries(['POSTS'])
    })

    console.log(POSTS)

    if (postsQuery.isLoading)
        return <h1>Loading ...</h1>
    if (postsQuery.isError)
        return <pre>{JSON.stringify(postsQuery.error)}</pre>

    return (
        <div className='container'>
            {postsQuery.data.map(post => <div key={post.id}>{post.title}</div>)}

            <button className='btn btn-outline-primary'
                disabled={newPostMutation.isLoading}
                onClick={() => newPostMutation.mutate('New Post')}>Add New</button>
        </div>
    )

}

const wait = (duration) => {
    // 'Promise' function takes callback/parameter as 'resolve & reject' & returns a object depicting successfull outcome(i.e. outcome of an asynchronous function/operation)
    // 'setTimeout' function basically execute a function(resolve) after specific time period(duration)
    return new Promise((resolve, reject) => setTimeout(resolve, duration))
}

export default React_Query