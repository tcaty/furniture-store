import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ImCart } from 'react-icons/im';

import './header.css';

const Header = ({ itemsCount }) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__row">
          <Link to="/">
            <div className="header__store">
              Furniture store
            </div>
          </Link>
          <nav className="header__nav-bar nav-bar">
            <div className="nav-bar__cart cart">
              <span className="cart__icon"><ImCart /></span>
              <Link to="/cart/">
                <span className="cart__text">Cart</span>
              </Link>
              <span className="cart__items-count">{itemsCount}</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = ({ shoppingCart : { cartItemsTotalCount } }) => {
  return { itemsCount: cartItemsTotalCount };
};

export default connect(mapStateToProps)(Header);