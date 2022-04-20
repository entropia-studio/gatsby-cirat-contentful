import React from 'react';
import './layout.scss';

const Layout = ({ children }) => {
  return (
    <div className='container'>
      <section>{children}</section>
    </div>
  );
};

export default Layout;
