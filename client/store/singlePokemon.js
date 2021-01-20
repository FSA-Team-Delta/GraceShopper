import axios from 'axios';

//action type
export const SINGLE_POKEMON = 'SINGLE_POKEMON';

//action creator
export const _singlePokemon = (pokemon) => ({
  type: SINGLE_POKEMON,
  pokemon,
});

//thunk
export const fetchPokemon = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/product/${id}`);
      dispatch(_singlePokemon(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export default function pokemonReducer(state = {}, action) {
  switch (action.type) {
    case SINGLE_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
}
