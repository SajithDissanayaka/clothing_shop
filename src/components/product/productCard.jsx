import  { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function ProductCard({ id, image, name, price }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
        <button
          className="add-to-bag-btn"
          onClick={() => addToCart({ id, image, name, price })}
        >
          Add To Bag
        </button>
      </div>
      <div className="product-info">
        <h4 className="product-name">{name}</h4>
        <p className="product-price">${price}</p>
      </div>
    </div>
  );
}

export default ProductCard;