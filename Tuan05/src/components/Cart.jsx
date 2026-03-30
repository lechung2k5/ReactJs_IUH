import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const navigate = useNavigate();
    
    return (
        <div>
            <h2>Giỏ hàng (Cart)</h2>
            <p>Thông tin sản phẩm đang trong giỏ hàng...</p>
            <button onClick={() => navigate('/checkout')}>Tiến hành thanh toán</button>
        </div>
    );
}

export default Cart;
