import React from 'react';
import {connect} from 'react-redux';
import {getPokemon} from '../store/singlePoke';

class SinglePokemon extends React.Component {
  componentDidMount() {
    console.log(this.props);
    // this.props.singlePokemon(this.props)
  }

  render() {
    return <div>yep</div>;
  }
}

const mapStateToProps = (state) => ({
  pokemon: state.singlePokemon,
});

const mapDispatchToProps = (dispatch) => ({
  singlePokemon: (id) => dispatch(getPokemon(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePokemon);
