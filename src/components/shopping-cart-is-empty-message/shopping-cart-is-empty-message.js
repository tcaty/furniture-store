import React from 'react';
import { Link } from 'react-router-dom';

import './shopping-cart-is-empty-message.css';

const ShoppingCartIsEmptyMessage = () => {
  return (
    <div className="shopping-cart-is-empty-message">
      <div className="shopping-cart-is-empty-message__text">
        Shopping cart is empty :(
      </div>
      <div className="shopping-cart-is-empty-message__prompt">
        Please, select products in the store
      </div>
      <div className="shopping-cart-is-empty-message__go-to-store-btn">
        <Link to="/">
          <button>Store</button>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCartIsEmptyMessage;