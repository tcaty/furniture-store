import React from 'react';
import FurnitureListItem from '../furniture-list-item';

import './furniture-list.css';

const FurnitureList = ({ furniture, furnitureAddedToCart }) => {
  return (
    <div className="container">
      <ul className="furniture-list">
        { furniture.map(item => {
            return (
              <FurnitureListItem 
                item={item} 
                key={item.id} 
                furnitureAddedToCart={furnitureAddedToCart}/>
            );
          }) 
        }
      </ul>
    </div>
  );
};

export default FurnitureList;
