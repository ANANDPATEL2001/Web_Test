import React, { useCallback, useState } from 'react'
import List from './List'
// 'useCallback' only computes/performs the function inside it when the functon/dependencies inside it actually gets changed, not every time the component gets rendered
// 'useCallback' is used to to handle 'Referential Equality' problem (i.e. when function/object get's re-created each time when component get's re-rendered)
// 'useCallback' returns the function rather than a value unlike 'useMemo'

const Hooks_useCallback = () => {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)

    // Following 'getItems' function get's re-created having different Reference each time when component re-renders
    const getItems = useCallback((increment) => {
        return [number + increment, number + 1 + increment, number + 2 + increment]
    }, [number])

    const themeStyle = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black',
    }

    // Here, 'useCallback' will cause 'slowFunction' to execute only when the 'number' get's changed every time the component get's rendered(i.e. even if 'themeStyle' get's changed)
    return (
        <>
            <div
                className='container-fluid my-1 py-1'
                style={themeStyle}>
                <input
                    className='form-control my-2'
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(parseInt(e.target.value))} />

                <button
                    className='btn btn-outline-secondary'
                    onClick={() => setDark(prevDark => !prevDark)} >Toggle Theme</button>

                <List getItems={getItems} />
            </div>
        </>
    )
}

export default Hooks_useCallback