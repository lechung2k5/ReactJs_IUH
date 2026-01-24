import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Bai1 from './pages/Bai1/Bai1'
import Bai2 from './pages/Bai2/Bai2'
import Bai3 from './pages/Bai3/Bai3'
import Bai4 from './pages/Bai4/Bai4'
import Bai5 from './pages/Bai5/Bai5'

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [student, setStudent] = useState(null);

  useEffect(() => {
    if (activeTab === 'bai1') {
      fetch("https://696df1efd7bacd2dd71511fb.mockapi.io/student/2")
        .then(res => res.json())
        .then(data => setStudent(data))
        .catch(err => console.error("Lỗi fetch:", err));
    }
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'bai1':
        return <Bai1 studentData={student} />;
      case 'bai2':
        return <Bai2/>;
      case 'bai3':
        return <Bai3/>;
      case 'bai4':
        return <Bai4 />;  
      case 'bai5':
        return <Bai5/>; 
      default:
        return (
          <div className="welcome-screen">
            <h2>HỆ THỐNG QUẢN LÝ BÀI TẬP - IUH</h2>
            <p>Chọn bài tập bên trái để bắt đầu</p>
          </div>
        );
    }
  }

  return (
    <div className="app-wrapper">
      <aside className="sidebar">
        <div className="logo">TUẦN 2</div>
        <nav className="nav-menu">
          <button
            className={activeTab === 'home' ? 'active' : ''}
            onClick={() => setActiveTab('home')}
          >Trang chủ</button>
          <button
            className={activeTab === 'bai1' ? 'active' : ''}
            onClick={() => setActiveTab('bai1')}
          >Bài tập 1</button>
          <button
            className={activeTab === 'bai2' ? 'active' : ''}
            onClick={() => setActiveTab('bai2')}
          >Bài tập 2</button>
          <button
            className={activeTab === 'bai3' ? 'active' : ''}
            onClick={() => setActiveTab('bai3')}
          >Bài tập 3</button>
          <button
            className={activeTab === 'bai4' ? 'active' : ''}
            onClick={() => setActiveTab('bai4')}
          >Bài tập 4</button>
          <button
            className={activeTab === 'bai5' ? 'active' : ''}
            onClick={() => setActiveTab('bai5')}
          >Bài tập 5</button>
        </nav>
      </aside>
      <main className="main-layout">
        <Header />
        <section className="content-area">
          {renderContent()}
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default App;