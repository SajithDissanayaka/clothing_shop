import  { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

function Cart() {
  // get product in cloud
  const { cartItems, incrementQuantity, decrementQuantity } = useContext(CartContext);

  // cal total price
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="cart-page">
      <h2>YOUR BAG</h2>
      
      {/* 3. check cart empty or not*/}
      {cartItems.length === 0 ? (
        <p className="empty-msg">Your bag is currently empty.</p>
      ) : (
        <div className="cart-content">
          {/* 4. if have any product get product*/}
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item-row">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>Price: ${item.price}</p>

                <div className="quantity-controls">
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
              </div>
              <div className="cart-item-total">
                {/* show product price and quantity */}
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          
          {/* 5. create total bill*/}
          <div className="cart-summary">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;