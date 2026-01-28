import React, { useCallback, useState } from 'react'
import TodoInput from '../../components/Todo/TodoInput';
import TodoItem from '../../components/Todo/TodoItem';

const Bai4 = () => {
    const [todos, setTodos] = useState ([
        {id:1, text: "Học React tại IUH", completed: false},
        { id: 2, text: "Làm bài tập useMemo", completed: true }
    ]);
    const handleAdd = useCallback((text) => {
        setTodos(prev => [...prev, {id: Date.now(), text, completed: false}]);
    }, []);
    const handleToggle = useCallback((id) => {
        setTodos(prev => prev.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    }, []);
    const handleDelete = useCallback((id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    }, []);
  return (
      <div className="bai4-container">
          <h1>Bài 4: Todo List Performance</h1>
          <TodoInput onAdd={handleAdd} />

          <div className="todo-list">
              {todos.map(todo => (
                  <TodoItem
                      key={todo.id}
                      todo={todo}
                      onToggle={handleToggle}
                      onDelete={handleDelete}
                  />
              ))}
          </div>
      </div>
  )
}

export default Bai4