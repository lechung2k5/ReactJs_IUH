import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { authAtom } from '../../recoil/authAtom.jsx';

export default function Login() {
  const setUser = useSetRecoilState(authAtom);
  const [usernameInput, setUsernameInput] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (usernameInput.trim()) {
      const mockToken = 'mock-jwt-token-for-' + usernameInput.trim();
      const userData = { username: usernameInput.trim(), lastLogin: new Date().toISOString() };
      
      // Save to localStorage for persistence
      localStorage.setItem('auth_token', mockToken);
      localStorage.setItem('auth_user', JSON.stringify(userData));
      
      setUser({
        token: mockToken,
        user: userData,
      });
      setUsernameInput('');
    }
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <form onSubmit={handleLogin} style={{ display: 'flex', gap: '8px' }}>
        <input 
          type="text" 
          placeholder="Enter username..." 
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" className="login btn">Login</button>
      </form>
    </div>
  );
}
