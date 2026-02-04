import React from 'react'
import axios from 'axios' 

const ApiAxios = () => {
    // URL MockAPI của Lê Công Chung
    const URL = "https://69831b8e9c3efeb892a46eaa.mockapi.io/teams/teams";

    // READ: Lấy thông tin đội bóng số 3 (Ví dụ: Chelsea FC)
    const handleGet = () => {
        axios.get(`${URL}/3`)
            .then(res => {
                // Axios tự chuyển dữ liệu về JSON, lấy thẳng ở res.data
                console.log("Axios (GET) - Đọc dữ liệu thành công:", res.data);
            })
            .catch(err => console.log("Lỗi Axios:", err));
    }

    // CREATE: Thêm mới đội "Manchester United FC"
    const handlePost = () => {
        const teamMoi = {
            name: "Manchester United FC",
            country: "England",
            logo: "https://crests.football-data.org/66.png",
            leader: "Lê Công Chung"
        };
        axios.post(URL, teamMoi)
            .then(res => {
                console.log("Axios (POST) - Tạo đội MU thành công:", res.data);
            });
    }

    // UPDATE: Sửa thông tin đội số 3 (Ví dụ: Newcastle United FC)
    const handlePut = () => {
        axios.put(`${URL}/3`, { name: "Newcastle United FC (Updated)" })
            .then(res => {
                console.log("Axios (PUT) - Đã sửa tên đội bóng:", res.data);
            });
    }

    // DELETE: Xóa đội số 3
    const handleDelete = () => {
        axios.delete(`${URL}/3`)
            .then(() => {
                console.log("Axios (DELETE) - Đã xóa đội bóng số 3 thành công!");
            });
    }

    return (
        <div>
            <h2> API AXIOS</h2>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <button onClick={handlePost}>Tạo (Post)</button>
                <button onClick={handleGet}>Đọc (Get)</button>
                <button onClick={handlePut}>Sửa (Put)</button>
                <button onClick={handleDelete}>Xóa (Delete)</button>
            </div>

            <hr />
            {/* Giải thích*/}
            <div>
                <h3>Tại sao nên dùng Axios?</h3>
                <ul>
                    <li><b>Tự động hóa:</b> Axios tự động chuyển đổi dữ liệu sang JSON, mình không cần dùng <code>.json()</code> như fetch.</li>
                    <li><b>Cú pháp ngắn gọn:</b> Các hàm <code>.get()</code>, <code>.post()</code>, <code>.put()</code>, <code>.delete()</code> rất trực quan.</li>
                    <li><b>Hỗ trợ rộng:</b> Dễ dàng cấu hình các thông số như Timeout, Interceptors (cho các bài học nâng cao sau này).</li>
                    <li><b>Bảo mật:</b> Có sẵn cơ chế chống tấn công CSRF cơ bản.</li>
                </ul>
                <p><i>* Kết quả minh chứng hiện thị tại <b>Console (F12)</b>.</i></p>
            </div>
        </div>
    )
}

export default ApiAxios;