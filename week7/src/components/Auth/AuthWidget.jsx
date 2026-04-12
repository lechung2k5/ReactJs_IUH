import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { authAtom } from '../../recoil/authAtom.jsx';

export default function AuthWidget() {
  const [user, setUser] = useRecoilState(authAtom);
  const [usernameInput, setUsernameInput] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (usernameInput.trim()) {
      setUser({ username: usernameInput.trim() });
      setUsernameInput('');
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="card auth-widget">
      <h3>Authentication</h3>
      
      {user ? (
        <div className="user-profile">
          <div className="avatar">
            {user.username.charAt(0).toUpperCase()}
          </div>
          <p>Welcome back, <span className="highlight username">{user.username}</span>!</p>
          <button className="btn logout" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form className="login-form" onSubmit={handleLogin}>
          <p>Please login to continue</p>
          <input 
            type="text" 
            placeholder="Enter username..." 
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="btn login">Login</button>
        </form>
      )}
    </div>
  );
}
