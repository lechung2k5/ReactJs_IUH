import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/products?limit=5');
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      // DummyJSON returns { products: [...] } and uses 'thumbnail' instead of 'image'
      const mappedProducts = data.products.map(p => ({
        ...p,
        image: p.thumbnail // Mapping for compatibility with existing UI
      }));
      setProducts(mappedProducts);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error, fetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
