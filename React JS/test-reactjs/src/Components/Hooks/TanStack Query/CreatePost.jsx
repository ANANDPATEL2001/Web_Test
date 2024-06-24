import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useRef } from 'react'

import { createPost } from './getPosts'
import Post from './Post'

const CreatePost = ({ setCurrentPage }) => {

    const title = useRef()
    const body = useRef()

    const queryClient = useQueryClient()

    const createPostMutation = useMutation({
        // 'context' will be the whatever data returned by the 'onMutate' function
        // 'onMutate' function does not retry so that you don't accidently use 'onMutate' several time
        mutationFn: createPost,
        // retry: 3,
        onSuccess: (data) => {
            // The following will set the Query 'data' instantaneously from the cache memory to show  on the 'component'/page 
            queryClient.setQueryData(["posts", data.id], (oldData) => {
                return oldData
            })
            // Here 'exact' keyword is used to 'invalidate' only those query having 'queryKey' as mentioned in the parameter(i.e. ["posts"])
            // The data fetched won't be showed on the component rather, it will remain in the cached memory & will only be shown when component is re-rendered
            queryClient.invalidateQueries(["posts"], { exact: true })
            setCurrentPage(<Post id={data.id} />)
        },
        // onMutate: variable => {
        //     return { 'Hello': 'World' }
        // }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        createPostMutation.mutate({
            title: title?.current?.value,
            body: body?.current?.value,
        })
    }


    // postsQuery.fetchStatus === 'fetching'
    // postsQuery.status === 'loading'

    if (createPostMutation.status === 'loading')
        return <h1>Loading...</h1>
    if (createPostMutation.status === 'error')
        return <h1>{JSON.stringify(createPostMutation.error)}</h1>

    return (
        <>
            <div className='container-fluid my-1'>
                <h1>New Post  </h1>

                <form onSubmit={handleSubmit} className='form-group'>
                    <label className='float-left' htmlFor="title">Title :</label>
                    <input className='form-control clear-right' type="text" id='title' placeholder='Enter the Title' ref={title} />

                    <label htmlFor="body">Body :</label>
                    <input className='form-control' type="text" id='body' placeholder='Enter the Body' ref={body} />

                    <button className='btn btn-outline-primary my-1' type='submit' disabled={createPostMutation.isLoading} >{createPostMutation.isLoading ? 'Loading...' : 'Create User'}</button>
                </form>
            </div>
        </>
    )
}

export default CreatePost