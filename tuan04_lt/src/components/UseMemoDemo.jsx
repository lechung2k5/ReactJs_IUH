import React, { useState, useMemo } from 'react'

const UseMemoDemo = () => {
    const [gia, setGia] = useState(0);
    const [mauSac, setMauSac] = useState('black');

    // Chỉ tính lại tiền thuế khi cái 'gia' thay đổi
    const tongTien = useMemo(() => {
        console.log("Log: Đang tính lại tiền thuế...");
        return gia + (gia * 0.1); // Cộng thêm 10% thuế
    }, [gia]);

    return (
        <div>
            <h2>Bài tập useMemo - Tính tiền thuế</h2>
            <input type="number" onChange={(e) => setGia(Number(e.target.value))} placeholder="Nhập giá tiền..." />
            <p style={{ color: mauSac }}>Tổng tiền (có thuế 10%): <b>{tongTien}</b></p>

            <button onClick={() => setMauSac('red')}>Đổi màu chữ (Không tính lại tiền)</button>

            <hr />
            <div>
                <h3>Giải thích:</h3>
                <ul>
                    <li><b>useMemo</b> giúp ghi nhớ kết quả tính toán.</li>
                    <li>Khi mình đổi màu chữ, tiền không bị tính lại (đỡ tốn máy).</li>
                </ul>
            </div>
        </div>
    )
}
export default UseMemoDemo