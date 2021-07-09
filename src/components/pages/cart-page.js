import React, { Fragment } from 'react';

import PageTitle from '../page-title';
import ShoppingCartList from '../shopping-cart-list';
import { withErrorBoundry } from '../hoc';

const CartPage = () => {
  return (
    <Fragment>
      <PageTitle 
        section={'cart'}
        pageName={'Cart Items'}
        description={'New shipping methods will be available soon'}/>
      <ShoppingCartList />
    </Fragment>
  );
};

export default withErrorBoundry(CartPage);