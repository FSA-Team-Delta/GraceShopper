import React from 'react';
import {connect} from 'react-redux';
import {fetchPokemon} from '../store/singlePokemon';
import '../css-components/SingleProduct.css';
import {Button} from '@material-ui/core';

class SinglePokemon extends React.Component {
  componentDidMount() {
    this.props.singlePokemon(this.props.match.params.id);
  }
  render() {
    if (!this.props.pokemon.id) {
      return (
        <div className="singleProduct__error">
          <h1>Pokemon Card not found</h1>
          <img src="https://media.giphy.com/media/nVTa8D8zJUc2A/giphy.gif" />
        </div>
      );
    }
    const image = this.props.pokemon.imageUrl || '';
    const weaknesses = this.props.pokemon.weaknesses || '';
    const {name, hp, types, rarity, price, inventory} = this.props.pokemon;

    return (
      <div className="singleProduct_setting">
        <img src={image} />
        <div className="singleProduct-description">
          <h2>Hp: {hp}</h2>
          <h2>Type: {types}</h2>
          <h2>Rarity: {rarity}</h2>
          <h2>Price: {price}</h2>
          <h2>Qty: {inventory}</h2>
          <div>
            <h2>Weaknesses: {weaknesses.length && weaknesses[0].type}</h2>
            <div className="singleProduct__buy">
              <Button variant="contained" color="primary" size="small">
                Add to Cart
              </Button>
              <input type="number" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {pokemon: state.pokemon};
};

const mapDispatchToProps = dispatch => ({
  singlePokemon: id => dispatch(fetchPokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePokemon);
