import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import Fade from 'react-reveal';
import Product from './Product';

const Products = () => {
  const dispatch = useDispatch();
  const { foundProducts } = useSelector(state => state.products);

  // Side effect for rendering submitted review on homepage
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Fade bottom cascade>
        {!foundProducts ? (
          <div>Loading...</div>
        ) : ( 
          <ul className='products'>
            {foundProducts.map(product => (
              <li key={product.id}>
                <Product product={product} />
              </li>
            ))}
          </ul>
        )}
      </Fade>
    </div>
  );
};

export default Products;