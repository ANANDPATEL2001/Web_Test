import React from 'react'
import { useState } from 'react'

const initialFun = () => {
    console.log('Rendering')
    return 0
}
const Hooks_useState = () => {
    // In case of class Component 'count'(useState) value is evaluated & rendered only once as it is rendered inside a constructor but in case of functional component it is evaluated every time 'app' is rendered which could slow down our application

    // const [count, setCount] = useState(initialFun())

    // Below if we use 'useState' hooks as a function instead of above formate it will render only once
    const [count, setCount] = useState(() => {
        console.log("Rendering")
        return 0
    })

    const increment = (count) => {
        return count + 1;
    }
    const decrement = (count) => {
        return count - 1;
    }


    /*
        const incrementCount = () => {
            // Below if we use 'setCount(count + 1)' two time instead of 'setCount(count => count + 1)' , it will overwrite each other and the value of 'count' will change for only one time from it's original value i.e. 0
            setCount(count => count + 1)
        }
        const decrementCount = () => {
            setCount(count => count - 1)
        }
    */

    return (
        <div>
            <button className='m-2 p-2 bg-gray-300 rounded' onClick={(e) => setCount(decrement(count))}>-</button>
            {/* <button onClick={decrementCount()}>-</button> */}
            {count}
            {/* <button onClick={incrementCount()}>+</button> */}
            <button className='m-2 p-2 bg-gray-300 rounded' onClick={(e) => setCount(increment(count))}>+</button>
        </div>
    )
}

export default Hooks_useState