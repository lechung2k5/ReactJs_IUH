import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <nav style={{ marginBottom: '20px' }}>
                <ul style={{ display: 'flex', gap: '15px', listStyleType: 'none', padding: 0 }}>
                    <li><Link to="/dashboard/profile">Profile</Link></li>
                    <li><Link to="/dashboard/orders">Orders</Link></li>
                    <li><Link to="/dashboard/settings">Settings</Link></li>
                </ul>
            </nav>
            
            <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard
