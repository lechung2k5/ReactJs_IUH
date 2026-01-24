import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  return (
    <div className="page-content">
      <h2>Bài 1: Card Sản Phẩm</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <ProductCard 
          name="Dell Inspiron 7567" 
          price="15.000.000" 
          image="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500" 
        />
      </div>
    </div>
  );
};
export default ProductPage;