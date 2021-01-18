export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
export const CLEAR_TODO = 'CLEAR_TODO'

export const addTodo = (addTask) => {
    return ({type: ADD_TODO, payload: addTask })
}
export const toggleCompleted = (taskId) => {
    return ({type: TOGGLE_COMPLETED, payload: taskId})
}

export const clearTodo = () => {
    return ({type: CLEAR_TODO})
}

