import React, { useEffect, useState } from 'react'
// 'Debouncing' is a technique where you delay the execution of a function until after a certain amount of time has passed. This is useful if you have a frequently used function—say, a scroll or resize event listener—and don't want to trigger it too frequently because that might slow down the browser.

const Debouncing = () => {
    const [data, setData] = useState([])
    const [fetchCount, setFetchCount] = useState(0)

    const debounce = (func, timeout = 1000) => {
        let timer;
        return (...args) => {
            if (timer)
                clearTimeout(timer)
            timer = setTimeout(() => {
                func.apply(this, { ...args })
            }, timeout)
        }
    }

    const fetchData = () => {
        setFetchCount(prev => prev + 1)
        fetch("https://reqres.in/api/products")
            .then(res => res.json())
            .then(data => {
                setData(data?.data)
            })
            .catch(err => console.log(new Error("This is Error :", err)))
    }

    const getDebouncedData = debounce(fetchData, 1000)

    // 'document.getElementById('fetchBtn')' might return null because it executes before the DOM fully loads.
    window.onload = () => {
        const btn = document.getElementById('fetchBtn')
        btn.addEventListener("click", () => {
            console.log("btn clicked !!");
            getDebouncedData();
        })
    }
    return (
        <>
            <button
                id='fetchBtn'
                className='bg-gray-200 rounded flex items-center m-2 p-2'
            >Click to Fetch</button>

            <div className='flex flex-col items-start gap-2 m-2'>
                {Object.values(data || []).map((item, index) => (
                    <div className='flex gap-2'>
                        <div>{item?.pantone_value}</div>
                        <div>{item?.name}</div>
                        <div>{item?.year}</div>
                    </div>
                ))}
            </div>
            <span className='bg-blue-200 rounded p-2 m-2'>Data fetched {fetchCount} times</span>
        </>
    )
}

export default Debouncing