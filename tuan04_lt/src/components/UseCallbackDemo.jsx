import React, { useState, useCallback } from 'react'

const UseCallbackDemo = () => {
    const [text, setText] = useState("");

    // Ghi nhớ hàm này để nó không bị "khởi tạo lại" vô ích
    const hienThongBao = useCallback(() => {
        alert("Bạn vừa nhập: " + text);
    }, [text]);

    return (
        <div>
            <h2>Bài tập useCallback - Hàm Alert</h2>
            <input onChange={(e) => setText(e.target.value)} />
            <button onClick={hienThongBao}>Hiện Alert</button>
            <hr />
            <div>
                <h3>Giải thích:</h3>
                <ul>
                    <li><b>useCallback</b> dùng để "cất" cái hàm vào bộ nhớ.</li>
                    <li>Nó giúp hiệu năng tốt hơn vì không phải tạo đi tạo lại cái hàm mỗi lần gõ chữ.</li>
                </ul>
            </div>
        </div>
    )
}
export default UseCallbackDemo