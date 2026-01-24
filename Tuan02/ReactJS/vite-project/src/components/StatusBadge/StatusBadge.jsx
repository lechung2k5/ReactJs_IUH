import React from 'react'
import './StatusBadge.css'
const StatusBadge = ({status}) => {
    const getStatusClass = () =>{
        if(status =="online") return 'badge-online';
        if (status == "offline") return 'badge-offline';
        if (status == "busy") return 'badge-busy';
        return 'badge-default';
    };
    return (
        <div className={`status-badge ${getStatusClass()}`}>
            {status.toUpperCase()}
        </div>
    )
};


export default StatusBadge