import React from 'react'
import ProductCard from '../components/ProductCard';
import './Bai5ProductListPage.css';
const Bai5ProductListPage =()=> {
    const products =[
        { id: 1, name: "Dell Gaming 7567", price: "15.000.000", image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500" },
        { id: 2, name: "Chuột Logitech", price: "800.000", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500" },
        { id: 3, name: "Bàn phím cơ", price: "1.200.000", image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500" },
        { id: 4, name: "Tai nghe Gaming", price: "2.500.000", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
        { id: 5, name: "Màn hình 2K", price: "5.000.000", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500" },
        { id: 6, name: "Ghế công thái học", price: "4.000.000", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
    ];
  return (
    <div className="product-page-container">
        <h2>Bài 5: Danh sách sản phẩm Responsive</h2>
        <div className="product-grid">
            {products.map(item =>{
                return(
                <ProductCard key={item.id} id={item.id} name ={item.name} price={item.price} image={item.image}></ProductCard>
                )
            })}
        </div>
    </div>
  )
}

export default Bai5ProductListPage;