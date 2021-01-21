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

      <div className="Cart_items">
        <h1 className="Cart__header">Cart</h1>
        <div>
          {this.props.order.map((elem) => {
            totalPrice += Number(elem.price);
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
                  <form action="/action_page.php">
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
                  <Button variant="contained" color="secondary" size="small">
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
