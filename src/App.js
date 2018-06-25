import React, { Component } from 'react';
import Wrapper from './Wrapper';
import Product from './Product';
class App extends Component {
  render() {
    return (
      <Wrapper>
        <Product />
      </Wrapper>
    );
  }
}

export default App;
