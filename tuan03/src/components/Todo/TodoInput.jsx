import React, { useState } from 'react'

const TodoInput = React.memo(({onAdd}) => {
    const  [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim()){
            onAdd(text);
            setText(";")
        }
    }
  return ( 
    <div className="todo-input">
        <form onSubmit={handleSubmit} action="" className="todo-form">
            <input type="text" name="" id="" onChange={(e) => setText(e.target.value)}
            placeholder='Thêm việc cần làm...'/>
            <button type="submit">Thêm</button>
        </form>
    </div>
  )
})

export default TodoInput