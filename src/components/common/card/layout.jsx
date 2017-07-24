import React from 'react';

const CardLayout = ({ children }) => (
  <div className="card">
    <div className="card-block">
      {children}
    </div>
  </div>
);

export default CardLayout;
