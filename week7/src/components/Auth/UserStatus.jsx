import React from 'react';
import { useRecoilValue } from 'recoil';
import { authAtom } from '../../recoil/authAtom.jsx';

export default function UserStatus() {
  const auth = useRecoilValue(authAtom);

  if (!auth) {
    return <p>You are not logged in.</p>;
  }

  return (
    <div>
      <p>Current User Logged In: <strong>{auth?.user?.username}</strong></p>
      {auth?.token && <p style={{ fontSize: '0.8rem', color: '#666' }}>Token: {auth.token.substring(0, 15)}...</p>}
    </div>
  );
}
