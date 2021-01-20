import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../store';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MenuIcon from '@material-ui/icons/Menu';
import '../css-components/Navbar.css';

const Navbar = ({handleClick, isLoggedIn}) => (
  <>
    <div className="navbar__body">
      <nav>
        {isLoggedIn ? (
          <div>
            <Link to="/home">Home</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div>
            <br />
            <img
              className="navbar__image"
              src="https://pngimg.com/uploads/pokeball/pokeball_PNG30.png"
            />

            <Link to="/login">
              <LockOpenIcon /> Login
            </Link>
            <Link to="/signup">
              <AssignmentIcon /> Sign Up
            </Link>
            <Link to="/product">
              <MenuIcon /> Cards For Sale
            </Link>
            <Link to="/order">
              <ShoppingCartIcon /> Cart
            </Link>
          </div>
        )}
      </nav>
    </div>
    <hr className="nabvar__hr" />
  </>
);

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    }
  };
};

export default connect(mapState, mapDispatch)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
