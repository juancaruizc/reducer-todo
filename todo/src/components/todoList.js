import React from 'react'
import Todo from '../components/todo'

const TodoList = (props) => {
    const {state,dispatch} = props
    return (
        <div>
            {
                state.map((todo) => (
                    <Todo dispatch = {dispatch} todo = {todo} key = {todo.id}/>
                ))
            }
        </div>
    )
}

export default TodoList
