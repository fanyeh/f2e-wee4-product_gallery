import React, { Component } from 'react';
import Wrapper from './Wrapper';
import Product from './Product';
import Home from './Home';
class App extends Component {
  render() {
    return (
      <Wrapper>
        <Home />
        <Product />
      </Wrapper>
    );
  }
}

export default App;
