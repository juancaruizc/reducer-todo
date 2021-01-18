import React from 'react'
import {toggleCompleted} from '../actions/index'

const Todo = (props) => {

    const {dispatch, todo} = props

    const handleToggle = e => {
        e.preventDefault()
        dispatch(toggleCompleted(todo.id))
    }
    return (
        <div>
            <p onClick = {handleToggle} 
                style = {{textDecoration: `${todo.completed ? 'line-through' : 'none'}`}}>
                    {todo.item}
            </p>
        </div>
    )
}

export default Todo
