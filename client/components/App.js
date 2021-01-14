import React from 'react';
import {Navbar} from '.';
import Routes from './Routes';
import SingleProduct from './SingleProduct';

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes />
      <SingleProduct />
    </div>
  );
};

export default App;
