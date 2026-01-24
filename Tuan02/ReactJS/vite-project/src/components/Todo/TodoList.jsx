import React from 'react'
import TodoItem from './TodoItem'
import './Todo.css'
const TodoList = ({todos, onDelete}) => {
  return (
    <div className="todo-list">
        {todos.length == 0 ? <p>Hôm nay rảnh quá, không có việc gì làm</p>: null}
        {todos.map((item) => (
            <TodoItem
            key={item.id}
            task={item}
            onDelete={onDelete}
            />
        ))}
    </div>
  )
}

export default TodoList