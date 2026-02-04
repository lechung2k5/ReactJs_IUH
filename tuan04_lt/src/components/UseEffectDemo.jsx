import React, { useState, useEffect } from 'react'

const UseEffectDemo = () => {
    const [ten, setTen] = useState("");

    // Mỗi khi cái 'ten' thay đổi, nó sẽ cập nhật lên tiêu đề tab
    useEffect(() => {
        document.title = ten || "Đang nhập...";
        console.log("Log: Đã đổi tiêu đề trang web thành:", ten);
    }, [ten]);

    return (
        <div>
            <h2>Bài tập useEffect - Đổi Title Web</h2>
            <input onChange={(e) => setTen(e.target.value)} placeholder="Nhập tên của bạn..." />
            <p>Nhìn lên tiêu đề của Tab trình duyệt để thấy thay đổi!</p>
            <hr />
            <div>
                <h3>Giải thích:</h3>
                <ul>
                    <li>Dùng để xử lý các việc nằm ngoài React (như đổi title, gọi API).</li>
                    <li>Nó sẽ chạy sau khi giao diện đã hiện ra.</li>
                </ul>
            </div>
        </div>
    )
}
export default UseEffectDemo