import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import '../css-components/UserHome.css';

/**
 * COMPONENT
 */

export const UserHome = (props) => {
  const {email, firstName} = props;
  console.log(props);

  return (
    <body className="userHome">
      <div className="userFirstDiv">
        <h3 className="userHomeText">
          Welcome, {firstName}, our beautiful user. Please click on the Cards
          For Sale button to view your new friends.{' '}
        </h3>
        <img
          className="userImage"
          src="https://i.etsystatic.com/12240578/r/il/48bbd5/1216795870/il_570xN.1216795870_92ok.jpg"
        />
      </div>
    </body>
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
