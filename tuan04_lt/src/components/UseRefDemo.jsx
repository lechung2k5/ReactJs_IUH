import React, { useRef } from 'react'

const UseRefDemo = () => {
    // 1. Tạo cái móc gắn vào thẻ input
    const oNhap = useRef();

    const hanhDong = () => {
        // 2. Chọc thẳng vào DOM để focus và đổi màu
        oNhap.current.focus();
        oNhap.current.style.background = "cyan";
        console.log("Log: Đã dùng useRef để điều khiển thẻ input");
    }

    return (
        <div>
            <h2>Bài tập useRef - Điều khiển DOM</h2>
            <input ref={oNhap} placeholder="Click nút để focus..." />
            <button onClick={hanhDong}>Focus & Đổi màu</button>
            <hr />
            <div>
                <h3>Giải thích:</h3>
                <ul>
                    <li><b>useRef</b> dùng để "cầm" lấy một thẻ HTML nào đó.</li>
                    <li>Nó giúp mình làm những việc mà React không làm sẵn được như: focus, cuộn trang, hoặc dùng thư viện ngoài.</li>
                </ul>
            </div>
        </div>
    )
}
export default UseRefDemo