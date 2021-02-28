import React, {useState} from 'react'

const TodoListForm = ({addToDo}) => {
    const INITIAL_STATE = {
        todo: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(formData => ({...formData, [name]:value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addToDo({...formData})
        setFormData(INITIAL_STATE)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">List To Do List:</label>
                <div>
                <input
                id="todo"
                name="todo"
                onChange={handleChange}
                value={formData.todo}
                />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default TodoListForm