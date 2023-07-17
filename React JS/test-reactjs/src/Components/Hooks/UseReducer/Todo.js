import React from 'react'

import { ACTIONS } from './hooks.useReducer'

export const Todo = ({ todo, todo_dispatch }) => {
    return (
        <>
            <div className='container'>
                <span style={{ color: todo.complete ? '#AAA' : '#000' }} >{todo.name}</span>

                <button className='btn btn-outline-secondary' onClick={() => todo_dispatch({
                    type: ACTIONS.TOGGLE_TODO,
                    payload: { id: todo.id },
                })} >Toggle</button>

                <button className='btn btn-outline-primary' onClick={() => todo_dispatch({
                    type: ACTIONS.DELETE_TODO,
                    payload: { id: todo.id },
                })}>Delete</button>
            </div>
        </>
    )
}

export default Todo