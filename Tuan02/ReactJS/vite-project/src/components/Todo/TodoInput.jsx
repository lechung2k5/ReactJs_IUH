import React, { useState } from 'react'
import './Todo.css'
const TodoInput = ({onAdd}) => {
    const [text, setText] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(text.trim()){
            onAdd(text);
            setText('');
        }
    };
  return (
    <form className="todo-input" onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}
        placeholder='Việc cần làm tiếp theo...'/>
        <button type='submit'>Thêm</button>
    </form>
  )
}

export default TodoInput