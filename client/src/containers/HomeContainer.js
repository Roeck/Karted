import React from 'react';
import Products from '../components/Products';

const HomeContainer = () => {
  return (
    <div className='home-content'>
      <div className='main-content'>
        <hr />
        <Products />
      </div>
    </div>
  );
};

export default HomeContainer;