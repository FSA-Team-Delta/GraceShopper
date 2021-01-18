import React from 'react';
import {connect} from 'react-redux';
import {fetchOrder} from '../store/order';

export class Order extends React.Component {
  componentDidMount() {
    this.props.fetchOrder();
  }
  render() {
    return (
      <div>
        <div>
          <h1>This is the Order Page</h1>
        </div>
        <div>
          {this.props.order.map(elem => {
            return (
              <div>
                <h2>Order ID: {elem.id}</h2>
                <h2>Order Completed: {elem.completed}</h2>
                <h2>Order Shipping Method: {elem.shippingOption}</h2>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    order: state.order
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrder: () => dispatch(fetchOrder())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
