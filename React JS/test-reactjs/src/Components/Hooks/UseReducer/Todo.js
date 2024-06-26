import React from 'react'

import { ACTIONS } from './hooks.useReducer'

export const Todo = ({ todo, todo_dispatch }) => {
    return (
        <>
            <div className='flex flex-col justify-around gap-3'>
                <div style={{ color: todo.complete ? '#AAA' : '#000' }} >{todo.name}</div>

                <div className='flex flex-col p-2'>
                    <button className='bg-gray-200 m-2 p-2 rounded w-20' onClick={() => todo_dispatch({
                        type: ACTIONS.TOGGLE_TODO,
                        payload: { id: todo.id },
                    })} >Toggle</button>

                    <button className='bg-gray-200 m-2 p-2 rounded w-20' onClick={() => todo_dispatch({
                        type: ACTIONS.DELETE_TODO,
                        payload: { id: todo.id },
                    })}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default Todo