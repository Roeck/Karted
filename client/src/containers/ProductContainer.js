import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';

const ProductContainer = props => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const productDetails = useSelector(state => state.products);
  const { product, success: productSaveSuccess } = productDetails;

  const handleAddToCart = () => {
    dispatch(addToCart(product, qty));
    props.history.push('/cart');
  };

  return (
    <div>
      <div className='back-to-results'>
        <Link to='/'>Back to results</Link>
      </div>

      {!product && product.id ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className='details'>
            <div className='details-image'>
              <img src={product.image} alt={product.name} />
            </div>
            <div className='details-info'>
              <ul>
                <li>
                  <h4>{product.name}</h4>
                </li>
                <li>
                  Description:
                  <div>{product.description}</div>
                </li>
              </ul>
            </div>
            <div className='details-action'>
              <ul>
                <li>Status: {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</li>
                {product.countInStock > 0 ? (
                  <li>
                    Qty:{' '}
                    <select
                      value={qty}
                      onChange={e => {
                        setQty(Number(e.target.value));
                      }}>
                      {[...Array(product.countInStock).keys()].map(x => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </li>
                ) : (
                  <li></li>
                )}
                <li>
                  {product.countInStock > 0 ? (
                    <button onClick={handleAddToCart} className='button primary'>
                      Add To Cart
                    </button>
                  ) : (
                    <div></div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductContainer;