import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartAtom, cartTotalSelector } from '../../recoil/cartAtom.jsx';

const PRODUCTS = [
  { id: 1, name: 'T-Shirt', price: 15 },
  { id: 2, name: 'Jeans', price: 40 },
  { id: 3, name: 'Sneakers', price: 60 }
];

export default function CartWidget() {
  const [cart, setCart] = useRecoilState(cartAtom);
  const total = useRecoilValue(cartTotalSelector);

  const addToCart = (product) => {
    setCart(oldCart => {
      const existing = oldCart.find(item => item.id === product.id);
      if (existing) {
        return oldCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...oldCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart(oldCart => {
      return oldCart.map(item => {
        if (item.id === id) {
          const newQ = item.quantity + delta;
          return { ...item, quantity: newQ > 0 ? newQ : 0 };
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        {PRODUCTS.map(product => (
          <div key={product.id} style={{ border: '1px solid var(--card-border)', padding: '10px', borderRadius: '8px' }}>
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)} style={{ backgroundColor: '#3b82f6', color: 'white' }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div style={{ borderTop: '2px solid var(--card-border)', paddingTop: '20px' }}>
        <h3>Your Cart</h3>
        {cart.length === 0 ? (
          <p>Cart is empty.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map(item => (
              <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
                <span>{item.name} (${item.price})</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  <strong style={{ minWidth: '50px', textAlign: 'right' }}>
                    ${item.price * item.quantity}
                  </strong>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div style={{ textAlign: 'right', marginTop: '20px', fontSize: '1.2em' }}>
          <strong>Total: ${total}</strong>
        </div>
      </div>
    </div>
  );
}
