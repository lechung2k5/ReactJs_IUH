import React from 'react'
import './Todo.css'
const TodoItem = ({task, onDelete}) => {
  return (
    <div className="todo-item">
        <span>{task.text}</span>
        <button onClick={() => onDelete(task.id)}>Xóa</button>
    </div>
  )
}

export default TodoItem