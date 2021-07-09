import React from 'react';

import { FurnitureStoreServiceConsumer } from '../furniture-store-service-context';

const withFurnitureStoreService = (Wrapped) => {
  return (props) => {
    return (
      <FurnitureStoreServiceConsumer>
        {
          furnitureStoreService => {
            return <Wrapped furnitureStoreService={furnitureStoreService} {...props}/>
          }
        }
      </FurnitureStoreServiceConsumer>
    );
  };
};

export default withFurnitureStoreService;