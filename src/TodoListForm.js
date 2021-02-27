import React, {useState} from 'react'

const TodoListForm = () => {
    const [formData, setFormData] = useState("")

    const handleChange = (e) => {
        setFormData(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    }
    return (
        <div>
            <form>
                <label htmlFor="todo">List To Do List:</label>
                <input
                id="todo"
                name="todo"
                onChange={handleChange}
                value={formData}
                />
            </form>
        </div>
    )
}

export default TodoListForm