import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useParams, Outlet } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'
import NotFault from './components/NotFault'
import Product from './components/Product'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Orders from './components/Orders'
import Settings from './components/Settings'
import { AuthProvider } from './components/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

function App() {
  return (
    <AuthProvider>
      <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/products">Product</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/orders">Orders</Link>
      </nav>
      <main className="page-content">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={
            <div>
              <h1>Danh sách:</h1>
              <nav>
                <ul style={{ listStyleType: 'circle', marginLeft: '20px', marginBottom: '20px' }}>
                  <li><Link to="/products/1">Iphone</Link></li>
                  <li><Link to="/products/2">Samsung</Link></li>
                  <li><Link to="/products/3">Laptop</Link></li>
                </ul>
              </nav>
            </div>
          } />
          <Route path="/products/:productId" element={<Product />} />
          
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes - Yêu cầu bài 6 & 7 */}
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
            {/* Dashboard có chức năng Protected theo form */}
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="profile" element={<Profile />} />
              <Route path="orders" element={<Orders />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFault />} />
        </Routes>
      </main>
      </Router>
    </AuthProvider>
  )
}

export default App