import React from 'react';
import {connect} from 'react-redux';
import {fetchOrder, changeProductQuantity, removeProduct} from '../store/order';
import {Button} from '@material-ui/core';
import '../css-components/Order.css';
import {Link} from 'react-router-dom';

// sample data format displayed.. pending changes for data flow

export class Order extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchOrder();
  }

  handleSubmit(event, product) {
    event.preventDefault();
    this.props.changeQuantity(product, {quantity: event.target.quantity.value});
  }

  render() {
    let totalPrice = 0;
    return (
      <div className="Cart_items">
        <h1 className="Cart__header">Cart</h1>
        <div>
          {this.props.order.map((elem) => {
            console.log(';ldkfja;dlfj', elem);
            totalPrice += +elem.price * +elem.Product_Order.quantity;
            return (
              <div className="Cart__description" key={elem.id}>
                <div>
                  <img src={elem.imageUrl}></img>
                </div>
                <div>
                  <h3>Name: {elem.name}</h3>
                </div>
                <div>
                  <h3>Price: ${elem.price}</h3>
                </div>
                <div>
                  <form onSubmit={(event) => this.handleSubmit(event, elem)}>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      step="1"
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      type="submit"
                    >
                      Change Quantity
                    </Button>
                  </form>
                </div>
                <div>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => this.props.remove(elem)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <h1>Total Price: ${totalPrice}</h1>
        <Link to="/checkout">
          <Button variant="contained" color="secondary" size="medium">
            Checkout
          </Button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.order,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrder: () => dispatch(fetchOrder()),
    changeQuantity: (product, quantity) =>
      dispatch(changeProductQuantity(product, quantity)),
    remove: (productId) => dispatch(removeProduct(productId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
