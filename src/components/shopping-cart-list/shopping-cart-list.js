import React from 'react';
import { connect } from 'react-redux';

import ShoppingCartListItem from '../shopping-cart-list-item';
import ShoppingCartIsEmptyMessage from '../shopping-cart-is-empty-message';
import { 
  furnitureAddedToCart,
  furnitureRemovedFromCart,
  furnitureDeletedFromCart
} from '../../actions';

import './shopping-cart-list.css';

const ShoppingCartList = ({ cartItems, totalPrice, onAdd, onRemove, onDelete }) => {

  if (cartItems.length === 0) {
    return <ShoppingCartIsEmptyMessage />;
  }

  return (
    <ul className="shopping-cart-list">
      <div className="container">
          { cartItems.map((item) => {
            const { id } = item;
            return (
              <ShoppingCartListItem 
                item={item} 
                key={id}
                onAdd={() => onAdd(id)}
                onRemove={() => onRemove(id)}
                onDelete={() => onDelete(id)}/>
              );
            })
          }
        <div className="shopping-cart-list__total-price total-price">
            <span className="total-price__text">Total price</span>
            <span className="total-price__price">{totalPrice.toFixed(2)} $</span>
        </div>
      </div>
    </ul>
  );
}

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotalPrice } }) => {
  return { 
    cartItems,
    totalPrice: orderTotalPrice
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (id) => dispatch(furnitureAddedToCart(id)),
    onRemove: (id) => dispatch(furnitureRemovedFromCart(id)),
    onDelete: (id) => dispatch(furnitureDeletedFromCart(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartList);