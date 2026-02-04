import React from 'react'

const ApiFetch = () => {
    // URL MockAPI danh sách đội bóng ngoại hạng anh
    const URL = "https://69831b8e9c3efeb892a46eaa.mockapi.io/teams/teams";

    // READ: Lấy danh sách hoặc 1 đội bóng cụ thể
    const handleGet = () => {
        fetch(URL + "/1") // Lấy đội đầu tiên trong danh sách
            .then(res => res.json()) // Đợi phản hồi và chuyển sang dạng JSON
            .then(data => console.log("Fetch (GET) - Đọc dữ liệu thành công:", data));
    }

    // CREATE: Thêm mới đội "FC IUH"
    const handlePost = () => {
        const teamMoi = {
            name: "FC IUH",
            leader: "Lê Công Chung", // Minh chứng nội dung tự làm
            area: "TP Hồ Chí Minh",
            established: 2025
        };
        fetch(URL, {
            method: 'POST', // Lệnh gửi dữ liệu lên
            body: JSON.stringify(teamMoi), // Chuyển Object thành chuỗi văn bản
            headers: { 'Content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => console.log("Fetch (POST) - Thêm đội thành công:", data));
    }

    // UPDATE: Sửa thông tin đội số 1
    const handlePut = () => {
        fetch(URL + "/1", {
            method: 'PUT', // Lệnh cập nhật dữ liệu
            body: JSON.stringify({ name: "Arsenal FC (Đã sửa)" }),
            headers: { 'Content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => console.log("Fetch (PUT) - Đã sửa tên thành công:", data));
    }

    // DELETE: Xóa đội số 1
    const handleDelete = () => {
        fetch(URL + "/1", { method: 'DELETE' }) // Lệnh xóa dữ liệu
            .then(() => console.log("Fetch (DELETE) - Đã xóa xong bài số 1!"));
    }

    return (
        <div>
            <h2>Review: Working with API (Fetch)</h2>
            <p>Dữ liệu mẫu: <b>Soccer DB</b></p>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <button onClick={handlePost}>Tạo đội</button>
                <button onClick={handleGet}>Đọc đội</button>
                <button onClick={handlePut}>Sửa tên</button>
                <button onClick={handleDelete}>Xóa đội</button>
            </div>

            <hr />
            {/* Phần giải thích */}
            <div>
                <h3>Giải thích cơ chế hoạt động:</h3>
                <ul>
                    <li><b>fetch():</b> Là hàm tích hợp sẵn của trình duyệt dùng để kết nối với Server (API).</li>
                    <li><b>.then():</b> Vì API cần thời gian phản hồi, <code>.then</code> giúp code đợi khi nào có kết quả mới chạy tiếp, tránh bị treo máy.</li>
                    <li><b>res.json():</b> Dữ liệu Server gửi về là dạng văn bản thô, hàm này giúp chuyển nó về lại dạng Object JavaScript để dùng.</li>
                    <li><b>Method (POST/GET/PUT/DELETE):</b> Giúp Server hiểu mình muốn làm gì (Thêm, Đọc, Sửa hay Xóa).</li>
                </ul>
                <p><i>* Thầy vui lòng xem kết quả chi tiết trong <b>Console (F12)</b> ạ.</i></p>
            </div>
        </div>
    )
}

export default ApiFetch;