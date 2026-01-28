import React, { useReducer, useEffect } from 'react';

const initialState = {
    status: 'idle',
    data: [],
    error: null
};

function userReducer(state, action) {
    switch (action.type) {
        case 'FETCH_START':
            return { status: 'loading', data: [], error: null };
        case 'FETCH_SUCCESS':
            return { status: 'success', data: action.payload, error: null };
        case 'FETCH_ERROR':
            return { status: 'error', data: [], error: action.payload };
        default:
            return state;
    }
}

const Bai6 = () => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    const fetchUsers = async () => {
        dispatch({ type: 'FETCH_START' });
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) throw new Error('Failed to fetch data');
            const data = await response.json();
            dispatch({ type: 'FETCH_SUCCESS', payload: data });
        } catch (err) {
            dispatch({ type: 'FETCH_ERROR', payload: err.message });
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="bai6-container">
            <h1>Bài 6: Fetch Users State Machine</h1>
            <hr />

            {state.status === 'loading' && (
                <div className="loading-state">
                    <div className="spinner"></div>
                    <p>Đang tải dữ liệu...</p>
                </div>
            )}

            {state.status === 'error' && (
                <div className="error-state">
                    <p style={{ color: 'red' }}>Lỗi: {state.error}</p>
                    <button onClick={fetchUsers} className="retry-btn">Retry</button>
                </div>
            )}

            {state.status === 'success' && (
                <ul className="user-list">
                    {state.data.map((user) => (
                        <li key={user.id} className="user-item">
                            <strong>{user.name}</strong> - {user.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Bai6;