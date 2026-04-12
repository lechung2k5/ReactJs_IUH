import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoAtom } from '../../recoil/todoAtom.jsx';

export default function TodoInput() {
  const [text, setText] = useState('');
  const setTodos = useSetRecoilState(todoAtom);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setTodos(oldTodos => [
      ...oldTodos, 
      { id: Date.now(), text: text.trim(), completed: false }
    ]);
    setText('');
  };

  return (
    <form onSubmit={handleAdd} style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
      <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid var(--card-border)' }}
      />
      <button type="submit" className="btn" style={{ backgroundColor: '#10b981', color: 'white' }}>
        Add
      </button>
    </form>
  );
}
