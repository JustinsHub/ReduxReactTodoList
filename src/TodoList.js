import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import TodoListForm from './TodoListForm'
import Todo from './Todo'

const TodoList = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => (state.todos))

    const addToDo = (todo) => {
        dispatch({type: "ADD_TODO", payload: todo})
    }
    return (
    <div>
    <TodoListForm addToDo={addToDo}/>
    <ul>
    {todos.map(t => <li> <Todo todo={t.todo}/></li>)}
    </ul>
    </div>)
}

export default TodoList