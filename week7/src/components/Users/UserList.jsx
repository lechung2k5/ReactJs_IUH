import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { usersStateAtom } from '../../recoil/usersAtom';
import './Users.css';

const UserList = () => {
    const [usersState, setUsersState] = useRecoilState(usersStateAtom);

    useEffect(() => {
        const fetchUsersData = async () => {
            setUsersState(prev => ({ ...prev, loading: true, error: null }));
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) throw new Error('Failed to fetch data from API');
                const data = await response.json();
                setUsersState({
                    data,
                    loading: false,
                    error: null
                });
            } catch (err) {
                setUsersState({
                    data: [],
                    loading: false,
                    error: err.message
                });
            }
        };

        if (usersState.data.length === 0) {
            fetchUsersData();
        }
    }, [setUsersState, usersState.data.length]);

    if (usersState.loading) return <div className="loader">Loading users...</div>;
    if (usersState.error) return <div className="error-message">Error: {usersState.error}</div>;

    return (
        <div className="user-list">
            <h3>Global User List</h3>
            <ul>
                {usersState.data.map(user => (
                    <li key={user.id} className="user-item">
                        <strong>{user.name}</strong> - <span>{user.email}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
