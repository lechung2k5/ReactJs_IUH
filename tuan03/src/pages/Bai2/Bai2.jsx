import React, { useEffect, useState } from 'react'
import Clock from '../../components/Clock/Clock';

const Bai2 = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timerId = setInterval(() => {
            console.log("Đang cập nhật thời gian...");
            setTime(new Date());  
        }, 1000);
        return ()=>{
            clearInterval(timerId);
            console.log("Đã dọn dẹp timer!");
        }
    }, []);
    
  return (
    <div className="bai2-container">
        <h2>BÀI 2: DIGITAL CLOCK</h2>
        <Clock
            hour={time.getHours()}
            minutes = {time.getMinutes()}
            second={time.getSeconds()}
        />
    </div>
  )
}

export default Bai2