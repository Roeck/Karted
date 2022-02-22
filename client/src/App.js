import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import HomeContainer from './containers/HomeContainer';
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';

function App() {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);
  const { cartItems } = useSelector(state => state.cart);

  return (
    <BrowserRouter>
      <div className='grid-container'>
        {/* Header Section */}
        <header className='header'>
          <div className='brand'>
            <Link to='/'>Karted</Link>
          </div>
          <div className='header-links'>
            <Link to='/cart'>
              Cart {cartItems.length > 0 ? `(Items: ${cartItems.reduce((a, c) => a + c.qty, 0)})` : 'is empty'}
            </Link>
          </div>
        </header>

        {/* Main Content Section */}
        <div className='content'>
          <main className='main'>
            <Route path='/products/:id' exact component={ProductContainer} />
            <Route path='/cart/:id?' component={CartContainer} />
            <Route path='/' exact component={HomeContainer} />
          </main>
        </div>

        {/* Footer */}
        <footer className='footer'>Copyright &#169; KARTED</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;