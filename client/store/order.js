import axios from 'axios';

const SET_ORDER = 'SET_ORDER';

export const _setOrders = (orders) => ({
  type: SET_ORDER,
  orders,
});

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

const ADD_PRODUCT = 'ADD_PRODUCT';

export const _addProduct = (product) => ({
  type: ADD_PRODUCT,
  product,
});

export const addProduct = (userId, product) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.post(`/api/order/${userId}`, product);

      dispatch(_addProduct(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const deleteProduct = (product) => ({
  type: DELETE_PRODUCT,
  product,
});

const CHANGE_QUANTITY = 'CHANGE_QUANTITY';

export const _changeQuantity = (product, quantity) => ({
  type: CHANGE_QUANTITY,
  quantity,
  product,
});

export const removeProduct = (product) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/order/${product.id}`);
      dispatch(deleteProduct(product));
    } catch (err) {
      console.log(err);
    }
  };
};

const CHECKOUT_ORDER = 'CHECKOUT_ORDER';

export const _checkoutOrder = (order) => ({
  type: CHECKOUT_ORDER,
  order,
});

export const checkoutOrder = (order) => {
  return async (dispatch) => {
    const completed = await axios.put(`/api/order`, order);
    dispatch(_checkoutOrder(completed));
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
      return state.filter((product) => product.id !== action.product.id);
    case CHECKOUT_ORDER:
      return state.map((order) =>
        order.id == action.order.id ? action.order : order
      );
    default:
      return state;
  }
}
