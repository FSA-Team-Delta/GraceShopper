import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchProducts} from '../store/products';
import '../css-components/AllProducts.css';
import {Button} from '@material-ui/core';

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts();
    console.log('$$$$$$$$', this.props);
  }

  onClickHandler = product => {
    //works
    console.log('click', product);
  };

  render() {
    if (this.props.pokemon === 'Pokemon not found') {
      return (
        <div>
          <h1>Pokemon Cards not found</h1>{' '}
          <img src="https://media.giphy.com/media/nVTa8D8zJUc2A/giphy.gif" />
        </div>
      );
    }
    return (
      <div>
        <h1 className="allProducts__header">Pokemon Cards For Sale</h1>
        <div className="allProducts__item">
          {this.props.products.map(product => {
            return (
              <div key={product.id} className="allProducts__card">
                <Link to={`/product/${product.id}`}>
                  <img src={product.imageUrl} />
                </Link>
                <div className="allProducts__buy">
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => this.onClickHandler(product)}
                  >
                    Add to Cart
                  </Button>
                  <h3>Price: ${product.price}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    products: state.products
  };
};

const mapDispatch = dispatch => {
  return {
    getProducts: () => dispatch(fetchProducts())
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
