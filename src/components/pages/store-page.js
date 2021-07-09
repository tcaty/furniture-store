import React, { Fragment } from 'react';

import PageTitle from '../page-title';
import { FurnitureListContainer } from '../containers';
import { withErrorBoundry } from '../hoc';

const StorePage = () => {
  return (
    <Fragment>
      <PageTitle 
        section={'store'} 
        pageName={'Featured Products'}
        description={'Check out our online store for some of the best products'}/>
      <FurnitureListContainer />
    </Fragment>
  );
};

export default withErrorBoundry(StorePage);