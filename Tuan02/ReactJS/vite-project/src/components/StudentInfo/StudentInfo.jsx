import React from 'react'
import './StudentInfo.css'
const StudentInfo = ({student}) => {
    if(!student) return <p>Đang tải dữ liệu....</p>
  return (
    <div className="student-card">
        <img src={student.img} alt={student.name} />
        <h3>Thông tin sinh viên</h3>
        <p>Họ tên: {student.name}</p>
        <p>MSSV: {student.studentId}</p>
        <p>Lớp: {student.class}</p>
    </div>
  )
}

export default StudentInfo