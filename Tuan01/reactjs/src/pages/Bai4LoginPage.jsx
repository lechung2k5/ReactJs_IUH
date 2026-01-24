import React from 'react'
import LoginForm from '../components/LoginForm'
const Bai4LoginPage = ()=>{
  return ( 
    <div className="page-content" style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '60vh' 
    }}>
       <LoginForm />
    </div>
  );
}

export default Bai4LoginPage