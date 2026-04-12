import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoAtom } from '../../recoil/todoAtom.jsx';

export default function TodoItem({ todo }) {
  const setTodos = useSetRecoilState(todoAtom);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const toggleComplete = () => {
    setTodos(oldTodos => oldTodos.map(item => 
      item.id === todo.id ? { ...item, completed: !item.completed } : item
    ));
  };

  const removeTodo = () => {
    setTodos(oldTodos => oldTodos.filter(item => item.id !== todo.id));
  };

  const saveEdit = () => {
    if (!editText.trim()) return;
    setTodos(oldTodos => oldTodos.map(item => 
      item.id === todo.id ? { ...item, text: editText } : item
    ));
    setIsEditing(false);
  };

  return (
    <li style={{ 
      display: 'flex', alignItems: 'center', gap: '8px', 
      padding: '8px', borderBottom: '1px solid var(--card-border)' 
    }}>
      <input 
        type="checkbox" 
        checked={todo.completed}
        onChange={toggleComplete}
      />
      
      {isEditing ? (
        <input 
          autoFocus
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={saveEdit}
          onKeyDown={(e) => e.key === 'Enter' && saveEdit()}
          style={{ flex: 1, padding: '4px' }}
        />
      ) : (
        <span 
          style={{ 
            flex: 1, 
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? 'gray' : 'inherit',
            cursor: 'text'
          }}
          onDoubleClick={() => setIsEditing(true)}
          title="Double click to edit"
        >
          {todo.text}
        </span>
      )}

      {isEditing ? (
        <button className="btn" onClick={saveEdit} style={{ padding: '4px 8px', fontSize: '0.8em' }}>Save</button>
      ) : (
        <button className="btn" onClick={removeTodo} style={{ backgroundColor: '#ef4444', color: 'white', padding: '4px 8px', fontSize: '0.8em' }}>
          Delete
        </button>
      )}
    </li>
  );
}
