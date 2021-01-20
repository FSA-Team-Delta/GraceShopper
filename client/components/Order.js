import React from 'react';
import {connect} from 'react-redux';
import {fetchOrder} from '../store/order';
import {Button} from '@material-ui/core';
import '../css-components/Order.css';
import {Link} from 'react-router-dom';

// sample data format displayed.. pending changes for data flow

export class Order extends React.Component {
  componentDidMount() {
    this.props.fetchOrder();
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <h1 className="Cart__header">Cart</h1>
            <br />
          </div>
          <h2>Order ID: 1</h2>
          <div className="Cart__items">
            <div className="Cart__description">
              {/* <img src="https://images.pokemontcg.io/xy7/10.png" />
              <h4>Item: Vespiquen</h4>
              <h4>Price: $10.00</h4> */}
            </div>
            <div className="Cart__description">
              <div>
                <form action="/action_page.php">
                  <input type="number" id="quantity" name="quantity" step="1" />
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    type="submit"
                  >
                    Change Quantity
                  </Button>
                </form>
                <Button variant="contained" color="secondary" size="small">
                  Remove
                </Button>
              </div>
              <br />
            </div>
            {/* {this.props.order.map((elem) => {
            return (
              <div>
                <h2>Order ID: 1</h2>
                <h2>Order Completed: Completed</h2>
                <h2>Order Shipping Method: 2 weeks</h2>
              </div>
            );
          })} */}
          </div>
          <div className="Cart__items">
            <div className="Cart__description">
              {/* <img src="https://images.pokemontcg.io/xy7/10.png" />
              <h4>Item: Vespiquen</h4>
              <h4>Price: $10.00</h4> */}
            </div>
            {/* <div className="Cart__description">
              <div>
                <form action="/action_page.php">
                  <input type="number" id="quantity" name="quantity" step="1" />
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    type="submit"
                  >
                    Change Quantity
                  </Button>
                </form>
                <Button variant="contained" color="secondary" size="small">
                  Remove
                </Button>
              </div>
              <br />
            </div> */}
            {/* {this.props.order.map((elem) => {
            return (
              <div>
                <h2>Order ID: 1</h2>
                <h2>Order Completed: Completed</h2>
                <h2>Order Shipping Method: 2 weeks</h2>
              </div>
            );
          })} */}
          </div>
          <h2>Total: $20.00</h2>
          <h2>Item Count: 2</h2>
          <Link to="/checkout">
            {' '}
            <Button variant="contained" color="secondary" size="medium">
              Checkout
            </Button>
          </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Order);
