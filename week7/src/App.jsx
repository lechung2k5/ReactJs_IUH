import React from 'react';
import { useRecoilValue } from 'recoil';
import { themeAtom } from './recoil/themeAtom.jsx';
import { authAtom } from './recoil/authAtom.jsx';

import ThemeToggle from './components/Theme/ThemeToggle';
import ComponentA from './components/Counter/ComponentA';
import ComponentB from './components/Counter/ComponentB';

import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';
import UserStatus from './components/Auth/UserStatus';

import TodoList from './components/Todo/TodoList';
import CartWidget from './components/Cart/CartWidget';
import UserList from './components/Users/UserList';
import SearchBar from './components/Search/SearchBar';
import NotificationToast from './components/Notification/NotificationToast';
import ProductManager from './components/MiniApp/ProductManager';

import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';

import { useNotification } from './hooks/useNotification';

import './index.css';

function App() {
  const theme = useRecoilValue(themeAtom);
  const user = useRecoilValue(authAtom);
  const { showNotification } = useNotification();

  // Apply theme to the whole document
  React.useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className="app-container">
      <h1>State Management</h1>

      {/* Bài 1: Counter Global */}
      <div className="card">
        <h2>Bài 1: Counter Global</h2>
        <div className="component-row">
          <ComponentA />
          <ComponentB />
        </div>
      </div>

      <hr />

      {/* Bài 2: Theme Toggle */}
      <div className="card">
        <h2>Bài 2: Theme Toggle</h2>
        <ThemeToggle />
      </div>

      <hr />

      {/* Bài 3 & 9: Auth Mock & API Token */}
      <div className="card">
        <h2>Bài 3 & 9: Auth Mock & API Token</h2>
        <UserStatus />
        {!user ? <Login /> : <Logout />}
      </div>

      <hr />

      {/* Bài 4: Todo List Global */}
      <div className="card">
        <h2>Bài 4: Todo List Global</h2>
        <TodoList />
      </div>

      <hr />

      {/* Bài 5: Cart */}
      <div className="card">
        <h2>Bài 5: Shopping Cart</h2>
        <CartWidget />
      </div>

      <hr />

      {/* Bài 6: Notification System */}
      <div className="card">
        <h2>Bài 6: Notification System</h2>
        <div className="button-group">
          <button className="btn btn-success" onClick={() => showNotification('Success message!', 'success')}>
            Show Success
          </button>
          <button className="btn btn-error" onClick={() => showNotification('Error message!', 'error')}>
            Show Error
          </button>
          <button className="btn btn-info" onClick={() => showNotification('Info message!', 'info')}>
            Show Info
          </button>
        </div>
      </div>

      <hr />

      {/* Bài 7: Fetch Users Global */}
      <div className="card">
        <h2>Bài 7: Fetch Users Global</h2>
        <UserList />
      </div>

      <hr />

      {/* Bài 8: Search + Debounce */}
      <div className="card">
        <h2>Bài 8: Search + Debounce</h2>
        <SearchBar />
      </div>

      <hr />

      {/* Bài 10: Mini App (Consolidated Context) */}
      <div className="card">
        <h2>Bài 10: Mini App (Consolidated Context)</h2>
        <AuthProvider>
          <CartProvider>
            <ProductProvider>
              <ProductManager />
            </ProductProvider>
          </CartProvider>
        </AuthProvider>
      </div>

      <NotificationToast />

    </div>
  );
}

export default App;
