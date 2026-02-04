import React from 'react'

const ApiAsync = () => {
    // Link MockAPI chính chủ của Lê Công Chung
    const URL = "https://69831b8e9c3efeb892a46eaa.mockapi.io/teams/teams";

    // 1. READ (GET): Lấy danh sách đội bóng
    const handleGet = async () => {
        const res = await fetch(URL);
        const data = await res.json();
        console.log("Danh sách đội bóng:", data);
    }

    // 2. CREATE (POST): Thêm đội bóng mới từ dữ liệu mẫu của ông
    const handlePost = async () => {
        // Lấy mẫu đội FC IUH trong file JSON của ông
        const teamMoi = {
            name: "FC IUH",
            leader: "CHUNG LE CONG",
            area: "TP Hồ Chí Minh",
            slogan: "Chơi ngu là chính",
            kitColor: "#1890ff"
        };

        try {
            const res = await fetch(URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(teamMoi)
            });
            const data = await res.json();
            console.log("Đã thêm thành công đội bóng:", data);
        } catch (error) {
            console.error("Lỗi tạo mới:", error);
        }
    }

    // 3. UPDATE (PUT): Sửa thông tin đội bóng (Giả sử sửa ID số 5)
    const handlePut = async () => {
        try {
            const res = await fetch(`${URL}/5`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: "Arsenal FC (Đã cập nhật)" })
            });
            const data = await res.json();
            console.log("Đã sửa thành công đội số 5:", data);
        } catch (error) {
            console.error("Lỗi khi sửa:", error);
        }
    }

    // 4. DELETE (DELETE): Xóa đội bóng (Giả sử xóa ID số 4)
    const handleDelete = async () => {
        try {
            await fetch(`${URL}/4`, { method: 'DELETE' });
            console.log("Đã xóa thành công đội bóng số 4!");
        } catch (error) {
            console.error("Lỗi khi xóa:", error);
        }
    }

    return (
        <div>
            <h2>Review: Working with API (Async/Await)</h2>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <button onClick={handlePost}>1. Thêm đội (Post)</button>
                <button onClick={handleGet}>2. Lấy DS (Get)</button>
                <button onClick={handlePut}>3. Sửa đội 5 (Put)</button>
                <button onClick={handleDelete}>4. Xóa đội 4 (Delete)</button>
            </div>

            <hr />
            <div>
                <h3>Giải thích:</h3>
                <ul>
                    <li><b>Lưu ý:</b> Phải bấm nút <b>Thêm đội</b> trước thì server mới có dữ liệu để <b>Lấy</b> và <b>Sửa</b>.</li>
                    <li><b>Async/Await:</b> Giúp code xử lý API nhìn giống như code chạy bình thường, không bị rối mắt.</li>
                    <li><b>Try...Catch:</b> Dùng để phòng trường hợp server chết hoặc sai link thì web không bị đứng.</li>
                </ul>
                <p><i>* Mời thầy mở Console (F12) để xem kết quả trả về từ MockAPI.</i></p>
            </div>
        </div>
    )
}

export default ApiAsync;