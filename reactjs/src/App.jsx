import { useState } from 'react';
import Bai1ProductPage from './pages/Bai1ProductPage';
import Bai2ButtonPage from './pages/Bai2ButtonPage';
import Bai3AlertPage from './pages/Bai3AlertPage';
import Bai4LoginPage from './pages/Bai4LoginPage';
import Bai5ProductListPage from './pages/Bai5ProductListPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('product');

  return (
    <div className="app-container">
      <header className="main-header">
        <div className="logo-section">
          <h3>IUH - ReactJS Tasks</h3>
        </div>
        <nav className="nav-links">
          <button className={currentPage === 'product' ? 'active' : ''} onClick={() => setCurrentPage('product')}>Bài 1</button>
          <button className={currentPage === 'button' ? 'active' : ''} onClick={() => setCurrentPage('button')}>Bài 2</button>
          <button className={currentPage === 'alert' ? 'active' : ''} onClick={() => setCurrentPage('alert')}>Bài 3</button>
          <button className={currentPage === 'login' ? 'active' : ''} onClick={() => setCurrentPage('login')}>Bài 4</button>
          <button className={currentPage === 'layout' ? 'active' : ''} onClick={() => setCurrentPage('layout')}>Bài 5</button>
        </nav>
      </header>
      <main className="main-view">
        {currentPage === 'product' && <Bai1ProductPage />}
        {currentPage === 'button' && <Bai2ButtonPage />}
        {currentPage === 'alert' && <Bai3AlertPage />}
        {currentPage === 'login' && <Bai4LoginPage />}
        {currentPage === 'layout' && <Bai5ProductListPage />}
      </main>
    </div>
    
  );
}

export default App;