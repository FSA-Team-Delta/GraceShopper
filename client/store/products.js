import axios from 'axios';

const SET_PRODUCTS = 'SET_PRODUCTS';

export const setProducts = (products) => {
  return {type: SET_PRODUCTS, products};
};

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/product');
      dispatch(setProducts(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProduct = (product, productId) => {
  return async (dispatch) => {
    const {data} = await axios.put(`/api/product/${productId}`, product);
  };
};

const initialState = [];

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}
