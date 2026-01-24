import './LoginForm.css'
import Button from './Button'
import { useState } from 'react'
const LoginForm = ()=>{
    const [show, setShow] = useState(true);
    if(!show) return <Button onClick={() => setShow(true)}>Hiện lại form</Button>
    return (
        <div className="login-container fade-in">
            <form action="" className="login-form">
                <button className="close-btn" onClick={()=> setShow(false)}>x</button>
                <h2>Đăng nhập</h2>
                <div className="input-group">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='Nhập tên đăng nhập...' />
                </div>
                <div className="input-group">
                    <label htmlFor="">Password</label>
                    <input type="text" placeholder='Nhập mật khẩu...' />
                </div>
                <div className="form-actions">
                    <Button type='primary'>Login</Button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm