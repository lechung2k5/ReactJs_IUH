import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoAtom } from '../../recoil/todoAtom.jsx';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todos = useRecoilValue(todoAtom);

  return (
    <div>
      <TodoInput />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.length === 0 ? (
          <p style={{ color: 'gray', fontStyle: 'italic' }}>No tickets found!</p>
        ) : (
          todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        )}
      </ul>
    </div>
  );
}
