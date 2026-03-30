import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        // Sau khi đăng nhập xong, chuyển đến profile
        navigate('/profile');
    };

    return (
        <div>
            <h2>Trang Đăng Nhập</h2>
            <p>Vui lòng đăng nhập để tiếp tục.</p>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
