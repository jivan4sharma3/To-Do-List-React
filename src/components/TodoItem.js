import React from 'react'

const TodoItem = ({ todo, deleteTodo }) => {
    return (
        <div>
            <li>
                {todo.text}
                <button onClick={() => deleteTodo(todo.id)}>❌</button>
            </li>
        </div>
    )
}

export default TodoItem
