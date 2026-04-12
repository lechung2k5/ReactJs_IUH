import React from 'react';
import { useResetRecoilState } from 'recoil';
import { authAtom } from '../../recoil/authAtom.jsx';

export default function Logout() {
  const resetUser = useResetRecoilState(authAtom);

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    resetUser();
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <button onClick={handleLogout} className="logout btn" style={{ backgroundColor: '#ef4444', color: 'white' }}>
        Logout
      </button>
    </div>
  );
}
