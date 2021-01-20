import axios from 'axios';

const SET_ORDER = 'SET_ORDER';
const ADD_ORDER = 'ADD_ORDER';
const GET_ORDER = 'GET_ORDER';
// const DELETE_ORDER = 'DELETE_ORDER'
// const PUT_ORDER = 'PUT_ORDER'

export const setOrders = orders => ({
  type: SET_ORDER,
  orders
});
export const getOrder = order => ({
  type: GET_ORDER,
  order
});
export const _addOrder = order => ({
  type: ADD_ORDER,
  order
});

// export const deleteOrder = (pokecard) => ({
//     type: DELETE_ORDER,
//     pokecard,
// })

// export const putOrder = (pokecard) => ({
//     type: PUT_ORDER,
//     pokecard,
// })

//THUNKS

export const fetchOrder = () => {
  return async dispatch => {
    try {
      const {data: orders} = await axios.get('/api/order');
      dispatch(setOrders(orders));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addOrder = newPokecard => {
  return async dispatch => {
    try {
      console.log('inside addOrder', newPokecard);
      await axios.post(`/api/order/`, newPokecard);
      dispatch(_addOrder(newPokecard));
    } catch (err) {
      console.log(err);
    }
  };
};

// export const removeOrder = (order) => {
//     return async (dispatch) => {
//         try {
//             await axios.delete('/api/')
//         }
//     }
// }

const initialState = [];

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORDER:
      return action.orders;
    //   case CREATE_ORDER:
    //     return [...state, action.order];
    case GET_ORDER:
      return [...state, action.order];
    //   case DELETE_ORDER:
    //     // return [...state, action.pokecard];
    //   case PUT_ORDER:
    //     // return [...state, action.pokecard];
    default:
      return state;
  }
}
