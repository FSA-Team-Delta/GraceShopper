import axios from 'axios';

//action type
export const SINGLE_POKEMON = 'SINGLE_POKEMON';

//action creator
export const _singlePokemon = (pokemon) => ({
  type: SINGLE_POKEMON,
  pokemon,
});

//thunk
export const getPokemon = (id) => {
  return async (dispatch) => {
    try {
      const {data: pokemon} = await axios.get(`/api/product/${id}`);
      dispatch(_singlePokemon(pokemon));
    } catch (error) {
      console.error(error);
    }
  };
};

//reducer
const initialState = {
  pokemon: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_POKEMON:
      return {...state, pokemon: action.pokemon};
    //return action.pokemon
    default:
      return state;
  }
};
