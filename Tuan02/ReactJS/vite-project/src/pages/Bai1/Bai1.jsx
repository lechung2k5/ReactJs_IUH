import React from 'react'
import StudentInfo from '../../components/StudentInfo/StudentInfo'



const Bai1 = ({studentData}) => {
  return (
    <div className="bai-tap-1">
          <main style={{ minHeight: '70vh' }}>
            <StudentInfo student = {studentData}></StudentInfo>
          </main>
    </div>

  )
}

export default Bai1;