import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import { FurnitureStoreServiceProvider } from './components/furniture-store-service-context';
import FurnitureStoreService from './services/furniture-store-service';
import store from './store';

import './index.css';

const furnitureStoreService = new FurnitureStoreService();

ReactDom.render(
  <Provider store={store}>
    <ErrorBoundry>
      <FurnitureStoreServiceProvider value={furnitureStoreService}>
        <Router>
          <App />
        </Router>
      </FurnitureStoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);