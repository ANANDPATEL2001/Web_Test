import React, { useMemo, useState } from 'react'
// 'useMemo' is the accronym for memorization which memorize the value and stores it in the cache memory
// 'useMemo' only computes/performs the function inside it when the value it refers to actually gets changed, not every time the component gets rendered
// The 'useMemo' Hook only runs when one of its dependencies update

const Hooks_useMemo = () => {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)

    const themeStyle = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black',
        }
    }, [dark])

    const change = (num) => {
        console.log('Calling change function')
        setNumber(parseInt(num))
    }


    // Here, 'useMemo' will cause 'slowFunction' to execute only when the 'number' get's changed every time the component get's rendered(i.e. even if 'themeStyle' get's changed)
    const doubleNumber = useMemo(() => {
        slowFunction(number)
    }, [number])

    return (
        <>
            <input className='form-control my-2' type="number" value={number} onChange={(e) => change(e.target.value)} />

            <button className='btn btn-outline-secondary' onClick={() => setDark(prevDark => !prevDark)} >Toggle</button>

            <div className="container my-2" style={themeStyle}>{doubleNumber}</div>
        </>
    )
}

const slowFunction = (num) => {
    console.log('Calling slow function')
    for (let i = 0; i < 1000000000000; i++) { }
    return num * 2
}

export default Hooks_useMemo