import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productsReducer } from './reducers/productReducers';

const store = createStore(
  combineReducers({
    products: productsReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;