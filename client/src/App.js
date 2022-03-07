import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HomeContainer from './containers/HomeContainer';
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';

import Header from './components/Header';
import Footer from './components/Footer';
import Brand from './components/Brand';

function App() {
  const { cartItems } = useSelector(state => state.cart);

  return (
    <BrowserRouter>
      <div className='grid-container'>
        {/* Header Section */}
        <Header>
          <Link to="/">
            <Brand>Karted</Brand>
          </Link>
          <div className='header-links'>
            <Link to='/cart'>
              Cart {cartItems.length > 0 ? `(Items: ${cartItems.reduce((a, c) => a + c.qty, 0)})` : 'is empty'}
            </Link>
          </div>
        </Header>

        {/* Main Content Section */}
        <div className='content'>
          <main className='main'>
            <Route path='/products/:id' exact component={ProductContainer} />
            <Route path='/cart/:id?' component={CartContainer} />
            <Route path='/' exact component={HomeContainer} />
          </main>
        </div>

        {/* Footer */}
        <Footer>Copyright &#169; <a href="https://github.com/Roeck/Karted">KARTED</a></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;