import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

const store = createStore(
  combineReducers({
    products: productsReducer,
    cart: cartReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;