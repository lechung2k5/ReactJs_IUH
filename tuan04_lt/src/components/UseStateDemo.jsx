import React, { useState } from 'react'

const UseStateDemo = () => {
  // Khai báo state 'so' là giá trị, 'setSo' là hàm đổi giá trị đó
  const [so, setSo] = useState(0);

  // Tạo một hàm xử lý bấm nút để xem giá trị số thay đổi
  const xuLyBamNut = () => {
    const giaTriNew = so + 1;
    // Cập nhật state (để giao diện thay đổi)
    setSo(giaTriNew);

    // Log ra console
    console.log("Giá trị cũ:", so);
    console.log("Giá trị hiện tại trong UI:", giaTriNew);
  }

  return (
    // Render ra giao diện
    <div>
      <h2>Bài tập UseState</h2>

      {/* Hiển thị giá trị hiện tại */}
      <p>Giá trị hiện tại: <strong>{so}</strong></p>

      {/* Nút bấm kích hoạt giá trị cộng thêm 1 */}
      <button onClick={xuLyBamNut}>Tăng số</button>

      <hr />

      {/* Giải thích cơ chế hoạt động */}
      <div>
        <h3>Giải thích:</h3>
        <ul>
          <li>Bấm nút thì hàm <code>xuLyBamNut</code> sẽ chạy.</li>
          <li>setSo: thông báo cho React là dữ liệu đã đổi.</li>
          <li>Render: React tự động chạy lại component này và hiển thị <code>so</code> mới.</li>
        </ul>
      </div>
    </div>
  )
}

export default UseStateDemo;