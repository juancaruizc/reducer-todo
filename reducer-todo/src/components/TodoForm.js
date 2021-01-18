import React, {useState} from 'react'
import {addTodo, clearTodo} from '../actions/index'

const TodoForm = (props) => {

    const [textInput, setTextInput] = useState('')
    const {dispatch} = props

    const handleChange = e => {
        setTextInput(e.target.value)
    }

    const handleTask = e => {
        e.preventDefault()
        dispatch(addTodo({item: textInput, completed: false, id: Date.now()}))
    }

    const clearTask = e => {
        e.preventDefault()
        dispatch(clearTodo())
      }

    return (
        <div>
            <form>
                <input type = 'text' name = 'item' value = {textInput} onChange = {handleChange}>
                </input>
                <button onClick = {handleTask}>Add</button>
                <button onClick = {clearTask}>Clear</button>
            </form>
        </div>
    )
}

export default TodoForm
