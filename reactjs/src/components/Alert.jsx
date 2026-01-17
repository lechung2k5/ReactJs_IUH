import React from 'react'
import './Alert.css'
const Alert = ({children, type = 'primary', onClick}) =>{
    const alertClass = `alert alert-${type}`;
    return(
        <div className = {alertClass}>
            <span className = 'alert-icon'>
                {type == 'success' && '✅'}
                {type === 'warning' && '⚠️'}
                {type === 'error' && '❌'}
            </span>
            <div className="alert-content">{children}</div>
        </div>
    );
}

export default Alert