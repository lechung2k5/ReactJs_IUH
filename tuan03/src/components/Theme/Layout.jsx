import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Card from './Card';

const Layout = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`theme-layout ${theme}`}>
            <h2>Giao diện chính (Layout)</h2>
            <Card />
        </div>
    );
};

export default Layout;