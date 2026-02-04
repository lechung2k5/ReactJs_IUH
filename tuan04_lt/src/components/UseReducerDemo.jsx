import React, { useReducer } from 'react'

const denReducer = (state, action) => {
    // Xử lý chuyển màu dựa trên lệnh 'action'
    switch (action) {
        case 'XANH': return 'green';
        case 'VANG': return 'yellow';
        case 'DO': return 'red';
        default: return state;
    }
}

const UseReducerDemo = () => {
    const [mau, dispatch] = useReducer(denReducer, 'gray');

    return (
        <div>
            <h2>Bài tập useReducer - Đèn giao thông</h2>
            <div style={{ width: 50, height: 50, background: mau, borderRadius: '50%', border: '1px solid black' }}></div>

            <button onClick={() => dispatch('XANH')}>Bật Xanh</button>
            <button onClick={() => dispatch('VANG')}>Bật Vàng</button>
            <button onClick={() => dispatch('DO')}>Bật Đỏ</button>

            <hr />
            <div>
                <h3>Giải thích:</h3>
                <ul>
                    <li><b>Reducer</b> giữ hết logic đổi màu vào một chỗ.</li>
                    <li><b>Dispatch</b> gửi lệnh (Xanh/Vàng/Đỏ) để yêu cầu thay đổi.</li>
                </ul>
            </div>
        </div>
    )
}
export default UseReducerDemo