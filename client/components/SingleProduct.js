import React from 'react';
import {connect} from 'react-redux';
import {fetchPokemon} from '../store/singlePoke';

class SinglePokemon extends React.Component {
  componentDidMount() {
    try {
      this.props.singlePokemon('xy7-10');
      console.log(this.props);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return <div>yep</div>;
  }
}

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  singlePokemon: id => dispatch(fetchPokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePokemon);
