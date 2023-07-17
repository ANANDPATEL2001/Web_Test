import React, { useEffect, useRef, useState } from 'react'

const Hooks_useRef = () => {
    const [name, setName] = useState('')
    // const [count, setCount] = useState(0)

    // The value of 'useRef' is alwayse constant between two rendered Components
    // Also it return a single Object only having attr 'current'
    const count = useRef(0)
    const inputRef = useRef('')

    const input_focus = () => {
        inputRef.current.focus();
    }

    useEffect(() => {
        inputRef.current = name;

    }, [name])


    useEffect(() => {
        // The following statement will lead to the infinite loop while rendering the component again & again
        // setCount((count) => count + 1);

        console.log("rendered")
        count.current = count.current + 1;
    })


    return (
        <>

            <div className=''></div>
            <input type="text"
                ref={inputRef}
                name='name'
                onChange={e => setName(e.target.value)} />

            <div>My name is {name}</div>
            <div>My previous name is {inputRef.current}</div>
            <div>Component is rendered {count.current} times</div>
            <button onClick={input_focus}>Focus</button>
        </>
    )
}

export default Hooks_useRef