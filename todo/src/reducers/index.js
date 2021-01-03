import {SET_ADD_TODO, SET_TOGGLE_TASK, SET_CLEAR_TASK} from '../actions/index'

export const initialState = [
    {
        item:'',
        completed: false,
        id: Date.now()
    }
]

const reducer = (state, action) => {
    switch(action.type) {
        case SET_ADD_TODO:
            return [...state, action.payload ];

        case SET_TOGGLE_TASK:
        return state.map((todo) => (
            todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
        ))

        case SET_CLEAR_TASK:
            const clearItems = state.filter((item) =>  !item.completed)
        return clearItems;

            default:
                return state;
    }
}

export default reducer;