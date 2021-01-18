import {ADD_TODO, TOGGLE_COMPLETED, CLEAR_TODO} from '../actions/index'

export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: Date.now()
}]

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_TODO):
            return [...state, action.payload]

        case(TOGGLE_COMPLETED):
            return state.map((state) => (
                state.id === action.payload ? {...state, completed: !state.completed} : state
            ))

        case(CLEAR_TODO):
            return state.filter((item) => !item.completed)

        default:
            return(state);
    }
}

export default reducer;