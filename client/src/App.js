import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import HomeContainer from './containers/HomeContainer';
import ProductContainer from './containers/ProductContainer';

function App() {
  return (
     <BrowserRouter>
      <div className='grid-container'>
        <header className='header'>
          <div className='brand'>
            <Link to='/'>KARTED</Link>
          </div>
          <div className='header-links'>
            <a href='list.html'>List</a>
          </div>
        </header>

        <div className='home-content'>
          <main className='main'>
            <Route path='/products/:id' component={ProductContainer} />
            <Route path='/' exact component={HomeContainer} />
          </main>
        </div>
        <footer className='footer'>Copyright &#169; KARTED</footer>
      </div>
     </BrowserRouter>
  );
}

export default App;