import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

function App() {
  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header className='header'>
          <div className='brand'>
            <Link to='/'>KARTED</Link>
          </div>
          <div className='header-links'>
            <a href='cart.html'>Cart</a>
          </div>
        </header>
        <main className='main'>
          <div className='content'>
          </div>
        </main>
        <footer className='footer'>Copyright &#169; KARTED</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;