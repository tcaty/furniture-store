import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../header';
import { StorePage, CartPage } from '../pages';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Route path="/" component={StorePage} exact />
      <Route path="/cart/" component={CartPage} />
    </div>
  );
};

export default App;