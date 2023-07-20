import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';

const Cart = () => {
  const { user } = useContext(UserContext);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  const removeItem = (itemId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    // Implement the checkout logic here (e.g., using a payment gateway or API).
    console.log('Checkout completed for user:', user);
    // Clear the cart after successful checkout.
    setCartItems([]);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price.toFixed(2)}{' '}
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${calculateTotal().toFixed(2)}</p>
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
