import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { GrTrash } from 'react-icons/gr';

import './shopping-cart-list-item.css';

const ShoppingCartListItem = ({ item, onAdd, onRemove, onDelete }) => {
  const { image, name, category, count, totalPrice } = item;
  return (
    <li className="shopping-cart-list-item">
      <div className="shopping-cart-list-item__top-line top-line">
        <button className="top-line__remove-btn" onClick={onDelete}><GrTrash /></button>
      </div>
      <div className="shopping-cart-list-item__bottom-line bottom-line">
        <div className="bottom-line__img">
          <img src={image} alt="shopping cart list item"/>
        </div>
        <div className="bottom-line__item-info item-info">
          <div className="item-info__name">{name}</div>
          <div className="item-info__category">{category}</div>
        </div>
        <div className="bottom-line__count-btns count-btns">
          <button className="count-btns__increase-btn" onClick={onRemove}><AiOutlineMinus /></button>
          <span className="count-btns__item-count">{count}</span>
          <button className="count-btns__decrease-btn" onClick={onAdd}><AiOutlinePlus /></button>
        </div>
        <div className="bottom-line__total-price">{totalPrice.toFixed(2)} $</div>
      </div>
    </li>
  );
};

export default ShoppingCartListItem;