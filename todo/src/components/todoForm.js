import React, {useState} from 'react'
import {setAddTodo, setClearTask} from '../actions/index'

const TodoForm = (props) => {

    const [textInput, setTextInput] = useState('')
    const {dispatch} = props

    const handleChange = (e) => {
        e.preventDefault()
        setTextInput(e.target.value)
    }

    const handleTask = (e) => {
        e.preventDefault()
        dispatch(setAddTodo({item: textInput, completed: false, id:Date.now()}))
    }

    const clearTask = (e) => {
        e.preventDefault()
        dispatch(setClearTask())
    }

    return (
        <div>
            <form>
                <input
                value = {textInput}
                onChange = {handleChange}
                type = 'text'
                name = 'item'
                />
            </form>
            <button onClick = {handleTask}>Add</button>
            <button onClick = {clearTask}>Clear</button>
        </div>
    )
}

export default TodoForm
