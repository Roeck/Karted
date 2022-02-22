import React from 'react';
import { Link } from 'react-router-dom';
// import Rating from '../Rating';
// import { addToList } from '../../actions/listActions';
import { useDispatch } from 'react-redux';

const Product = props => {
  const product = props.product;
  const dispatch = useDispatch();

  const addToListHandler = () => {
    dispatch(addToList(product, 1));
  };

  return (
    <div className='product'>
      <Link to={`/products/${product.id}`}>
        <img className='product-image' src={product.image} alt='product' />
      </Link>
      <div className='product-name'>
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </div>
      <div className='product-brand'>{product.brand}</div>
      {/* <div className='product-rating'>
        <Rating value={product.rating} text={product.numReviews + ' Reviews'} />
      </div> */}
    </div>
  );
};

export default Product;