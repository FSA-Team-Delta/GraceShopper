import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import user from './user';
import userReducer from './user';
import productsReducer from './products';
import singlePokemon from './singlePoke';

const reducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  singlePokemon: singlePokemon
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
);
const store = createStore(reducer, middleware);

export default store;
export * from './user';
