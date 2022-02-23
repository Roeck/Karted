import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

const initalState = { cart: { cartItems } };

const store = createStore(
  combineReducers({
    products: productsReducer,
    cart: cartReducer
  }),
  initalState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;