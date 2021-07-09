import React from 'react';

import './page-title.css';

const PageTitle = ({ section, pageName, description }) => {
  return (
    <div className="page-title">
      <div className="page-title__section">
        {section}
      </div>
      <div className="page-title__page-name">
        {pageName}
      </div>
      <div className="page-title__description">
        {description}
      </div>
    </div>
  );
};

export default PageTitle;