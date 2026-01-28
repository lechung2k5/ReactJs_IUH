import React, { useState, useEffect, useMemo } from 'react';
import SearchBar from '../../components/SearchBar';
import ProductList from '../../components/Product/ProductList';


const Bai3 = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch('https://dummyjson.com/products?limit=100');
            const data = await res.json();
            const bigData = [];
            for (let i = 0; i < 50; i++) {
                data.products.forEach(p => bigData.push({ ...p, id: `${i}-${p.id}` }));
            }
            setProducts(bigData);
            setLoading(false);
        };
        fetchData();
    }, []);
    useEffect(() => {
        setCurrentPage(1);
    }, [search, minPrice, maxPrice]);
    const startTime = performance.now();

    const filteredProducts = useMemo(() => {
        return products.filter(p =>
            p.title.toLowerCase().includes(search.toLowerCase()) &&
            p.price >= minPrice && p.price <= maxPrice
        );
    }, [products, search, minPrice, maxPrice]);
    const currentItems = useMemo(() => {
        const lastIndex = currentPage * itemsPerPage;
        const firstIndex = lastIndex - itemsPerPage;
        return filteredProducts.slice(firstIndex, lastIndex);
    }, [filteredProducts, currentPage]);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const totalPrice = useMemo(() => {
        return filteredProducts.reduce((sum, p) => sum + p.price, 0);
    }, [filteredProducts]);

    const endTime = performance.now();
    const executionTime = (endTime - startTime).toFixed(4);

    if (loading) return <h3>Đang tải 5.000 sản phẩm...</h3>;

    return (
        <div className='bai3-container'>
            <h1>Bài 3: Tối ưu Filter 5.000 Products</h1>
            <p>Thời gian tính toán: {executionTime} ms</p>

            <SearchBar
                onSearch={setSearch}
                onMinPrice={setMinPrice}
                onMaxPrice={setMaxPrice}
            />
            <div className="pagination">
                <button
                    onClick={() => setCurrentPage(p => p - 1)}
                    disabled={currentPage === 1}
                >
                    Trước
                </button>

                <span>Trang {currentPage} / {totalPages || 1}</span>

                <button
                    onClick={() => setCurrentPage(p => p + 1)}
                    disabled={currentPage === totalPages || totalPages === 0}
                >
                    Tiếp theo
                </button>
            </div>
            <div className='price-item'>
                <p>Số lượng: <strong>{filteredProducts.length}</strong></p>
                <p>Tổng tiền: <strong>${totalPrice.toLocaleString()}</strong></p>
            </div>

            <ProductList products={currentItems} />
        </div>
    );
};

export default Bai3;