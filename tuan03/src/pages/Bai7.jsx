import React from 'react';
import { ThemeProvider } from '../components/Theme/ThemeProvider';
import Layout from '../components/Theme/Layout';


const Bai7 = () => {
    return (
        <ThemeProvider>
            <div className="bai7-container">
                <h1>Bài 7: Theme Switcher</h1>
                <Layout />
            </div>
        </ThemeProvider>
    );
};

export default Bai7;