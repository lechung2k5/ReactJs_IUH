import React from 'react'

const Clock = ({hour, minutes, second}) => {
    const formatTime = (num) => (num < 10 ? `0${num}`: num);
  return (
    <div className="clock-content">
        <h3>
            <span>
                {formatTime(hour)}:{formatTime(minutes)}:{formatTime(second)}
            </span>
        </h3>
    </div>
  )
}

export default Clock