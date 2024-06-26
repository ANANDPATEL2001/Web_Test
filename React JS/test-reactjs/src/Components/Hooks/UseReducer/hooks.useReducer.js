import React, { useReducer, useState } from 'react'
import Todo from './Todo';

export const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'togggle-todo',
    DELETE_TODO: 'delete-todo',
}

const reducer = (state, action) => {
    console.log("Rendered")
    // Instead of providing hard coded string (i.e. 'increment')below, we can define it like above
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 };
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 };
        default:
            return state.count;
    }
}

const todo_reducer = (todos, action) => {
    console.log("Todo Rendered")
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, new_todo(action.payload.name)]
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo
            })
        default:
            return todos
    }
}

const new_todo = (name) => {
    return {
        id: Date.now(),
        name: name,
        complete: false,
    }
}

export const Hooks_useReducer = () => {
    // 'Dispatch' is the function working on the state to modify it
    // 'Reducer' is a function which contains your custom state logic
    // Here 'state' is the initialState may be any complex value or it's combination
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    const [todo, todo_dispatch] = useReducer(todo_reducer, [])
    const [name, setName] = useState('')

    const increment = () => {
        dispatch({ type: ACTIONS.INCREMENT })
    }

    const decrement = () => {
        dispatch({ type: ACTIONS.DECREMENT })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        todo_dispatch({
            type: ACTIONS.ADD_TODO,
            payload: {
                name: name,
            }
        })
        setName('')
        console.log(todo)
    }

    return (
        <>
            <button className='bg-gray-200 m-2 p-2' onClick={() => decrement()}>-</button>
            {state.count}
            <button className='bg-gray-200 m-2 p-2' onClick={() => increment()}>+</button>

            <form onSubmit={handleSubmit}>
                <input
                    className='bg-gray-200 p-2 m-2'
                    type="text"
                    value={name}
                    placeholder='Enter Name here..'
                    onChange={(e) => setName(e.target.value)} />
            </form>
            {todo.map(todo => {
                return <Todo
                    key={todo.id}
                    todo={todo}
                    todo_dispatch={todo_dispatch} />
            })}
        </>
    )
}

export default Hooks_useReducer