import './ProductCard.css';

const ProductCard = ({id, name, price, image }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
            <img src={image} alt={name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price} VNĐ</p>
        <button className="add-to-cart-btn">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;