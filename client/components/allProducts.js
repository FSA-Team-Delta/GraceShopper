import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-dom';

export class AllProducts extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    //   <div id="products">
    //   {this.props.products.map((product) => {
    //     return (
    //       <div key={product.id} className="backDiv">
    //         <Link to={`/products/${product.id}`}>
    //           <div className="productName">
    //             <h1 className="productName">{product.name}</h1>
    //             <h3 className="productName">
    //               Fuel Level:{product.fuelLevel}
    //               <div /> Fuel Type: {product.fuelType}
    //             </h3>
    //             <img src={product.imageUrl} />
    //           </div>
    //         </Link>
    //
    //           <img src="https://image.winudf.com/v2/image1/Y29tLnNlbGZkZXN0cnVjdGlvbl9pY29uXzE1NjcwMzkwMjBfMDY1/icon.png?w=170&fakeurl=1" />
    //         </button>
    //       </div>
    //     );
    //   })}
    // </div>
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
