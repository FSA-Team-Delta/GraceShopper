import React from 'react';
import {connect} from 'react-redux';
import {fetchOrder} from '../store/order';
import '../css-components/Checkout.css';

export class Checkout extends React.Component {
  componentDidMount() {
    this.props.fetchOrder();
  }
  render() {
    return (
      <div className="checkoutPage">
        <div>
          <h1 className="checkoutText">Complete Your Order</h1>
          {/* <img
            src="https://i.etsystatic.com/9456876/r/il/6a64a1/608965579/il_570xN.608965579_5nfa.jpg"
            className="chooseYou"
          /> */}
        </div>
        <div>
          <form>
            <label htmlFor="name" className="checkoutText">
              Name:{' '}
            </label>
            <input
              name="name"
              type="text"
              value=""
              onChange={this.handleChange}
            />
            <label htmlFor="email" className="checkoutText">
              Email:{' '}
            </label>

            <input
              name="email"
              type="text"
              value=""
              onChange={this.handleChange}
            />
            <label htmlFor="Address" className="checkoutText">
              Address:{' '}
            </label>

            <input
              name="Address"
              type="text"
              value=""
              onChange={this.handleChange}
            />
            <label htmlFor="phone" className="checkoutText">
              Phone:{' '}
            </label>

            <input
              name="phone"
              type="text"
              value=""
              onChange={this.handleChange}
            />
            <button type="submit">Pay With Card</button>
          </form>
          <div>
            {this.props.order.map((order) => {
              return (
                <div key={this.props.order.id}>
                  <h2>Order ID: {this.props.order.id}</h2>
                  <h2>Order Completed: {this.props.order.completed}</h2>
                  <h2>
                    Order Shipping Method: {this.props.order.shippingOption}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
