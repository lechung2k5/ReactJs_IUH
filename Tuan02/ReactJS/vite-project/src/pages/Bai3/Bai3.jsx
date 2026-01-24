import React, {useState} from 'react'
import './Bai3.css'

const Bai3 = () => {
   const [formData, setFormData] = useState({name: '', email: ''})
   const handleChange = (e) =>{
    const {name, value} = e.target
    setFormData({
        ...formData,
        [name]: value
    })

   }
  return (
    <div className="bai-container">
        <div className="form-card">
            <h3>BÀI TẬP 03: CONTROLLED FORM</h3>
            <div className="input-group">
                <label htmlFor="">Họ và tên:</label>
                <input type="text" name='name' value={formData.name}
                onChange={handleChange}
                placeholder='Nhập tên của bạn...' />
            </div>
              <div className="input-group">
                  <label htmlFor="">Email:</label>
                  <input type="text" name='email' value={formData.email}
                      onChange={handleChange}
                      placeholder='example@gmail.com' />
              </div>
              <div className="display-area">
                <h4>DỮ LIỆU ĐÃ NHẬP:</h4>
                <p><strong>Tên: </strong>{formData.name || "Chưa nhập"}</p>
                <p><strong>Email: </strong>{formData.email || "Chưa nhập"}</p>

              </div>
        </div>
    </div>
  )
}

export default Bai3