import React, { useState } from 'react'
import TodoInput from '../../components/Todo/TodoInput';
import TodoList from '../../components/Todo/TodoList';
import './Bai5.css'
const Bai5 = () => {
    const [todos, setTodos] = useState([
        {id: 1, text: 'Học React Cơ bản'},
        { id: 2, text: 'Làm bài tập Todo list' }
    ]);
    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text: text
        };
        setTodos([...todos, newTodo]);
    };
    const deleteTodo = (id) => {
        const updateTodos = todos.filter(todo => todo.id !== id);
        setTodos(updateTodos);
    };
  return (
    <div className="bai5-container">
        <div className="todos-card">
            <h3>BÀI TẬP 05: TODO LIST</h3>
            <TodoInput onAdd={addTodo}/>
            <TodoList todos={todos} onDelete = {deleteTodo}/>

        </div>
    </div>
  )
}

export default Bai5