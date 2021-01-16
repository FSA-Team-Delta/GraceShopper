import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-dom';
import {fetchProducts} from '../store/products';
import '../css-components/AllProducts.css';

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    return (
      <div>
        <h1 className="allProducts__header">Pokemon Cards For Sale</h1>
        <div className="allProducts__item">
          {this.props.products.map(product => {
            return (
              <div key={product.id} className="allProducts__eachCard">
                <img src={product.imageUrl} />
                <h1>{product.name}</h1>
                <h3>Price: ${product.price}</h3>
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
