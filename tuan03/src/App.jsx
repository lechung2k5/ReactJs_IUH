import './App.css'
import Bai1 from './pages/Bai1/Bai1'
import { Routes, Route, Link } from 'react-router-dom'
import Bai2 from './pages/Bai2/Bai2'
import Bai3 from './pages/Bai3/Bai3'
import Bai4 from './pages/Bai4/Bai4'
import Bai5 from './pages/Bai5'
import Bai6 from './pages/Bai6'
import Bai7 from './pages/Bai7'

function App() {
  return (
    <div className="app-container" style={{ display: 'flex' }}>
      <nav>
        <div className="sidebar">
          <ul>
            <li>
              <Link to="/bai1">Bài Tập 01</Link>
            </li>
            <li>
              <Link to="/bai2">Bài Tập 02</Link>
            </li>
            <li>
              <Link to="/bai3">Bài Tập 03</Link>
            </li>
            <li>
              <Link to="/bai4">Bài Tập 04</Link>
            </li>
            <li>
              <Link to="/bai5">Bài Tập 05</Link>
            </li>
            <li>
              <Link to="/bai6">Bài Tập 06</Link>
            </li>
            <li>
              <Link to="/bai7">Bài Tập 07</Link>
            </li>
          </ul>
        </div>
      </nav>

      <main style={{ marginLeft: '20px', flex: 1 }}>
        <Routes>
          <Route path="/bai1" element={<Bai1 />} />
          <Route path="/bai2" element={<Bai2 />} />
          <Route path="/bai3" element={<Bai3 />} />
          <Route path="/bai4" element={<Bai4 />} />
          <Route path="/bai5" element={<Bai5 />} />
          <Route path="/bai6" element={<Bai6 />} />
          <Route path="/bai7" element={<Bai7 />} />
          <Route path="/" element={<h2>Chọn một bài tập ở sidebar</h2>} />
        </Routes>
      </main>
    </div>
  )
}

export default App