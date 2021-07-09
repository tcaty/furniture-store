import React from 'react';

import ErrorBoundry from '../error-boundry';

const withErrorBoundry = (Wrapped) => {
  return (props) => {
    return (
      <ErrorBoundry>
        <Wrapped {...props}/>
      </ErrorBoundry>
    );
  };
};

export default withErrorBoundry;