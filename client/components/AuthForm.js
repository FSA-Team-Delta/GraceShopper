import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {auth} from '../store';
import '../css-components/AuthForm.css';
/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const {name, displayName, handleSubmit, error} = props;

  if (props.name === 'signup') {
    return (
      <div className="authForm__body">
        <h1>Signup</h1>

        <form onSubmit={handleSubmit} name={name}>
          <div>
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <input name="email" type="text" />
          </div>
          <div>
            <label htmlFor="firstName">
              <small>First Name</small>
            </label>
            <input name="firstName" type="text" />
          </div>
          <div>
            <label htmlFor="lastName">
              <small>Last Name</small>
            </label>
            <input name="lastName" type="text" />
          </div>
          <div>
            <label htmlFor="username">
              <small>Username</small>
            </label>
            <input name="username" type="text" />
          </div>
          <div>
            <label htmlFor="address">
              <small>Address</small>
            </label>
            <input name="address" type="text" />
          </div>
          <div>
            <label htmlFor="phone">
              <small>Phone Number</small>
            </label>
            <input name="phone" type="integer" />
          </div>
          <div>
            <label htmlFor="password">
              <small>Password</small>
            </label>
            <input name="password" type="password" />
          </div>
          <div>
            <button type="submit">{displayName}</button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </div>
    );
  } else {
    return (
      <div className="authForm__body">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} name={name}>
          <div>
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <input name="email" type="text" />
          </div>
          <div>
            <label htmlFor="password">
              <small>Password</small>
            </label>
            <input name="password" type="password" />
          </div>
          <div>
            <button type="submit">{displayName}</button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </div>
    );
  }
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error,
  };
};

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      if (evt.target.name === 'signup') {
        const {
          firstName: {value: first},
          lastName: {value: last},
          email: {value: mail},
          username: {value: username1},
          address: {value: address1},
          phone: {value: phone1},
          password: {value: password1},
        } = evt.target;

        const info = {
          firstName: first,
          lastName: last,
          email: mail,
          username: username1,
          address: address1,
          phone: phone1,
          password: password1,
        };

        dispatch(auth(info, evt.target.name));
      } else {
        const {password, email} = evt.target;

        const info = {
          password: password.value,
          email: email.value,
        };
        console.log('password', evt.target.password.value);
        dispatch(auth(info, evt.target.name));
      }
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
};
