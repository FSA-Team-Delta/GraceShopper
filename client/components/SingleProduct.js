import React from 'react';
import {connect} from 'react-redux';
import {fetchPokemon} from '../store/singlePoke';
import {withRouter} from 'react-router';

class SinglePokemon extends React.Component {
  componentDidMount() {
    this.props.singlePokemon(this.props.match.params.id);
    console.log('inside mount');
  }

  render() {
    const image = this.props.pokemon.imageUrl || '';
    const hp = this.props.pokemon.hp;
    return (
      <div>
        <img src={image} />
        <h2>Hp:{hp}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('map state', state);
  return {pokemon: state.pokemon};
};

const mapDispatchToProps = dispatch => ({
  singlePokemon: id => dispatch(fetchPokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePokemon);
