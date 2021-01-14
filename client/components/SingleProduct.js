import React from 'react';
import {connect} from 'react-redux';
import {fetchPokemon} from '../store/singlePoke';

class SinglePokemon extends React.Component {
  componentDidMount() {
    try {
      const id = this.props.match.params.id;
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    console.log(this.props);
    return <div>yep</div>;
  }
}

const mapStateToProps = state => ({
  pokemon: state.singlePokemon
});

const mapDispatchToProps = dispatch => ({
  singlePokemon: id => dispatch(fetchPokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePokemon);
