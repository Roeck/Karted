import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editCartItem, removeFromCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal';
import Button from '../components/Button';
import formatCurrency from '../util';

const CartContainer = props => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);
  
  const removeFromCartHandler = productId => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className='cart'>
      <div className='cart-list'>
        <Fade cascade bottom>
          <ul className='cart-list-container'>
            <li>
              <h3>Shopping Cart</h3>
              <div>Price</div>
            </li>
            {cartItems.length === 0 ? (
              <div>Cart is empty</div>
            ) : (
              cartItems.map(item => (
                <li key={item.product}>
                  <div className='cart-image'>
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className='cart-name'>
                    <div>
                      <Link to={`/products/${item.product}`}>{item.name}</Link>
                    </div>
                    <div>
                      Qty:
                      <select value={item.qty} onChange={e => dispatch(editCartItem(item, Number(e.target.value)))}>
                        {[...Array(item.countInStock).keys()].map(x => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                      <Button onClick={() => removeFromCartHandler(item)}>
                        Delete
                      </Button>
                    </div>
                  </div>
                  <div className='cart-price'>${item.price}</div>
                </li>
              ))
            )}
          </ul>
        </Fade>
      </div>

      <div className='cart-action'>
        <h3>
          Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items):{' '}
          {formatCurrency(cartItems.reduce((a, c) => a + c.price * c.qty, 0))}
        </h3>
        <Button disabled={cartItems.length === 0}>
          Proceed To Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartContainer;