import axios from 'axios';

const SET_ORDER = 'SET_ORDER';
const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const CHANGE_QUANTITY = 'CHANGE_QUANTITY';

export const _setOrders = (orders) => ({
  type: SET_ORDER,
  orders,
});

export const _addOrder = (order) => ({
  type: ADD_PRODUCT,
  order,
});

export const _deleteOrder = (order) => ({
  type: DELETE_PRODUCT,
  order,
});

export const _changeQuantity = (product, quantity) => ({
  type: CHANGE_QUANTITY,
  quantity,
  product,
});

export const deleteProduct = (product) => ({
  type: DELETE_PRODUCT,
  product,
});

//THUNKS

export const fetchOrder = () => {
  return async (dispatch) => {
    try {
      const {data: orders} = await axios.get('/api/order');
      dispatch(_setOrders(orders));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addOrder = (userId, product) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.post(`/api/order${userId}`, product);

      dispatch(_addOrder(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const filler = (order) => {
  return async (dispatch) => {
    try {
      await axios.put(`/api/order/${order.id}`);
      dispatch(_deleteOrder(order));
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
      return [...state, action.order];
    case DELETE_PRODUCT:
      return state.filter(order);
    //   case PUT_ORDER:
    //     // return [...state, action.pokecard];
    default:
      return state;
  }
}
