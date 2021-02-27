const INITIAL_STATE = {todos: []}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return [...state, {...state.todos}]
    }
}

export default rootReducer