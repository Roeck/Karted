import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import Fade from 'react-reveal';
import Product from './Product';

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Fade bottom cascade>
          <ul className='products'>
              <li key={product.id}>
                <Product product={product} />
              </li>
          </ul>
      </Fade>
    </div>
  );
};

export default Products;