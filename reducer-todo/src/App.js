import React, {useReducer} from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import reducer, {initialState} from './reducers/index'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <h1>Another Todo App 🥲</h1>
      <TodoForm state = {state} dispatch = {dispatch}/>
      <TodoList state = {state} dispatch = {dispatch} />
    </div>
  );
}

export default App;
