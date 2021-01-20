import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

/**
 * COMPONENT
 */

export const UserHome = (props) => {
  const {email, firstName} = props;
  console.log(props);

  return (
    <div>
      <h3>
        Welcome, {firstName}, our beautiful user. Please click on the Cards For
        Sale button to view your new friends.{' '}
      </h3>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
    firstName: state.user.firstName,
  };
};

export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string,
};
