import React from 'react';
import {Navbar} from '.';
import Routes from './Routes';
import SingleProduct from './SingleProduct';
import AllProducts from './allProducts';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
