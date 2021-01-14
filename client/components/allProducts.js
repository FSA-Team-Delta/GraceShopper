import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-dom'
import {fetchProducts} from '../store/products'

//test for brandon

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts()
  }
  render() {
    return (
      <div id="products">
        <h1>All Pokemon Cards For Sale</h1>
        {this.props.products.map(product => {
          return (
            <div key={product.id}>
              <h1 className="productName">{product.name}</h1>
              <img src={product.imageUrl} />
              <h3 className="productName">Rarity: {product.rarity}</h3>

              <h3 className="productName">
                <p>This card is available for only:</p> ${product.price}
              </h3>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.products
  }
}

const mapDispatch = dispatch => {
  return {
    getProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
