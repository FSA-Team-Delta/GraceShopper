import axios from 'axios';

const SET_PRODUCTS = 'SET_PRODUCTS';

export const setProducts = products => {
  return {type: SET_PRODUCTS, products};
};

export const fetchProducts = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/product');
      dispatch(setProducts(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const GET_PRODUCT = 'GET_PRODUCT';

export const getProduct = product => {
  return {type: GET_PRODUCT, product};
};

const initialState = [];

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    case GET_PRODUCT:
      return [...state, action.product];
    default:
      return state;
  }
}
