import React, { useState, useCallback } from 'react';
import { ImCart } from 'react-icons/im';

import './furniture-list-item.css';

const FurnitureListItem = ({ item: { id, image, name, category, price }, furnitureAddedToCart }) => {
  
  const [mouseOnItem, setMouseOnItem] = useState(false);

  const getClassesOnMouseEvent = useCallback((initialClass) => {
    return mouseOnItem ? `${initialClass} ${initialClass}_mouseOn` : initialClass;
  }, [mouseOnItem]);

  return (
    <li 
      className="furniture-list-item" 
      onMouseEnter={() => setMouseOnItem(true)} 
      onMouseLeave={() => setMouseOnItem(false)}> 
      <div className="furniture-list-item__image-row">
        <div className="furniture-list-item__image">
          <img src={image} alt={"product"}/>
        </div>
      </div>
      <div className="furniture-list-item__category">
        {category}
      </div>
      <div className={getClassesOnMouseEvent('furniture-list-item__name')}>
        {name}
      </div>
      <div className={`furniture-list-item__add-to-cart-btn ${getClassesOnMouseEvent('add-to-cart-btn')}`}>
        <button onClick={() => furnitureAddedToCart(id)}>
          <span className="add-to-cart-btn__icon"><ImCart /></span>
          <span className="add-to-cart-btn__price">${price.toFixed(2)}</span>
        </button>
      </div>
    </li>
  );
};

export default FurnitureListItem;
