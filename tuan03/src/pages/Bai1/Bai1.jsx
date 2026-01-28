import React, { useState } from 'react'
import FormInfo from '../../components/FormInfo/FormInfo';
import CardInfo from '../../components/CardInfo/CardInfo';

const Bai1 = () => {

    
    const [info, setInfo] = useState({
        name: "",
        email: "",
        age: ""
    });
    const handleChange = (e) =>{
        const {name, value} = e.target
        setInfo({
            ...info,
            [name]: value
        });
    }
    console.log("Đã nhận dữ liệu...", info);
  return (
    <div className="bai1-container">
        <div className="bai1-content">
            <h1>BÀI TẬP 1</h1>
            <FormInfo info={info} onInputChange = {handleChange}/>
            <hr />
            <CardInfo info={info}/>
        </div>

    </div>
    
  )
}

export default Bai1