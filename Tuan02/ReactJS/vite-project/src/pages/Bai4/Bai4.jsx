import React, { useState } from 'react'
import StatusBadge from '../../components/StatusBadge/StatusBadge';
import './Bai4.css'
const Bai4 = () => {
    const [button, setButton] = useState('online');
  return (
    <div className="bai4-container">
        <div className="status-card">
            <h3>BÀI TẬP 04: STATUS BADGE</h3>
            <p>Trạng thái hiện tại:</p>
            <div className="badge-display">
                <StatusBadge status={button}/>
            </div>
            <div className="status-button">
                <button onClick={() => setButton('online')} className='badge-online'>On </button>
                <button onClick={() => setButton('offline')} className='badge-offline'>Off </button>
                <button onClick={() => setButton('busy')} className='badge-busy'> Busy</button>
            </div>
        </div>
    </div>
  )
}

export default Bai4