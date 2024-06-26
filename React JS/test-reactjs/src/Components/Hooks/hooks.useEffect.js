import React, { useEffect, useState } from 'react'

const Hooks_useEffect = () => {

    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleWidth = () => {
        setWindowWidth(window.innerWidth)
    }

    /**
     * Case 01
     *      if second parameter of 'useEffect' is not passed it will render each time the app renders
     *  Case 02
     *      if second parameter of 'useEffect' is passed as an empty array it will not render unless empty array is changed
     *  Case 03
     *      if second parameter of 'useEffect' is passed as an array with something inside, it will render only when value inside the array is changed
     */
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType])

    useEffect(() => {
        window.addEventListener('resize', handleWidth)

        return () => {
            window.removeEventListener('resize', handleWidth)
        }
    }, [])


    return (
        <>
            {windowWidth}
            <div className='flex justify-between gap-3'>
                <button className='m-2 p-2 bg-blue-400 rounded' onClick={() => setResourceType('posts')}>posts</button>
                <button className='m-2 p-2 bg-blue-400 rounded' onClick={() => setResourceType('users')}>users</button>
                <button className='m-2 p-2 bg-blue-400 rounded' onClick={() => setResourceType('comments')}>comments</button>
                <button className='m-2 p-2 bg-blue-400 rounded' onClick={() => setResourceType('photos')}>photos</button>
            </div>
            {resourceType}
            {items.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </>
    )
}

export default Hooks_useEffect