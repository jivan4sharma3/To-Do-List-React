import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos , deleteTodo}) => {
  return (
    <div>
       <ul>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          deleteTodo={deleteTodo} 
        />
      ))}
    </ul>
    </div>
  )
} 

export default TodoList
