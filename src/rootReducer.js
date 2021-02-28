const INITIAL_STATE = {todos: []}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return {...state, todos:[...state.todos, {...action.payload}]}
        default:
            return INITIAL_STATE
    }
}

export default rootReducer