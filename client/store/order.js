import axios from 'axios';

const SET_ORDER = 'SET_ORDER';

export const _setOrders = orders => ({
  type: SET_ORDER,
  orders
});

export const fetchOrder = () => {
  return async dispatch => {
    try {
      const {data: orders} = await axios.get('/api/order');
      dispatch(_setOrders(orders));
    } catch (err) {
      console.log(err);
    }
  };
};

const ADD_PRODUCT = 'ADD_PRODUCT';

export const _addProduct = product => ({
  type: ADD_PRODUCT,
  product
});

export const addProduct = (userId, product) => {
  return async dispatch => {
    try {
      const {data} = await axios.post(`/api/order/${userId}`, product);

      dispatch(_addProduct(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const deleteProduct = product => ({
  type: DELETE_PRODUCT,
  product
});

const CHANGE_QUANTITY = 'CHANGE_QUANTITY';

export const _changeQuantity = (product, quantity) => ({
  type: CHANGE_QUANTITY,
  quantity,
  product
});

//THUNKS

export const removeProduct = product => {
  return async dispatch => {
    try {
      await axios.delete(`/api/order/${product.id}`);
      dispatch(deleteProduct(product));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = [];

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORDER:
      return action.orders;
    case ADD_PRODUCT:
      return [...state, action.product];
    case DELETE_PRODUCT:
      return state.filter(product => product.id !== action.product.id);
    default:
      return state;
  }
}
