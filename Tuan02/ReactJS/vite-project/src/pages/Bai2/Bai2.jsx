import React, {useState} from 'react'
import './Bai2.css'

const Bai2 = () => {
    const [count, setCount] = useState(0)
    const handleIncrement = () =>{
        setCount(count + 1)
    }
    const handleDecrement = ()=>{
        if(count > 0){
            setCount(count - 1)
        }
    }
    const handleReset = () =>{
        setCount(0)
    }
  return (
    <div className="bai2-container">
        <div className="content-card">
            <h3>BÀI TẬP 2: COUNTER APP</h3>
              <h1 className="counter-value" style={{ color: count > 10 ? '#ef4444' : '#1e293b' }}>
                {count}
              </h1>
              <div className="button-group">
                <button className="btn btn-minus" onClick={handleDecrement}>-</button>
                <button className="btn btn-reset" onClick={handleReset}>Reset</button>
                <button className="btn btn-plus" onClick={handleIncrement}>+</button>
              </div>
        </div>
    </div>
  )
}

export default Bai2