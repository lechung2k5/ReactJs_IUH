import React from 'react'

const TodoItem = React.memo(({todo, onDelete, onToggle}) => {
  console.log("render item: ", todo.id);
  return(
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => onToggle(todo.id)}>
        {todo.completed ? '✅ ' : '⬜ '} {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Xóa</button>
    </div>
  )
})
 

export default TodoItem