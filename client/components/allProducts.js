import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-dom';
import {fetchProducts} from '../store/products';

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    return (
      <div>
        <h1 id="products">
          <h1 className="allProducts__header">Pokemon Cards For Sale</h1>
          {this.props.products.map(product => {
            return (
              <div key={product.id} className="allProducts__eachCard">
                <img src={product.imageUrl} />
                <h1>{product.name}</h1>
                <h3>Price: ${product.price}</h3>
              </div>
            );
          })}
        </h1>
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
