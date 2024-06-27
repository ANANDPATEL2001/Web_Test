import { useState } from 'react'
// 'Throttling' is used to call a function after every millisecond or a particular interval of time only the first click is executed immediately.

const Throttling = () => {
    const [fetchCount, setFetchCount] = useState(0)

    const throttle = (func, delay = 1000) => {
        let last_exec = 0
        return (...args) => {
            let current_exec = new Date().getTime();
            if ((current_exec - last_exec) < delay)
                return;
            last_exec = current_exec
            return func?.apply(this, args)
        }
    }

    const fetchData = (param) => {
        // console.log(fetchCount)
        fetch(`https://jsonplaceholder.typicode.com/photos/${param}`)
            .then(res => res?.json())
            .then(data => {
                console.log("Data", data, param)
            })
            .catch(err => console.log(new Error("This is Error :", err)))
    }

    const getThrottledData = throttle(fetchData(fetchCount), 1000)

    // 'document.getElementById('fetchBtn')' might return null because it executes before the DOM fully loads.
    window.onload = () => {
        const btn = document.getElementById('fetchBtn')
        btn.addEventListener("click", () => {
            console.log("btn clicked !!");
            setFetchCount(prev => prev + 1)
            getThrottledData();
        })
    }
    return (
        <>
            <button
                id='fetchBtn'
                className='bg-gray-200 rounded flex items-center m-2 p-2'
            >Click to Fetch</button>
            <span className='bg-blue-200 rounded p-2 m-2'>Data fetched {fetchCount} times</span>
        </>
    )
}

export default Throttling