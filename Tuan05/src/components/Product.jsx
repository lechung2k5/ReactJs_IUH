import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Product() {
    const { productId } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
                <h2>Trang chi tiết hiển thị:</h2>
                <p style={{fontSize: '18px', fontWeight: 'bold', color: '#3b82f6'}}>
                    Product ID: {productId}
                </p>
                <div style={{ marginTop: '15px' }}>
                    <button 
                        onClick={() => navigate('/cart')} 
                        style={{ marginRight: '10px', padding: '8px 15px', backgroundColor: '#f59e0b', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                    >
                        Thêm vào giỏ hàng
                    </button>
                    <button 
                        onClick={() => navigate('/checkout')}
                        style={{ padding: '8px 15px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                    >
                        Mua hàng
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product
