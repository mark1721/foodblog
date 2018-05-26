import React, { Component } from 'react';

// for custom styling components
import styled from 'styled-components';

const Body = styled.div`
  padding-right: 60px;
  padding-left: 35%;
  font-family: 'Montserrat', sans-serif;
`

class Home extends Component {

  render() {
    return (
      <Body>
        This is the home page.
      </Body>
    );
  }
}

export default Home;
