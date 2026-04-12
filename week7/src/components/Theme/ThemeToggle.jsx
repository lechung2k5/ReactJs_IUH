import React from 'react';
import { useRecoilState } from 'recoil';
import { themeAtom } from '../../recoil/themeAtom.jsx';

export default function ThemeToggle() {
  const [theme, setTheme] = useRecoilState(themeAtom);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="theme-toggle">
      <button className="btn toggle-btn" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Switch to Dark Mode' : '☀️ Switch to Light Mode'}
      </button>
    </div>
  );
}
