import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme} className={`theme-btn ${theme}`}>
            Đổi sang {theme === 'light' ? 'Dark' : 'Light'}
        </button>
    );
};

export default ThemeButton;