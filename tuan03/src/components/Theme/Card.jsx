import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import ThemeButton from './ThemeButton';

const Card = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`theme-card ${theme}`}>
            <h3>Card Thành Phần</h3>
            <p>Theme hiện tại: {theme}</p>
            <ThemeButton />
        </div>
    );
};

export default Card;