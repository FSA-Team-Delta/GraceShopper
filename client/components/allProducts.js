import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchProducts} from '../store/products';
import {addProduct} from '../store/order';

import '../css-components/AllProducts.css';
import {Button} from '@material-ui/core';

class AllProducts extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    this.props.getProducts();
  }
  onClick(product) {
    console.log('clicked', product);
    this.props.addProduct(product);
  }
  render() {
    return (
      <div>
        <h1 className="allProducts__header">Pokemon Cards For Sale</h1>
        <div className="allProducts__item">
          {this.props.products.map((product) => {
            return (
              <div key={product.id} className="allProducts__card">
                <Link to={`/product/${product.id}`}>
                  <img src={product.imageUrl} />
                </Link>
                <div className="allProducts__buy">
                  <Button
                    variant="contained"
                    onClick={() => this.onClick(product)}
                    color="primary"
                    size="small"
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

const mapState = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProducts: () => dispatch(fetchProducts()),
    addProduct: (product) => dispatch(addProduct(product)),
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
