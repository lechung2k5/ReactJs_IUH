import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { useProducts } from '../../context/ProductContext';
import './MiniApp.css';

const ProductManager = () => {
  const { user, login, logout } = useAuth();
  const { items, addToCart, removeFromCart, totalAmount } = useCart();
  const { products, loading, error } = useProducts();

  const handleMockLogin = () => login({ name: 'Admin User', role: 'admin' });

  return (
    <div className="mini-app">
      <header className="mini-app-header">
        <h3>Mini Shop (Context API)</h3>
        <div className="auth-section">
          {user ? (
            <div>
              <span>Welcome, {user.name}</span>
              <button onClick={logout} className="btn-small">Logout</button>
            </div>
          ) : (
            <button onClick={handleMockLogin} className="btn-small">Login as Admin</button>
          )}
        </div>
      </header>

      <div className="mini-app-content">
        <section className="product-list-section">
          <h4>Products</h4>
          {loading && <p>Loading products...</p>}
          {error && <p className="error">{error}</p>}
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="mini-product-card">
                <img src={product.image} alt={product.title} />
                <h5>{product.title.substring(0, 20)}...</h5>
                <p>${product.price}</p>
                <button onClick={() => addToCart(product)} disabled={!user}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mini-cart-section">
          <h4>Shopping Cart</h4>
          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul>
                {items.map((item) => (
                  <li key={item.id}>
                    {item.title.substring(0, 15)}... x{item.quantity}
                    <button onClick={() => removeFromCart(item.id)}>&times;</button>
                  </li>
                ))}
              </ul>
              <div className="mini-cart-footer">
                <strong>Total: ${totalAmount.toFixed(2)}</strong>
              </div>
            </>
          )}
          {!user && <p className="warning-text">Please login to add items to cart.</p>}
        </section>
      </div>
    </div>
  );
};

export default ProductManager;
